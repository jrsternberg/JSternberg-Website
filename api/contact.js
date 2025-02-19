import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default async function handler(request, response) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate the incoming data
    const data = contactSchema.parse(request.body);

    // Send to Zapier webhook
    const webhookResponse = await fetch('https://hooks.zapier.com/hooks/catch/21760921/2wgevbm/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!webhookResponse.ok) {
      throw new Error('Failed to send to webhook');
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return response.status(400).json({ message: "Failed to process contact form" });
  }
}
