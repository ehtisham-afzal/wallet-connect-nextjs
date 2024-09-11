import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Calendar, BarChart2, Users, Zap } from "lucide-react";

const features = [
  {
    name: "Smart Scheduling",
    description:
      "AI-powered scheduling to post at the best times for engagement.",
    icon: Calendar,
  },
  {
    name: "Analytics Dashboard",
    description:
      "Comprehensive insights to track and improve your social media performance.",
    icon: BarChart2,
  },
  {
    name: "Audience Growth",
    description:
      "Tools to help you grow and engage with your audience effectively.",
    icon: Users,
  },
  {
    name: "Automation",
    description:
      "Automate repetitive tasks and focus on creating great content.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Powerful Features
        </h2>
        <BentoGrid className="max-w-4xl grid-cols-1 mx-auto sm:grid-cols-3">
          {features.map((feature, idx) => (
            <BentoCard
              key={feature.name}
              name={feature.name}
              description={feature.description}
              Icon={feature.icon}
              className={`${
                idx === 1 || idx === 2 ? "col-span-1 sm:col-span-2" : "col-span-1"
              } bg-gray-500`}
              background={
                <div className="absolute inset-0 flex items-start justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <span className="pt-5 text-3xl text-muted">{feature.name}</span>
                </div>
              }
              href="#"
              cta="Learn more"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
