import { Instagram, MapPin, Phone, Video } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "@assets/bug_bull_logo_1773100518118.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="bg-white inline-block p-2 rounded-xl mb-4">
              <img src={logo} alt="Bug Bully Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/70 max-w-sm">
              NYC's trusted wildlife trapper and pest management experts. We provide reliable, safe, and effective solutions for residential and commercial properties.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-accent">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5163604026" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-lg">516-360-4026</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bug.bullypest" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-lg">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@bugbullypest2" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/90 hover:text-accent transition-colors group">
                  <SiTiktok className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-lg">TikTok</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Serving New York City & Surrounding Areas</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Bug Bully Pest Management. All rights reserved.</p>
          <p>Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
