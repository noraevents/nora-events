import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadMagnet, addContactBrevo } from "@/lib/brevo";

const schema = z.object({
  prenom: z.string().min(1).max(100),
  email: z.string().email(),
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
    return NextResponse.json({ error: "Données invalides" }, { status: 422 });
  }

  const { prenom, email } = parsed.data;

  try {
    await sendLeadMagnet(email, prenom);
  } catch (err) {
    console.error("Erreur envoi lead magnet:", err);
    return NextResponse.json({ ok: true, warning: "Email non envoyé" }, { status: 200 });
  }

  // Enregistrement contact en arrière-plan — on n'attend pas le résultat
  addContactBrevo(email, prenom).catch((err) =>
    console.error("Erreur ajout contact Brevo:", err)
  );

  return NextResponse.json({ ok: true }, { status: 200 });
}
