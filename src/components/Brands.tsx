"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface Brand {
  name: string;
  badge: string;
}

const brandsList: Brand[] = [
  { name: "LG", badge: "Inverter Direct Drive Specialist" },
  { name: "Samsung", badge: "EcoBubble & AI Control" },
  { name: "IFB", badge: "Aqua Energie & Executive" },
  { name: "Bosch", badge: "VarioDrum & EcoSilence" },
  { name: "Whirlpool", badge: "6th Sense Technology" },
  { name: "Haier", badge: "Direct Motion Motor" },
  { name: "Panasonic", badge: "StainMaster & ActiveFoam" },
  { name: "Godrej", badge: "Eon & Turbo 6 Pulsator" },
  { name: "Siemens", badge: "iQDrive & SpeedPack" },
  { name: "Electrolux", badge: "UltimateCare Series" },
  { name: "Lloyd", badge: "Ultra Wash Technology" },
  { name: "Hitachi", badge: "Auto Self Clean" },
  { name: "Onida", badge: "Hydrofall & Crystal" },
  { name: "Kelvinator", badge: "Fuzzy Logic Models" },
  { name: "Voltas Beko", badge: "ProSmart Inverter" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
            All Major Brands Supported
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Brands We Repair & Service
          </h2>
          <p className="text-slate-600 font-medium">
            Genuine spare parts and original diagnostics for all top washing machine brands.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {brandsList.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center flex flex-col items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-800 hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-orange-400 transition-colors">
                {brand.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-300 mt-1.5 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-orange-500 group-hover:text-orange-400 shrink-0" />
                {brand.badge}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
