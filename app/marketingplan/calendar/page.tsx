"use client";

import { motion } from "motion/react";
import { Calendar } from "lucide-react";

export default function CalendarPage() {
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
              <Calendar className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Content Kalender Strategie
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Gefaseerde aanpak voor optimale resultaten
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                phase: "Week 1-2",
                title: "Awareness",
                focus: "Lifestyle focus",
                split: "70% Lifestyle | 30% Educational",
                goal: "Brand awareness en bereik"
              },
              {
                phase: "Week 3-4",
                title: "Consideration",
                focus: "Educational focus",
                split: "40% Lifestyle | 60% Educational",
                goal: "Educatie en interesse"
              },
              {
                phase: "Week 5+",
                title: "Conversion",
                focus: "Balanced",
                split: "50% Lifestyle | 50% Educational",
                goal: "Conversie en community joins"
              }
            ].map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <div className="text-center mb-4">
                  <p className="text-sm text-[#D4AF37] font-semibold mb-2">{period.phase}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{period.title}</h3>
                </div>
                <div className="space-y-3 text-sm md:text-base">
                  <div>
                    <p className="text-gray-400 mb-1">Focus:</p>
                    <p className="text-gray-300 font-semibold">{period.focus}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Split:</p>
                    <p className="text-gray-300">{period.split}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Doel:</p>
                    <p className="text-gray-300">{period.goal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
