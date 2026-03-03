import type { APIRoute } from "astro";
import { getSupabaseServiceRoleClient } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
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
    const fileName = `${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const supabase = getSupabaseServiceRoleClient();
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from("payment-proofs")
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      return new Response(
        JSON.stringify({ error: uploadError.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ url: fileName }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Upload error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
