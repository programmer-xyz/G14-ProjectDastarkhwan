import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: "temp@gmail.com",
      pass: "Emaan",
    },
  });

  const mailOptions = {
    from:"temp@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

