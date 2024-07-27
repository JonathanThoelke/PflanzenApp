
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const { fullName, company, email, phone, postleitzahl, city, topic, message } = body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const adminMailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'Neue Kontaktanfrage',
        text: `
            Name: ${fullName}
            Unternehmen: ${company}
            E-Mail: ${email}
            Telefon: ${phone}
            PLZ: ${postleitzahl}
            Stadt: ${city}
            Themenbereich: ${topic}
            Nachricht: ${message}
        `,
    };

    const userMailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: topic,
        text: `
            Danke für die Nachricht ${fullName},

            Ihre Anfrage ist schon in Bearbeitung.

           Mit Hochachtung
          Alex von Gweenstick
        `,
    };

    try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        return NextResponse.json({ message: 'Nachricht gesendet' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Fehler beim Senden der Nachricht' }, { status: 500 });
    }
}
