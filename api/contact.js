import { z } from 'zod';

// Schema validation
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate the request body
    const data = contactSchema.parse(req.body);

    // Forward to Zapier webhook
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

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Return appropriate error based on type
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    return res.status(500).json({ 
      message: "Failed to process contact form"
    });
  }
}
