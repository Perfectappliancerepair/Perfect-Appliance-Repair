"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Star, Zap } from "lucide-react";

export default function Hero() {
  const phone = "+91 63882 39273";
  const phoneHref = "tel:+916388239273";
  const whatsappHref = "https://wa.me/916388239273?text=Hi%20Perfect%20Appliance%20Repair%2C%20I%20need%20washing%20machine%20repair%20service%20in%20Navi%20Mumbai.";

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-12 lg:py-20">
      {/* Background Image: Real technician repairing front-load washing machine in clean home */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Expert Technician Repairing Front-Load Washing Machine in Navi Mumbai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 filter brightness-90"
        />
        {/* Apple-style Luxury Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-orange-400 text-xs sm:text-sm font-semibold">
              <Zap className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span>Navi Mumbai #1 Rated Repair Service</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Expert Washing Machine Repair <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                At Your Doorstep
              </span>
            </h1>

            {/* Sub Heading */}
            <p className="text-base sm:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed flex flex-wrap items-center gap-y-2 gap-x-3">
              <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" /> Same Day Service
              </span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" /> Genuine Spare Parts
              </span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" /> Expert Technicians
              </span>
            </p>

            {/* Key Service Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-xs text-slate-400 font-medium">Response Time</p>
                <p className="text-sm font-bold text-white">Under 60 Mins</p>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-xs text-slate-400 font-medium">Working Hours</p>
                <p className="text-sm font-bold text-white">8:00 AM – 10:00 PM</p>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 backdrop-blur-sm col-span-2 sm:col-span-1">
                <p className="text-xs text-slate-400 font-medium">Coverage Area</p>
                <p className="text-sm font-bold text-white">All Navi Mumbai</p>
              </div>
            </div>

            {/* ONLY TWO CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* Button 1: Call Now */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={phoneHref}
                className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/25 transition-all duration-300 animate-pulse-glow"
              >
                <Phone className="w-6 h-6 fill-current animate-bounce" />
                <span>Call Now</span>
              </motion.a>

              {/* Button 2: WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/20 border border-emerald-500/30 transition-all duration-300"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Floating Trust Badge / Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-orange-500/40 bg-white shrink-0">
                  <Image
                    src="/logo.jpeg"
                    alt="Perfect Appliance Repair Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Perfect Appliance Repair</h3>
                  <div className="flex items-center gap-1 text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-slate-300 font-bold ml-1">4.9 / 5</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Doorstep Arrival</span>
                  <span className="text-emerald-400 font-bold">Within 45 Mins</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Service Guarantee</span>
                  <span className="text-white font-bold">100% Guaranteed</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Direct Phone</span>
                  <span className="text-orange-400 font-bold">{phone}</span>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-3.5 text-center">
                <p className="text-xs font-semibold text-orange-300 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  No Inspection Fee If Service Done
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
