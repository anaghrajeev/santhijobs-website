"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { placementsData, hiringPartners } from "@/data/placements";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Placements() {
  return (
    <section id="placements" className="py-24 bg-white">
      <Container>
        <SectionHeading 
          title="Recent Placements" 
          subtitle="Explore some of the recent successful placements we've made across various industries."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {placementsData.map((placement) => (
            <motion.div key={placement.id} variants={fadeUp} className="h-full">
              <Card className="p-6 h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-xs font-medium bg-primary/5 text-primary rounded-full">
                    {placement.companyOrIndustry}
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary mb-2">
                    {placement.role}
                  </h3>
                  <p className="text-primary/70 mb-4">{placement.location}</p>
                </div>
                <div className="pt-4 border-t border-primary/10 mt-4">
                  <span className="text-sm font-semibold text-accent">
                    {placement.count}+ Candidates Placed
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-medium text-primary/60 mb-8">Trusted by Top Companies</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {hiringPartners.map((partner, idx) => (
              <div key={idx} className="text-xl font-bold font-display text-primary">
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
