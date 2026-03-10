import { motion } from "framer-motion";
import { Bug, ShieldAlert, Home, Zap, Droplets, Wind, AlertTriangle, Crosshair } from "lucide-react";

const SERVICES = [
  { name: "Ants", icon: Bug },
  { name: "Crickets", icon: Zap },
  { name: "Bedbugs", icon: Home },
  { name: "Roaches", icon: Bug },
  { name: "Carpet Beetles", icon: ShieldAlert },
  { name: "Wasps & Hornets", icon: Wind },
  { name: "Mosquitos", icon: Droplets },
  { name: "Termites", icon: AlertTriangle },
  { name: "Mice & Rats", icon: Crosshair },
  { name: "Rodent Proofing", icon: ShieldAlert },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-secondary/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-3">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6">Comprehensive Pest Control</h3>
          <p className="text-lg text-muted-foreground">
            From tiny ants to stubborn rodents, we have the expertise and tools to protect your space. Residential or commercial, we handle it all.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
