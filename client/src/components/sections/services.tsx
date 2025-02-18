import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart3, LineChart, Lightbulb, Settings } from "lucide-react";

const services = [
  {
    title: "Revenue Operations",
    description: "Optimize your revenue streams through data-driven strategies and streamlined processes.",
    icon: BarChart3
  },
  {
    title: "Sales Operations",
    description: "Build and scale efficient sales processes that drive consistent growth and results.",
    icon: LineChart
  },
  {
    title: "Business Scaling",
    description: "Transform your business with proven scaling strategies and operational excellence.",
    icon: Settings
  },
  {
    title: "SaaS Development",
    description: "Create and launch successful SaaS offerings that capture market opportunities.",
    icon: Lightbulb
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Comprehensive solutions to help your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
