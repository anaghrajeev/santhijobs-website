"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary font-display"
          >
            {siteConfig.tagline}
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto"
          >
            {siteConfig.description}
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" asChild>
              <Link href="#enquire">Enquire for Jobs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="pt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-primary/10 mt-12"
          >
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-accent font-display">500+</span>
              <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">Placements</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-bold text-accent font-display">100+</span>
              <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">Hiring Partners</span>
            </div>
            <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
              <span className="text-3xl md:text-4xl font-bold text-accent font-display">10+</span>
              <span className="text-sm font-medium text-primary/60 uppercase tracking-wider">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
