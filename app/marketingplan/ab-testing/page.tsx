"use client";

import { motion } from "motion/react";
import { TestTube, CheckCircle2 } from "lucide-react";

export default function ABTestingPage() {
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
              <TestTube className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  A/B Test Strategie
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Data-driven optimalisatie van advertenties
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#D4AF37]">Lifestyle Ads Tests</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Test A:</strong> Subtiel succes (koffie, tijd)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Test B:</strong> Meer zichtbaar succes (reizen, hobby's)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Test C:</strong> Focus op vrijheid (geen 9-5)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#D4AF37]">Educational Ads Tests</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Test A:</strong> Emotie-gerelateerd (waarom je faalt)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Test B:</strong> Systeem-gerelateerd (hoe het werkt)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Test C:</strong> Resultaat-gerelateerd (bewezen cijfers)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
