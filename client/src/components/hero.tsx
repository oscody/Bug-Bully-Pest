import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@assets/ChatGPT_Image_Mar_9,_2026,_08_05_58_PM_1773101171269.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8">
              <Shield className="w-4 h-4" />
              Residential & Commercial Services
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6 text-balance">
              NYC's Best <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1a8b3d]">Wildlife Trapper</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
              Getting rid of all your pest needs. Expert trapper in NYC for roaches, rodents, and wildlife in your home or business.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get a Free Inspection
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:5163604026" 
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-border text-foreground rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center"
              >
                Call 516-360-4026
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-foreground/80">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Licensed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Insured</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Guaranteed</div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] rotate-6 scale-105" />
              <div className="absolute inset-0 bg-foreground rounded-[3rem] shadow-2xl flex items-center justify-center p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay transition-transform duration-1000 group-hover:scale-110" />
                <img 
                  src={logo} 
                  alt="Bug Bully Logo Large" 
                  className="relative z-10 w-full drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl border-4 border-white font-bold"
              >
                <div className="text-sm uppercase tracking-wider opacity-80">Top Rated</div>
                <div className="text-2xl font-display">NYC Expert</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
