import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

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

      res.json({ success: true });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ message: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
