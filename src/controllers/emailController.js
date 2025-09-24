const { sendEmail } = require('../services/emailService');

const sendEmailController = async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const info = await sendEmail({ to, subject, text });
    res.status(200).json({ message: 'Correo enviado', info });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

module.exports = { sendEmailController };
