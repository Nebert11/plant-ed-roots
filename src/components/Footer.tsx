import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-planted section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-leaf" />
              <span className="text-xl font-display font-bold">plantED</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Growing the future of sustainable agriculture through innovation, community empowerment, and smart farming solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["About", "Services", "Projects", "Blog", "Partners", "Contact"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2"><MapPin size={16} /> 123 Farm Road, Nairobi, Kenya</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +254 700 123 456</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@planted.co</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm opacity-70 mb-3">Stay updated with the latest in sustainable agriculture.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-leaf"
              />
              <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm opacity-50">
          © {new Date().getFullYear()} plantED. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
