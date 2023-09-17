import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
    url: "https://api.eu.mailgun.net",
  });

  const {
    arenaName,
    phoneNumber,
    email,
    country,
    address,
    quantity,
    additionalInformation,
    plan,
  } = body;

  const messageData = {
    from: "Purchase Request PLAYVIO!! <contact@mail.plaivio.se>",
    to: "playvioforms@gmail.com, dinayoussry96@gmail.com",
    subject: "Purchase Request!!",
    text: `Hello!!,

    You have a new form entry from: Name: ${arenaName} ${phoneNumber} , E-mail: ${email}, Country${country}, address${address} , quantity${quantity}, plan${plan}   .

    additionalInformation${additionalInformation}.
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
