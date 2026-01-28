"use client";

import { motion } from "motion/react";
import { Users, Target, ArrowUpRight } from "lucide-react";

export default function TargetingPage() {
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
              <Target className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Targeting Strategie
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Juiste mensen bereiken met de juiste boodschap
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD700]">Lifestyle Ads</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <h4 className="font-semibold text-white mb-2">Primair:</h4>
                  <p className="text-gray-300">25-45 jaar, interesse in financiële vrijheid</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Psychographics:</h4>
                  <p className="text-gray-300">Op zoek naar extra inkomen, waardeert tijd, wil balans</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Exclusions:</h4>
                  <p className="text-gray-300">Alleen luxe lifestyle content (horloges, auto's, etc.)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD700]">Educational Ads</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <h4 className="font-semibold text-white mb-2">Primair:</h4>
                  <p className="text-gray-300">22-40 jaar, interesse in trading/forex</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Psychographics:</h4>
                  <p className="text-gray-300">Beginners of gefrustreerde traders, zoekt oplossingen</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Lookalike:</h4>
                  <p className="text-gray-300">Bestaande community members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
