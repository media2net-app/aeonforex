"use client";

import { motion } from "motion/react";
import { MousePointerClick, Zap, Brain } from "lucide-react";

export default function CTAPage() {
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
              <MousePointerClick className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Call-to-Action Variaties
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Verschillende CTA's voor verschillende advertentie-typen
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#FFD700]">Voor Lifestyle Ads</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Krijg je tijd terug"
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Start gratis vandaag"
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Join de community"
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Meer vrijheid, minder stress"
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#FFD700]">Voor Educational Ads</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Leer hoe het werkt"
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Gratis signalen proberen"
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Zie de resultaten"
                </li>
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-[#D4AF37] mr-3" />
                  "Stop met falen, start met winnen"
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
