"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactCTA() {
  const phone = "+91 63882 39273";
  const phoneHref = "tel:+916388239273";
  const whatsappHref = "https://wa.me/916388239273?text=Hi%20Perfect%20Appliance%20Repair%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Navi%20Mumbai.";

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/20 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14 shadow-2xl space-y-8 backdrop-blur-xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs sm:text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Technicians Active in Navi Mumbai Now
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Need Your Washing Machine <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Fixed Today?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Get instant doorstep service from Navi Mumbai&apos;s leading washing machine repair specialists.
          </p>

          {/* Trust Chips */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-slate-300 font-semibold pt-2">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <MapPin className="w-4 h-4 text-orange-400" /> Navi Mumbai Wide
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <Clock className="w-4 h-4 text-orange-400" /> Mon - Sun: 8:00 AM – 10:00 PM
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> Same Day Repair
            </span>
          </div>

          {/* ONLY TWO BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            {/* Button 1: Call +91 63882 39273 */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-lg sm:text-xl px-9 py-4.5 rounded-2xl shadow-xl shadow-orange-500/30 transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="w-6 h-6 fill-current animate-bounce" />
              <span>Call {phone}</span>
            </motion.a>

            {/* Button 2: WhatsApp Now */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg sm:text-xl px-9 py-4.5 rounded-2xl shadow-xl shadow-emerald-600/25 border border-emerald-500/30 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
              <span>WhatsApp Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
