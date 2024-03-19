import { EmailContent } from "@/app/models/IEmailContent";
import { compileEmailTemplate, sendMail } from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    // Get the body of the request
    const request = await req.json() as EmailContent;

    // console.log({ request });

    // Send email to the new customer
    await sendMail({
      // to: process.env.SMTP_EMAIL as string,
      to: "adebiyiemmanuel953@gmail.com",
      name: "New Info",
      subject: "Dapps Information",
      body: compileEmailTemplate(request),
    });

    // Return the new user, and a message that the email was sent
    return NextResponse.json({ detail: "Successfully sent" }, { status: 201 });
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}
