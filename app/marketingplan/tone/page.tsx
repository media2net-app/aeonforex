"use client";

import { motion } from "motion/react";
import { Heart, CheckCircle2, TrendingDown } from "lucide-react";

export default function TonePage() {
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
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Tone of Voice Guidelines
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Hoe de AI Character communiceert
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 md:p-8 rounded-xl border border-green-900/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8" />
                DO
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Authentiek en toegankelijk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Realistisch over verwachtingen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Empathisch (begrijpt frustraties)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Motiverend zonder overdrijving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Transparant en eerlijk</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-xl border border-red-900/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-400 flex items-center gap-2">
                <TrendingDown className="w-8 h-8" />
                DON'T
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Geen "lambo dreams"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Geen onrealistische beloftes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Geen exclusiviteit ("alleen voor winners")</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Geen angst-tactieken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Geen overdreven luxe lifestyle</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
