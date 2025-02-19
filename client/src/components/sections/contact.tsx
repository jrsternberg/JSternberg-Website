// File: /api/contact.js
import { z } from 'zod';
import https from 'https';
import url from 'url';

// Schema validation
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Helper function to send data to Zapier using Node.js https module (avoids CORS)
function sendToZapier(data) {
  return new Promise((resolve, reject) => {
    // Parse the Zapier webhook URL
    const zapierUrl = url.parse('https://hooks.zapier.com/hooks/catch/21760921/2wgevbm/');
    
    // Prepare the request options
    const options = {
      hostname: zapierUrl.hostname,
      path: zapierUrl.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    // Convert data to JSON string
    const postData = JSON.stringify(data);
    
    // Create the request
    const req = https.request(options, (res) => {
      let responseData = '';
      
      // Collect response data
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      // Handle end of response
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ success: true, data: responseData });
        } else {
          reject(new Error(`Request failed with status code ${res.statusCode}`));
        }
      });
    });
    
    // Handle errors
    req.on('error', (error) => {
      reject(error);
    });
    
    // Send the data
    req.write(postData);
    req.end();
  });
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST requests for actual form submissions
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate the request body
    const data = contactSchema.parse(req.body);

    // Send to Zapier using Node.js built-in https (avoids CORS)
    await sendToZapier(data);

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
      message: "Failed to process contact form",
      error: error.message
    });
  }
}
