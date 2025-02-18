import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-gray-600">
            Deep industry knowledge and proven methodologies to drive your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Revenue Intelligence</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Advanced analytics and reporting</li>
                  <li>• Customer journey optimization</li>
                  <li>• Revenue forecasting</li>
                  <li>• Performance metrics tracking</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1"
                  alt="Business meeting"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Process optimization</li>
                  <li>• Sales team enablement</li>
                  <li>• Technology stack integration</li>
                  <li>• Scalable operations design</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
