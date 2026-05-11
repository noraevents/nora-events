import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendNotificationToNora, sendConfirmationToProspect } from "@/lib/brevo";

const schema = z.object({
  nom: z.string().min(2).max(100),
  email: z.string().email(),
  telephone: z.string().min(10).max(15),
  typeEvenement: z.string().min(1),
  dateEvenement: z.string().min(1),
  lieu: z.string().min(1),
  nombreInvites: z.string().min(1),
  offre: z.string().optional().default(""),
  message: z.string().optional().default(""),
  rgpd: z.literal(true),
});

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  try {
    await Promise.all([
      sendNotificationToNora({
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
        typeEvenement: data.typeEvenement,
        dateEvenement: data.dateEvenement,
        lieu: data.lieu,
        nombreInvites: data.nombreInvites,
        offre: data.offre ?? "",
        message: data.message ?? "",
      }),
      sendConfirmationToProspect(data.email, data.nom),
    ]);
  } catch (err) {
    console.error("Erreur envoi email:", err);
    // On retourne quand même un succès pour ne pas bloquer l'UX
    // L'erreur est loggée côté serveur — Nora peut voir les leads dans les logs Vercel
    return NextResponse.json({ ok: true, warning: "Email non envoyé" }, { status: 200 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
