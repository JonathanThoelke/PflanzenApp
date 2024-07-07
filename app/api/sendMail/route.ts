import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email, address, items, total } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Ihre Bestellung',
    text: `Danke für Ihre Bestellung! Hier sind Ihre Bestelldetails:
    
    Adresse:
    ${address.firstName} ${address.lastName}
    ${address.street} ${address.houseNumber}
    ${address.postalCode} ${address.city}
    
    Bestellte Artikel:
    ${items.map((item: any) => `${item.quantity} x ${item.deutscherName} - ${item.preis}`).join('\n')}
    
    Gesamtpreis: ${total}€`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}

