"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  job: z.string().min(2, "Please specify the job you are interested in"),
  location: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `Hello, I would like to enquire about job opportunities.\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Job Interested In:* ${data.job}\n*Preferred Location:* ${data.location || 'Not specified'}\n*Message:* ${data.message || 'None'}\n\nSent via ${siteConfig.name} website enquiry form.`;
    
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form and show success
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="enquire" className="py-24 bg-white relative">
      <Container>
        <SectionHeading 
          title="Enquire for Jobs" 
          subtitle="Looking for your next career move? Fill out the form below and our team will get in touch."
        />

        <div className="max-w-2xl mx-auto">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2 font-display">Thank You!</h3>
              <p className="text-green-700">
                Your enquiry has been formatted and redirected to WhatsApp. Please hit send in your WhatsApp application.
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setIsSuccess(false)}
              >
                Submit another enquiry
              </Button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6 bg-background p-6 md:p-8 rounded-2xl border border-primary/5 shadow-sm"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-primary/20'} bg-white focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-primary/20'} bg-white focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="9876543210"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="job" className="block text-sm font-medium text-primary mb-2">Job Interested In / Qualification *</label>
                <input
                  id="job"
                  type="text"
                  {...register("job")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.job ? 'border-red-500' : 'border-primary/20'} bg-white focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="e.g. Software Engineer / B.Tech"
                />
                {errors.job && <p className="text-red-500 text-sm mt-1">{errors.job.message}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-primary mb-2">Preferred Location (Optional)</label>
                <input
                  id="location"
                  type="text"
                  {...register("location")}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="e.g. Kochi, Bangalore"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Any additional details..."
                />
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Enquiry"}
                </Button>
                <p className="text-xs text-center text-primary/60 mt-4">
                  You&apos;ll be redirected to WhatsApp to send your enquiry.
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </Container>
    </section>
  );
}
