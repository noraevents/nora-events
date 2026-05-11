const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

interface EmailPayload {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
}

async function sendEmail(payload: EmailPayload): Promise<void> {
  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY ?? "",
    },
    body: JSON.stringify({
      sender: { name: "Nora Events", email: "contact@noraevents.fr" },
      ...payload,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Brevo error: ${error}`);
  }
}

export async function sendNotificationToNora(data: {
  nom: string;
  email: string;
  telephone: string;
  typeEvenement: string;
  dateEvenement: string;
  lieu: string;
  nombreInvites: string;
  offre: string;
  message: string;
}): Promise<void> {
  await sendEmail({
    to: [{ email: process.env.CONTACT_EMAIL ?? "contact@noraevents.fr", name: "Nora" }],
    replyTo: { email: data.email, name: data.nom },
    subject: `Nouvelle demande de devis — ${data.nom} (${data.typeEvenement})`,
    htmlContent: `
      <h2>Nouvelle demande de devis</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Nom</td><td style="padding:8px">${data.nom}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${data.telephone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Type d'événement</td><td style="padding:8px">${data.typeEvenement}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Date prévue</td><td style="padding:8px">${data.dateEvenement}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Lieu envisagé</td><td style="padding:8px">${data.lieu}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Nombre d'invités</td><td style="padding:8px">${data.nombreInvites}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Offre souhaitée</td><td style="padding:8px">${data.offre}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${data.message}</td></tr>
      </table>
    `,
  });
}

export async function sendConfirmationToProspect(email: string, nom: string): Promise<void> {
  await sendEmail({
    to: [{ email, name: nom }],
    subject: "J'ai bien reçu votre demande — Nora Events",
    htmlContent: `
      <div style="font-family:Georgia,serif;max-width:600px;margin:auto;padding:40px;background:#FAF7F4">
        <h2 style="color:#C4714A;font-size:28px">Bonjour ${nom},</h2>
        <p style="font-size:17px;line-height:1.6;color:#2C2C2C">
          J'ai bien reçu votre demande et je vous réponds dans les <strong>24 heures</strong>
          avec une proposition adaptée à votre projet.
        </p>
        <p style="font-size:17px;line-height:1.6;color:#2C2C2C">
          Si vous souhaitez aller plus vite, vous pouvez directement réserver un appel découverte de 30 minutes :
        </p>
        <a href="https://calendly.com/noraevents"
           style="display:inline-block;background:#C4714A;color:#FAF7F4;padding:14px 28px;border-radius:4px;text-decoration:none;font-size:16px;margin:16px 0">
          Réserver un appel découverte gratuit
        </a>
        <p style="font-size:15px;color:#5C7A5A;margin-top:32px">
          À très bientôt,<br>
          <strong>Nora</strong><br>
          Nora Events — Coordinatrice de mariages<br>
          Normandie & Île-de-France
        </p>
      </div>
    `,
  });
}
