import nodemailer from 'nodemailer'

// /api/contact-me 
export default async (req, res) => {
    if (req.method === 'POST') {
        const { _replyTo, name, message } = req.body


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
                subject: " شما پیام از سایت حمیدرضا قنبری دارید", // Subject line
                text: message, // plain text body
                html: `<b>from : ${name}</b><br /><b>email : ${_replyTo}</b><br /><p>body : ${message}</p>`, 
            });

            res.status(201).json({ message: `Your Message is Successfully send to Hamidreza ghanbari.` })

        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'errro happened' })
        }



    }
}