import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Placements } from "@/components/sections/Placements";
import { Mission } from "@/components/sections/Mission";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Placements />
        <Mission />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
