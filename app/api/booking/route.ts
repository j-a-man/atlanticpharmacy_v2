import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

let bookedSlots: { date: string; time: string }[] = [];

export async function GET(request: Request) {
  return NextResponse.json({ bookedSlots });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, date, time, service } = body;

        const isTaken = bookedSlots.some(slot => slot.date === date && slot.time === time);
        
        if (isTaken) {
             return NextResponse.json(
                { success: false, message: 'This time slot was just booked by someone else.' }, 
                { status: 409 }
            );
        }

        bookedSlots.push({ date, time });

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '465', 10),
            secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const pharmacySubject = `📅 New Booking: ${service} @ ${time}`;
        const pharmacyHtml = `
            <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; padding: 20px; border-radius: 8px;">
                <h2 style="color: #16a34a;">New Appointment Received</h2>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Customer Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <hr />
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
            </div>
        `;

        const userSubject = `✅ Appointment Confirmed: Atlantic Pharmacy`;
        const userHtml = `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px; max-w-600px;">
                <h2 style="color: #16a34a;">Your Appointment is Confirmed</h2>
                <p>Hi ${name},</p>
                <p>We have received your booking for a <strong>${service}</strong>.</p>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 5px 0;"><strong>📅 Date:</strong> ${date}</p>
                    <p style="margin: 5px 0;"><strong>⏰ Time:</strong> ${time}</p>
                    <p style="margin: 5px 0;"><strong>📍 Location:</strong> 1706B Atlantic Ave, Brooklyn, NY</p>
                </div>

                <p>If you need to reschedule or cancel, please give us a call at <strong>(718) 484-2260</strong>.</p>
                <br />
                <p style="font-size: 12px; color: #888;">Atlantic Pharmacy</p>
            </div>
        `;

        await Promise.all([
            transporter.sendMail({
                from: `"Atlantic Pharmacy Website" <${process.env.SMTP_USER || 'jaylinman4@gmail.com'}>`,
                to: process.env.CONTACT_EMAIL_TO || 'jaylinman4@gmail.com',
                subject: pharmacySubject,
                html: pharmacyHtml,
            }),
            transporter.sendMail({
                from: `"Atlantic Pharmacy" <${process.env.SMTP_USER || 'jaylinman4@gmail.com'}>`,
                to: email,
                subject: userSubject,
                html: userHtml,
            })
        ]);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Booking Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process booking' }, 
            { status: 500 }
        );
    }
}
