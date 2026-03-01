import type { APIRoute } from "astro";
import { getSupabaseServiceRoleClient } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const supabase = getSupabaseServiceRoleClient();

    const { data: existing } = await supabase
      .from("user_applications")
      .select("id, status")
      .eq("email", data.email.toLowerCase())
      .in("status", ["PENDING", "APPROVED"])
      .maybeSingle();

    if (existing) {
      return new Response(
        JSON.stringify({
          error: true,
          message:
            "Ya existe una solicitud con este correo. Por favor contacta soporte si necesitas ayuda.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { error } = await supabase.from("user_applications").insert({
      email: data.email.toLowerCase(),
      first_name: data.firstName,
      last_name: data.lastName,
      age: data.age ?? null,
      gender: data.gender ?? null,
      phone_number: data.phoneNumber ?? null,
      residence_country: data.residenceCountry ?? null,
      weight: data.weight ?? null,
      height: data.height ?? null,
      has_injury: data.hasInjury,
      injury_description: data.injuryDescription ?? null,
      doctor_clearance: data.doctorClearance,
      is_taking_medicament: data.isTakingMedicament,
      is_pregnant: data.isPregnant,
      recent_surgery: data.recentSurgery,
      days_training_per_week: data.daysTrainingPerWeek ?? null,
      activity_level: data.activityLevel ?? null,
      principal_objective: data.principalObjective ?? null,
      weight_to_lose: data.weightToLose ?? null,
      illness_names: data.illnessNames?.length > 0 ? data.illnessNames : null,
      other_illness: data.otherIllness ?? null,
      selected_plan: data.selectedPlan,
      payment_method: data.paymentMethod,
      payment_proof_url: data.paymentProofUrl,
      status: "PENDING",
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: true, message: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: false, message: "Solicitud enviada exitosamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Submit error:", err);
    return new Response(
      JSON.stringify({ error: true, message: "Error al procesar la solicitud" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
