"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const values = [
  {
    title: "Excellence",
    description: "We strive to provide the best talent for every organization.",
    icon: Target,
  },
  {
    title: "Integrity",
    description: "Honesty and transparency in all our recruitment processes.",
    icon: ShieldCheck,
  },
  {
    title: "Empowerment",
    description: "Helping candidates achieve their true career potential.",
    icon: Users,
  },
  {
    title: "Growth",
    description: "Fostering mutual growth for businesses and individuals.",
    icon: TrendingUp,
  },
];

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Our Mission & Vision" 
              align="left"
              className="mb-8"
            />
            <p className="text-lg text-primary/80 mb-6 leading-relaxed">
              At Santhijobs, our mission is to connect exceptional talent with outstanding opportunities. We believe that the right job can transform a person&apos;s life and the right person can transform a business.
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              Our vision is to be the most trusted recruitment partner in India and beyond, known for our unwavering commitment to quality and candidate care.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={fadeUp}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 h-full"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 font-display">{value.title}</h4>
                  <p className="text-primary/70 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
