"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function StickyBottomBar() {
  const phoneHref = "tel:+916388239273";
  const whatsappHref = "https://wa.me/916388239273?text=Hi%20Perfect%20Appliance%20Repair%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Navi%20Mumbai.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        
        {/* Left: Call Now */}
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 active:scale-95 text-white font-extrabold text-base py-3.5 px-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-transform"
        >
          <Phone className="w-5 h-5 fill-current animate-bounce" />
          <span>Call Now</span>
        </a>

        {/* Right: WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 active:scale-95 text-white font-extrabold text-base py-3.5 px-4 rounded-2xl shadow-lg shadow-emerald-600/30 transition-transform"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
