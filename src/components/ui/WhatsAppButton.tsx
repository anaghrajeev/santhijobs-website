"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello, I would like to know more about your services.")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 pb-[safe]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: ["0px 0px 0px 0px rgba(37, 211, 102, 0.4)", "0px 0px 0px 15px rgba(37, 211, 102, 0)"],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
        }
      }}
    >
      <MessageCircle size={28} className="fill-current" />
    </motion.a>
  );
}
