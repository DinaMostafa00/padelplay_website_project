import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });
  const { firstName, lastName, email, message } = body;

  const messageData = {
    from: "Contact Form <sandboxef2a0dc26edd434b8012b9368706ef18.mailgun.org>",
    to: "playvioforms@gmail.com",
    subject: "New Contact Form!!",
    text: `Hello!!,

    You have a new form entry from: ${firstName} ${lastName} , ${email}.

    ${message}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err: any) {
    console.error("Error Sending Email", err);
  }

  return new Response("isSubmitted: true");
}
