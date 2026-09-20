import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 lg:pb-8 pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display tracking-tight">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="text-primary-foreground/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#placements" className="text-primary-foreground/70 hover:text-white transition-colors">Placements</Link></li>
              <li><Link href="#mission" className="text-primary-foreground/70 hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="#enquire" className="text-primary-foreground/70 hover:text-white transition-colors">Enquire Now</Link></li>
              <li><Link href="#contact" className="text-primary-foreground/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary-foreground/70">
                <MapPin className="shrink-0 text-accent" size={20} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-3 text-primary-foreground/70">
                <Phone className="shrink-0 text-accent" size={20} />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-3 text-primary-foreground/70">
                <Mail className="shrink-0 text-accent" size={20} />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
