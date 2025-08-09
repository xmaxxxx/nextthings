import dbConn from "@/utils/dbconn";
import Contact from "@/models/contact";

export async function POST(req) {
    try {
        const body = await req.json();
        await dbConn();
        await Contact.create(body);


                // Send email notification using Resend
                const resend = new Resend(process.env.RESEND_API_KEY);
                await resend.emails.send({
                    from: "Portfolio Contact <onboarding@resend.dev>",
                    to: "amritpal29919singh@gmail.com",
                    subject: `New Contact Form Submission from ${body.username}`,
                    text: `Name: ${body.username}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
                });

        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        });
    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}