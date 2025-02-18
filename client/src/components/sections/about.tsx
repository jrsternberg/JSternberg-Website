import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1444653389962-8149286c578a"
              alt="Business consultant"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Business with Expert Guidance
            </h2>
            <p className="text-gray-600 mb-6">
              With years of experience in revenue operations and business scaling, we help companies
              navigate their growth journey successfully. Our approach combines strategic thinking
              with practical implementation to deliver measurable results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">100+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">85%</h4>
                <p className="text-gray-600">Revenue Growth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
