const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

export default function handler(req, res) {
  const { email, full_name, message } = req.body;
  res.send(200);
  try {
    const msg = {
      to: "armcmillan22@gmail.com",
      // Change to your recipient | change to information@mcmillanfarms.ca
      from: process.env.SENDGRID_FROM, // Change to your verified sender
      replyto: email,
      subject: `New Portfolio Message - from ${full_name}`,
      text: message,
    };
    sgMail
      .send(msg)
      .then((data) => {
        return data[0];
      })
      .then((data) => {
        console.log("email sent");
        res.status(200).end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log("email not sent");
    res.status(500).end();
  }
}
