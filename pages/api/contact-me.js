import nodemailer from 'nodemailer'

// /api/contact-me 
export default async (req, res) => {
    if (req.method === 'POST') {
        const { EmailOrPhone, FullName, Message } = req.body


        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.email_user, // generated ethereal user
                pass: process.env.email_pass, // generated ethereal password
            },
        });

        try {
            await transporter.sendMail({
                from: process.env.email_user, // sender address
                to: process.env.email_to, // list of receivers
                subject: " شما پیام از سایت شخصی حمیدرضا قنبری دارید", // Subject line
                text: Message, // plain text body
                html: `<b>from : ${FullName}</b><br /><b>email or phone : ${EmailOrPhone}</b><br /><p>body : ${Message}</p>`, 
            });

            res.status(201).json({ message: `Your Message is Successfully send to Hamidreza ghanbari.` })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'errro happened' })
        }



    }
}