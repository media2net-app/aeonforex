"use client";

import { motion } from "motion/react";
import { BarChart } from "lucide-react";

export default function MetricsPage() {
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
              <BarChart className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Success Metrics per Ad Type
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              KPI's die we monitoren voor elke advertentie-format
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
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]">Lifestyle Ads Metrics</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { metric: "Click-through Rate (CTR)", target: "> 2%" },
                  { metric: "Video Completion Rate", target: "> 50%" },
                  { metric: "Brand Awareness Lift", target: "Track via surveys" },
                  { metric: "Community Joins", target: "Conversie tracking" }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-300">{item.metric}</span>
                    <span className="text-[#FFD700] font-semibold">{item.target}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]">Educational Ads Metrics</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  { metric: "Engagement Rate", target: "> 5%" },
                  { metric: "Time Spent", target: "> 30 sec" },
                  { metric: "Lead Quality", target: "Track via form fills" },
                  { metric: "Conversion Rate", target: "> 3%" }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <span className="text-gray-300">{item.metric}</span>
                    <span className="text-[#FFD700] font-semibold">{item.target}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#FFD700] text-center">Algemene Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                {[
                  { label: "Website Traffic", value: "Organisch verkeer groei" },
                  { label: "Telegram Leden", value: "Community groei" },
                  { label: "Conversie Rate", value: "Bezoeker naar lid" },
                  { label: "Engagement Rate", value: "Community activiteit" }
                ].map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className="text-[#D4AF37]">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
