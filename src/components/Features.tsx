"use client";

import { motion } from "framer-motion";
import { Clock, Home, UserCheck, ShieldCheck, Zap, Award } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

const featuresData: Feature[] = [
  {
    icon: Clock,
    title: "Same Day Service",
    desc: "Fast doorstep arrival across Navi Mumbai within 45 to 90 minutes.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Home,
    title: "Doorstep Repair",
    desc: "Complete repair done right at your home with zero hassle.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: UserCheck,
    title: "Expert Technicians",
    desc: "Certified, background-verified specialists with 10+ years experience.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Spare Parts",
    desc: "100% original factory spare parts directly sourced from brand makers.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Instant telephone & WhatsApp booking confirmation in under 2 minutes.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Award,
    title: "Warranty Depends On Repair",
    desc: "Clear & transparent service warranty provided on all component fixes.",
    color: "from-sky-500 to-blue-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow gradient background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Perfect Appliance Standard
          </h2>
          <p className="text-slate-400 font-medium text-base sm:text-lg">
            Navi Mumbai&apos;s trusted choice for fast, affordable & premium washing machine repairs.
          </p>
        </div>

        {/* 6 Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
