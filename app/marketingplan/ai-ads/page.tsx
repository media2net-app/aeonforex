"use client";

import { motion } from "motion/react";
import { Video, Zap, Brain, CheckCircle2 } from "lucide-react";

export default function AIAdsPage() {
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
              <Video className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  AI Character Advertentie Strategie
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Twee advertentie-typen voor maximale impact
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Lifestyle Ads */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Lifestyle Advertenties</h3>
              </div>
              <p className="text-gray-300 mb-6 text-base md:text-lg">
                <span className="text-[#FFD700] font-semibold">Concept:</span> "Het leven dat je verdient, zonder het leven dat je nu hebt op te geven"
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37] mb-3">Visuele Elementen:</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ochtendkoffie op het terras (niet op een jacht)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weekendtrip met vrienden (niet privéjet)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tijd voor hobby's (niet alleen luxe items)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vrede van geest, niet alleen materieel</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37] mb-3">AI Character Messaging:</h4>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                    <p className="text-gray-300 italic">"Trading hoeft niet je hele leven te zijn. Met onze gratis signalen trade ik wanneer het mij uitkomt. Meer tijd voor wat écht belangrijk is."</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                    <p className="text-gray-300 italic">"Geen dure horloges nodig. Geen 24/7 achter je scherm. Gewoon consistente trades, wanneer jij wilt."</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Educational Ads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Educational Advertenties</h3>
              </div>
              <p className="text-gray-300 mb-6 text-base md:text-lg">
                <span className="text-[#FFD700] font-semibold">Concept:</span> "De wetenschap achter het succes"
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37] mb-3">Focus Punten:</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Waarom emoties falen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hoe signal trading consistentie creëert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>De kracht van community</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk management in actie</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-semibold text-[#D4AF37] mb-3">AI Character Messaging:</h4>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                    <p className="text-gray-300 italic">"Waarom faal je in forex? Emoties. Onze gratis signalen nemen emotie weg. Je volgt, wij analyseren. Simpel. Effectief."</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                    <p className="text-gray-300 italic">"Alleen trade je met emotie. Samen trade je met discipline. 1000+ traders volgen dezelfde signalen."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
