"use client";

import { motion } from "motion/react";
import { Film, Video, MessageSquare, Eye } from "lucide-react";

export default function FormatsPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Film className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Advertentie Format Strategie
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Verschillende formats voor verschillende doelen
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "Video Ads",
                duration: "15-30 sec",
                description: "Lifestyle: AI Character in dagelijkse situaties | Educational: Concepten uitleggen met visuals"
              },
              {
                icon: MessageSquare,
                title: "Carousel Ads",
                slides: "3-5 slides",
                description: "Lifestyle: Verschillende lifestyle momenten | Educational: Stap-voor-stap uitleg"
              },
              {
                icon: Eye,
                title: "Single Image",
                type: "Static",
                description: "Lifestyle: Krachtige quote + lifestyle beeld | Educational: Stat/grafiek + uitleg"
              }
            ].map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <format.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{format.title}</h3>
                {format.duration && (
                  <p className="text-sm text-[#D4AF37] mb-3 font-semibold">{format.duration}</p>
                )}
                {format.slides && (
                  <p className="text-sm text-[#D4AF37] mb-3 font-semibold">{format.slides}</p>
                )}
                {format.type && (
                  <p className="text-sm text-[#D4AF37] mb-3 font-semibold">{format.type}</p>
                )}
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
