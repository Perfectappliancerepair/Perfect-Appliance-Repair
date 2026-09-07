"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "front-load",
    title: "Front Load Repair",
    desc: "Expert diagnostic & doorstep repair for all front loading machines.",
    image: "/images/front-load-repair.jpg",
  },
  {
    id: "top-load",
    title: "Top Load Repair",
    desc: "Fast troubleshooting and part replacement for top load models.",
    image: "/images/top-load-repair.jpg",
  },
  {
    id: "fully-automatic",
    title: "Fully Automatic Repair",
    desc: "Complete automatic machine service, sensor & board fixes.",
    image: "/images/fully-automatic-repair.jpg",
  },
  {
    id: "motor",
    title: "Motor Repair",
    desc: "Original motor rewinding, replacement & drive belt repairs.",
    image: "/images/motor-repair.jpg",
  },
  {
    id: "pcb",
    title: "PCB Repair",
    desc: "Motherboard repair, IC fixing and motherboard programming.",
    image: "/images/pcb-repair.jpg",
  },
  {
    id: "drum",
    title: "Drum Repair",
    desc: "Tub balancing, drum spider alignment & noise resolution.",
    image: "/images/drum-repair.jpg",
  },
  {
    id: "door-lock",
    title: "Door Lock Repair",
    desc: "Latch replacement & door switch lock mechanism repair.",
    image: "/images/door-lock-repair.jpg",
  },
  {
    id: "water-leakage",
    title: "Water Leakage Repair",
    desc: "Inlet pipe, hose sealing and internal tub leak prevention.",
    image: "/images/water-leakage-repair.jpg",
  },
  {
    id: "drain-problem",
    title: "Drain Problem Repair",
    desc: "Drain filter unclogging, valve fixes & water clearance.",
    image: "/images/drain-problem-repair.jpg",
  },
  {
    id: "spin-problem",
    title: "Spin Problem Repair",
    desc: "Spin cycle fixing, belt adjustment & high speed rotation setup.",
    image: "/images/spin-problem-repair.jpg",
  },
  {
    id: "display-error",
    title: "Display Error Repair",
    desc: "Error code clearing, digital screen & touch panel repair.",
    image: "/images/display-error-repair.jpg",
  },
  {
    id: "pump",
    title: "Pump Repair",
    desc: "Water drain pump motor replacement & circulation pump repair.",
    image: "/images/pump-repair.jpg",
  },
  {
    id: "bearing",
    title: "Bearing Replacement",
    desc: "Heavy duty bearing replacement & tub seal oiling.",
    image: "/images/bearing-replacement.jpg",
  },
  {
    id: "shock-absorber",
    title: "Shock Absorber Replacement",
    desc: "Vibration dampening, shock strut & suspension spring replacement.",
    image: "/images/shock-absorber-replacement.jpg",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    desc: "Drum scaling removal, tub sanitization & odor elimination.",
    image: "/images/deep-cleaning.jpg",
  },
];

export default function Services() {
  const phoneHref = "tel:+916388239273";

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-4 py-1.5 rounded-full">
            Our Specialist Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Washing Machine Repairs We Handle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Same day doorstep repair by certified technicians in Navi Mumbai.
          </p>
        </div>

        {/* 15 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                
                {/* Badge on Card */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-400" /> Doorstep Fix
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Direct Call Trigger */}
                <a
                  href={phoneHref}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-orange-600 text-white text-sm font-bold py-3 rounded-xl transition-colors duration-300 shadow-sm"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Request Repair Now</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
