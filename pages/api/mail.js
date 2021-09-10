// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  res.status(200).json({ email: "EMAIL" });
  const body = JSON.parse(req.body);
  console.log(body);

  const sendGridMessage = `
    Name: ${body.fromName}\r\n
    Email: ${body.from}\r\n
    Message: ${body.message}
  `;
  const message = {
    to: "filipo.bosnjak@gmail.com",
    from: "filipo.bosnjak@gmail.com",
    subject: "[SENT FROM filipbosnjak-it.com] - " + body.subject,
    text: sendGridMessage,
    html: sendGridMessage.replace(/\r\n/g, "<br>"),
  };
  mail
    .send(message)
    .then(() => {
      //res.status(200).json({status: 'mail sent successfully'})
      console.log("success");
    })
    .catch((error) => console.log(error.message));
}
