import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#40403e] text-[#f6f3ec] text-sm py-6 px-4" id="footer">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold mb-2">Dr. Serena Blake, PsyD</h4>
          <p className="flex items-center gap-2">
            <MapPin size={14} /> 1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone size={14} /> (323) 555-0192
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Mail size={14} />
            <a href="mailto:serena@blakepsychology.com" className="underline">
              serena@blakepsychology.com
            </a>
          </p>
        </div>

        {/* Office Hours */}
        <div>
          <h4 className="text-base font-semibold mb-2">Office Hours</h4>
          <p>In-person: Tue & Thu, 10 AM – 6 PM</p>
          <p>Virtual: Mon, Wed & Fri, 1 PM – 5 PM</p>
        </div>

        {/* Navigation + Social */}
        <div>
          <h4 className="text-base font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 text-center text-xs text-[#f6f3ec]">
        &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
