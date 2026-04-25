import { Resend } from "resend";
import { contactApiSchema } from "@/lib/contact-api-schema";
import { siteConfig } from "@/lib/site";

export const POST = async (request: Request): Promise<Response> => {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactApiSchema.safeParse(json);
  if (!parsed.success)
    return Response.json({ error: "Invalid form data." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from)
    return Response.json(
      { error: "Contact delivery is not configured on the server." },
      { status: 503 },
    );

  const resend = new Resend(apiKey);

  const { name, email, phone, message } = parsed.data;
  const subject = `Quote request — ${name}`;
  const text = [
    `From: ${name} <${email}>`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
    "",
    `Submitted via ${siteConfig.businessName} website`,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
  });

  if (error)
    return Response.json({ error: "Could not deliver message." }, { status: 502 });

  return Response.json({ ok: true });
};
