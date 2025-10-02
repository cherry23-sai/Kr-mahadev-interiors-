const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); 
const nodemailer = require('nodemailer');
const twilio = require('twilio'); // Import the Twilio library

// Initialize Twilio client outside the route handler
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // 1. Save the submission to the database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // --- Create a reusable transporter for emails ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Send Notification Email to Site Owner
    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `New Message from ${name} via Website`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`,
      });
      console.log('Notification email sent successfully.');
    } catch (emailError) {
      console.error('Error sending owner notification email:', emailError);
    }
    
    // --- 3. Send Confirmation Email to User (NEW) ---
    try {
      await transporter.sendMail({
        from: `"KR Mahadev Interiors" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank You for Contacting Us!`,
        html: `<p>Hi ${name},</p><p>Thank you for getting in touch with KR Mahadev Interiors! We have received your message and will get back to you as soon as possible.</p>`,
      });
      console.log('Confirmation email sent to user successfully.');
    } catch (emailError) {
      console.error('Error sending user confirmation email:', emailError);
    }
    
    // --- 4. Send Confirmation WhatsApp to User (NEW) ---
    try {
      await twilioClient.messages.create({
         from: 'whatsapp:+14155238886', // Twilio Sandbox Number
         to: `whatsapp:${phone}`, // User's phone number with country code
         body: `Hi ${name}, thank you for contacting KR Mahadev Interiors! We've received your message and will be in touch soon.`
      });
      console.log('WhatsApp confirmation sent successfully.');
    } catch (whatsappError) {
      console.error('Error sending WhatsApp message:', whatsappError);
    }

    // --- End of All Actions ---
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;