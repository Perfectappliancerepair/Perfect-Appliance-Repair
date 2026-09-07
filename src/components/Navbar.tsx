"use client";

import Image from "next/image";
import { Phone, MessageSquare, Clock, MapPin } from "lucide-react";

export default function Navbar() {
  const phone = "+91 63882 39273";
  const phoneHref = "tel:+916388239273";
  const whatsappHref = "https://wa.me/916388239273?text=Hi%20Perfect%20Appliance%20Repair%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Navi%20Mumbai.";

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-200/80 shadow-xs transition-all duration-300">
      {/* Top micro bar for trust metrics */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-orange-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Navi Mumbai Service Area
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              Mon - Sun: 8:00 AM – 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-400 font-medium">Technicians Available Now in Navi Mumbai</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.jpeg"
              alt="Perfect Appliance Repair Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
              Perfect Appliance Repair
            </span>
            <span className="text-xs text-orange-600 font-semibold tracking-wide flex items-center gap-1">
              Washing Machine Repair • Navi Mumbai
            </span>
          </div>
        </a>

        {/* Action Buttons for Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          <a
            href={phoneHref}
            className="flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 animate-pulse-glow"
          >
            <Phone className="w-4 h-4 fill-current animate-bounce" />
            <span>Call {phone}</span>
          </a>
        </div>

        {/* Mobile Quick Call Button */}
        <div className="flex md:hidden items-center">
          <a
            href={phoneHref}
            className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
