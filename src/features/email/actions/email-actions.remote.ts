// SVELTEKIT IMPORTS
import { RESEND_API_KEY } from '$env/static/private'; // define in your .env file
import { form } from '$app/server';

// LIBRARIES
import { Resend } from 'resend';

// CONFIG
import { CONTACT_INFORMATIONS } from '@/shared/constants/constants';

// SCHEMAS
import { sendContactFormEmailSchema } from '../schemas/email-schemas';

const resend = new Resend(RESEND_API_KEY);

export const sendContactFormEmail = form(
    sendContactFormEmailSchema,
    async (data) => {
		const { error } = await resend.emails.send({
			from: `Website Contact Form <${data.email}>`,
			to: [CONTACT_INFORMATIONS.EMAILl],
			subject: `Website Contact Form: ${data.subject}`,
			html: `
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Subject: ${data.subject}</p>
                <p>Message: ${data.message}</p>
            `
		});

		if (error) {
			return {
                success: false,
                message: error.message,
                data: null,
            }
		}

		return {
            success: true,
            message: 'Email sent successfully',
            data: null,
        }
    }
);
