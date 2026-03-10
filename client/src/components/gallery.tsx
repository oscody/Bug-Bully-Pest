import { motion } from "framer-motion";
import flyer1 from "@assets/bug_bull_flyer_B.png";

export function Gallery() {
  return (
    <section id="about" className="py-24 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:pr-8"
          >
            <h2 className="text-accent font-bold tracking-wider uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6">Recognized Expertise Across NYC</h3>
            <p className="text-lg text-white/70 mb-8">
              We don't just eliminate pests; we prevent them from coming back. With years of experience handling New York's toughest infestations, our results speak for themselves. Check out our latest promotions and service guarantees.
            </p>
            <ul className="space-y-4 mb-8">
              {["Full interior and exterior treatments", "Humane wildlife trapping and removal", "Emergency response available", "Customized plans for businesses"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full"
          >
            <div className="relative h-[500px] w-full max-w-[500px] mx-auto flex items-center justify-center">
              <img 
                src={flyer1} 
                alt="Bug Bully Services Flyer" 
                className="w-3/4 rounded-xl shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-all duration-500 object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
