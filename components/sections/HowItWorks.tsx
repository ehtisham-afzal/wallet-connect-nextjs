import { motion } from "framer-motion";
import { AnimatedList } from "@/components/magicui/animated-list";

const steps = [
  "Connect your social media accounts",
  "Create and schedule your content",
  "Analyze performance and engagement",
  "Grow your audience with smart insights",
];

export default function HowItWorks() {
  return (
    <section className="py-20 h-[500px]">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">How It Works</h2>
        <div className="max-w-2xl mx-auto">
          <AnimatedList delay={2000}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="p-6 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="mr-2 font-bold text-primary">{index + 1}.</span>
                {step}
              </motion.div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}