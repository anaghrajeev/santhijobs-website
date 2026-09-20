"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <Container>
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Phone */}
          <motion.div variants={fadeUp} className="h-full">
            <Card className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Phone</h3>
              <p className="text-primary/70 mb-4 flex-grow">Call us for immediate assistance.</p>
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-primary hover:text-accent transition-colors">
                {siteConfig.contact.phone}
              </a>
            </Card>
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp} className="h-full">
            <Card className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Email</h3>
              <p className="text-primary/70 mb-4 flex-grow">Drop us an email anytime.</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-primary hover:text-accent transition-colors">
                {siteConfig.contact.email}
              </a>
            </Card>
          </motion.div>

          {/* Office */}
          <motion.div variants={fadeUp} className="h-full">
            <Card className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Office</h3>
              <p className="text-primary/70 mb-4 flex-grow">Visit our office in Kerala.</p>
              <span className="font-semibold text-primary">
                {siteConfig.contact.address}
              </span>
            </Card>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeUp} className="h-full">
            <Card className="p-8 h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Working Hours</h3>
              <p className="text-primary/70 mb-4 flex-grow">When we are available.</p>
              <span className="font-semibold text-primary">
                {siteConfig.contact.workingHours}
              </span>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
