import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Loader2, Send } from "lucide-react";
import { api } from "@shared/routes";
import type { ContactMessageInput } from "@shared/routes";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const mutation = useCreateContactMessage();
  
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactMessageInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully!",
          description: "We will get back to you shortly to schedule your free inspection.",
          variant: "default",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Failed to send message",
          description: error.message || "Please try calling us directly.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top-right rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6">Claim Your Free Inspection</h3>
            <p className="text-lg text-muted-foreground mb-10">
              Don't let pests take over your life. Contact us today for immediate assistance and a free, no-obligation quote.
            </p>

            <div className="space-y-8">
              <a href="tel:5163604026" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Call Us Directly</h4>
                  <p className="text-muted-foreground text-xl font-medium group-hover:text-primary transition-colors">516-360-4026</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Service Area</h4>
                  <p className="text-muted-foreground font-medium">Proudly serving all of NYC</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Full Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && <p className="text-destructive text-xs font-medium">{form.formState.errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="(516) 360-4026"
                  />
                  {form.formState.errors.phone && <p className="text-destructive text-xs font-medium">{form.formState.errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email Address</label>
                  <input 
                    {...form.register("email")}
                    type="email"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && <p className="text-destructive text-xs font-medium">{form.formState.errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Service Needed (Optional)</label>
                  <select 
                    {...form.register("serviceType")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="Roaches">Roaches</option>
                    <option value="Rodents">Mice & Rats</option>
                    <option value="Bedbugs">Bedbugs</option>
                    <option value="Wildlife">Wildlife Trapping</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your pest problem..."
                />
                {form.formState.errors.message && <p className="text-destructive text-xs font-medium">{form.formState.errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={mutation.isPending}
                className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {mutation.isPending ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="w-5 h-5" /> Request Free Quote</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
