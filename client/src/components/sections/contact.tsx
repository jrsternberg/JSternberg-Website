import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Ready to transform your business? Let's discuss how we can help. If I can't help, lunch is on me!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-xl mx-auto">
            <CardContent className="p-8 text-center">
              <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                For inquiries, questions, or to schedule a consultation, please email us directly:
              </p>
              <Button asChild size="lg" className="px-8">
                <a href="mailto:j@jsternberg.com">
                  j@jsternberg.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
