import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { format } from 'date-fns';

export async function POST(req: NextRequest) {
  const { email, address, items, total } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const currentDateTime = new Date();
  const paymentDueDate = new Date(currentDateTime);
  paymentDueDate.setDate(paymentDueDate.getDate() + 30);

  //const formattedDateTime = format(currentDateTime, 'dd MM yyyy HH:mm:ss.SSS');
  const formattedDueDate = format(paymentDueDate, 'dd.MM.yyyy');

  const iban = process.env.BANK_IBAN;
  const accountHolder = process.env.BANK_ACCOUNT_HOLDER;
  const reference = format(currentDateTime, 'ddMMyyyyHHmmssSSS');

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Ihre Bestellung und Zahlungsaufforderung',
    text: `Danke für Ihre Bestellung! Hier sind Ihre Bestelldetails:
    
    Adresse:
    ${address.firstName} ${address.lastName}
    ${address.street} ${address.houseNumber}
    ${address.postalCode} ${address.city}
    
    Bestellte Artikel:
    ${items.map((item: any) => `${item.quantity} x ${item.deutscherName} - ${item.preis}`).join('\n')}
    
    Gesamtpreis: ${total}€

    Überweisungsdetails:
    IBAN: ${iban}
    Kontoinhaber: ${accountHolder}
    Verwendungszweck: ${reference}
    
    Bitte überweisen Sie den Gesamtbetrag bis zum ${formattedDueDate}.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}


