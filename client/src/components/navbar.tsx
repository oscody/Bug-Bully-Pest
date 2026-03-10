import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "@assets/ChatGPT_Image_Mar_9,_2026,_08_05_58_PM_1773101171269.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-foreground/95 backdrop-blur-md shadow-xl py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Bug Bully Logo" className="h-12 w-auto object-contain" />
            </div>
            <span className={`font-display font-black text-xl tracking-wide hidden sm:block ${isScrolled ? "text-white" : "text-foreground"}`}>
              BUG BULLY<br/>
              <span className="text-accent text-sm tracking-widest uppercase">Pest Management</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors duration-200 ${
                  isScrolled ? "text-white/90" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/bug.bullypest" 
                target="_blank" 
                rel="noreferrer"
                className={`hover:text-accent transition-colors ${isScrolled ? "text-white" : "text-foreground"}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@bugbullypest2" 
                target="_blank" 
                rel="noreferrer"
                className={`hover:text-accent transition-colors ${isScrolled ? "text-white" : "text-foreground"}`}
              >
                <SiTiktok className="w-5 h-5" />
              </a>
            </div>
            <a
              href="tel:5163604026"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              516-360-4026
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-foreground text-white border-t border-white/10"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold py-2 border-b border-white/10 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 py-4 border-b border-white/10">
              <a href="https://www.instagram.com/bug.bullypest" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@bugbullypest2" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <SiTiktok className="w-6 h-6" />
                <span>TikTok</span>
              </a>
            </div>
            <a
              href="tel:5163604026"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-4 mt-4 rounded-xl font-bold text-lg"
            >
              <Phone className="w-6 h-6" />
              Call 516-360-4026
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
