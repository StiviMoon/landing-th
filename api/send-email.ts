// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Faltan campos obligatorios" })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"Formulario Web Torhann" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Has recibido un nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ message: "Correo enviado exitosamente" })
  } catch (error) {
    console.error("Error enviando correo:", error)
    return res.status(500).json({ message: "Error al enviar el correo" })
  }
}
