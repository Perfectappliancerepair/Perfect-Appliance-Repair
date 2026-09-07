"use client";

import Image from "next/image";
import { Phone, MessageSquare, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const phone = "+91 63882 39273";
  const phoneHref = "tel:+916388239273";
  const whatsappHref = "https://wa.me/916388239273?text=Hi%20Perfect%20Appliance%20Repair%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Navi%20Mumbai.";
  const email = "perfectappliancerepair.in@gmail.com";
  const emailHref = `mailto:${email}`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-slate-700 bg-white shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Perfect Appliance Repair Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white tracking-tight">
                  Perfect Appliance Repair
                </h3>
                <p className="text-xs text-orange-400 font-semibold">
                  Washing Machine Repair Service • Navi Mumbai
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Navi Mumbai&apos;s premier doorstep washing machine repair service. Express same-day service for front load, top load, motor, PCB, drum & water leakage issues using 100% genuine parts.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Doorstep Technicians
            </div>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Call Us Directly</p>
                    <p className="font-bold text-white group-hover:text-orange-400">{phone}</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp Chat</p>
                    <p className="font-bold text-white group-hover:text-emerald-400">{phone}</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={emailHref}
                  className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Address</p>
                    <p className="font-bold text-white group-hover:text-orange-400">{email}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours & Service Area (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Working Hours & Area
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Monday to Sunday</p>
                  <p className="text-xs text-slate-400 mt-0.5">8:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Service Area</p>
                  <p className="text-xs text-slate-400 mt-0.5">Navi Mumbai & Surrounding Locations</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Perfect Appliance Repair. All Rights Reserved.</p>
          <p className="text-slate-400">
            Authorized Independent Multi-Brand Appliance Repair Service • Navi Mumbai
          </p>
        </div>

      </div>
    </footer>
  );
}
