// app/api/quote/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("✅ Gmail SMTP server is ready");

    const mailOptions = {
      from: `"Swift Logistics" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📦 New Quote Request",
      text: `New quote request from ${body.name} (${body.email})`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service Type:</strong> ${body.serviceType}</p>
        <p><strong>Origin:</strong> ${body.origin}</p>
        <p><strong>Destination:</strong> ${body.destination}</p>
        <p><strong>Weight:</strong> ${body.weight}</p>
        <p><strong>Dimensions:</strong> ${body.dimensions}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "✅ Email sent successfully" });
  } catch (error: any) {
    console.error("❌ Email send error:", error);
    return NextResponse.json({ success: false, error: error.toString() }, { status: 500 });
  }
}
