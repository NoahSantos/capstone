'use server'

import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function sendResetPasswordEmail(email) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
        },
    });

    const resetUrl = `http://localhost:3000/login/password/reset`;

    const token = crypto.randomBytes(32).toString('hex');
    const now = new Date();
    const expiration = new Date(now.getTime() + 2 * 60 * 60 * 1000);

    const mailOptions = {
        from: process.env.EMAIL_FROM, // sender's email address
        to: email, // recipient's email address
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link to reset your password: ${resetUrl}. Here is your verification token: ${token}.`,
        html: `<p>You requested a password reset. Click the link to reset your password:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p> Here is your verification token: ${token}.</p>`,
    };

    try {
        await fetch('http://localhost:7000/tokens', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({token, expiration, email}),
        })
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        throw new Error('Error sending password reset email');
    }
}

export async function resetPassword(token, email, password1, password2){
    try {
        let data = await fetch('http://localhost:7000/tokens')
        let check = await data.json();

        let date = new Date();
        
        for (let tok of check.data) {
            if(tok.token === token && tok.email === email){
                if(tok.expiration < date){
                    return 'expired';
                }else{
                    if(password1 === password2){
                        let reset = await fetch(`http://localhost:7000/users/reset/${email}`, {
                            method: 'PUT',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({password: password1}),
                        })
                        let result = await reset.json();

                        if(result.success){
                            return 'success';
                        }else{
                            return 'error';
                        }
                    }else{
                        return 'error';
                    }
                }
            }
        }
    } catch (error) {
        return 'error'
    }
}