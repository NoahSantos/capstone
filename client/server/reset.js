'use server'

import nodemailer from 'nodemailer';
import crypto from 'crypto';
import {redirect} from 'next/navigation'

export async function sendResetPasswordEmail(email) {
    // Configure the transport options using SendGrid
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
        user: 'apikey', // This is the literal string 'apikey', not your SendGrid username
        pass: process.env.SENDGRID_API_KEY, // Your SendGrid API key
        },
    });

    // Define the reset URL
    const resetUrl = `http://localhost:3000/login/password/reset`;

    const resetToken = crypto.randomBytes(32).toString('hex');

    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_FROM, // Your email address
        to: email, // Recipient's email address
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link to reset your password: ${resetUrl}. Here is your verification token: ${resetToken}.`,
        html: `<p>You requested a password reset. Click the link to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p> Here is your verification token: ${resetToken}.</p>`,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent');
        return true;
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw new Error('Error sending password reset email');
    }
}