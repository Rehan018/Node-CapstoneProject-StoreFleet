
import nodemailer from 'nodemailer';

export const sendWelcomeEmail = async (user) => {
  try {
    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.STORFLEET_SMPT_MAIL,
        pass: process.env.STORFLEET_SMPT_MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from:  process.env.STORFLEET_SMPT_MAIL, // replace with your email
      to: user.email,
      subject: 'Welcome to YourApp',
      text: `Dear ${user.name},\n\nWelcome to YourApp! We are excited to have you on board.\n\nBest regards,\nYourApp Team`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Welcome email sent successfully!');
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};
