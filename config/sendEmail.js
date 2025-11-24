// import { Resend } from 'resend';
// import dotenv from 'dotenv';

// dotenv.config();

// if (!process.env.RESEND_API) {
//   console.error("❌ RESEND_API key is missing in .env file");
// }

// const resend = new Resend(process.env.RESEND_API);

// const sendEmail = async ({ sendTo, subject, html }) => {
//   try {
//     console.log("📧 Trying to send email to:", sendTo);

//     const { data, error } = await resend.emails.send({
//       from: 'Kiranahub <onboarding@resend.dev>', // MUST be verified in Resend dashboard
//       to: sendTo,
//       subject,
//       html,
//     });

//     if (error) {
//       console.error("❌ Resend error:", error);
//       return null;
//     }

//     console.log("✅ Email sent successfully:", data);
//     return data;

//   } catch (err) {
//     console.error("❌ Error while sending email:", err.message || err);
//     return null;
//   }
// };

// export default sendEmail;
// server/utils/sendEmail.js
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.RESEND_API) {
  console.error("❌ RESEND_API key is missing in .env file");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    console.log("📧 Trying to send email to:", sendTo);
    const { data, error } = await resend.emails.send({
      from: 'Kiranahub <onboarding@resend.dev>', // must be verified
      to: sendTo,
      subject,
      html,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return null;
    }

    console.log("✅ Email sent successfully:", data);
    return data;
  } catch (err) {
    console.error("❌ Error while sending email:", err.message || err);
    return null;
  }
};

export default sendEmail;

