import { g as getSupabaseServiceRoleClient } from '../../chunks/supabase_UerCjAy7.mjs';
import { randomUUID } from 'crypto';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf"
    ];
    if (!allowedTypes.includes(file.type)) {
      return new Response(
        JSON.stringify({ error: "Tipo de archivo no permitido. Usa JPG, PNG, WebP o PDF." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return new Response(
        JSON.stringify({ error: "El archivo es demasiado grande. Máximo 10MB." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const ext = file.type === "application/pdf" ? "pdf" : file.type.split("/")[1];
    const fileName = `${Date.now()}-${randomUUID()}.${ext}`;
    const supabase = getSupabaseServiceRoleClient();
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const { error: uploadError } = await supabase.storage.from("payment-proofs").upload(fileName, buffer, {
      contentType: file.type,
      upsert: false
    });
    if (uploadError) {
      return new Response(
        JSON.stringify({ error: uploadError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(JSON.stringify({ url: fileName }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Upload error:", err);
    return new Response(
      JSON.stringify({ error: "Error al subir el archivo" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
