import { motion } from "framer-motion";
import ShinyButton from "@/components/magicui/shiny-button";

const plans = [
  { name: "Basic", price: "$9", features: ["5 social accounts", "50 scheduled posts", "Basic analytics"] },
  { name: "Pro", price: "$29", features: ["15 social accounts", "Unlimited scheduled posts", "Advanced analytics", "Team collaboration"] },
  { name: "Enterprise", price: "Custom", features: ["Unlimited social accounts", "Custom integrations", "Dedicated support"] },
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Choose Your Plan</h2>
        <div className="grid max-w-5xl grid-cols-1 gap-8 p-1 mx-auto h-fit md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="p-8 border rounded-lg shadow-md border-card bg-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <p className="mb-6 text-4xl font-bold">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <ShinyButton text="Choose Plan" className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}