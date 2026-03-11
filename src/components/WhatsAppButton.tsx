import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254700123456"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact us on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-[#fff] shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
