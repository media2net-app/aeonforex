"use client";

import { motion } from "motion/react";
import { Target, Shield, Heart, CheckCircle2 } from "lucide-react";

export default function MessagingPage() {
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
                  Core Messaging Framework
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              De fundamenten van onze marketingcommunicatie
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Positionering",
                items: [
                  "Toegankelijk succes (niet elitair)",
                  "Vrijheid door consistentie",
                  "Realistische lifestyle"
                ]
              },
              {
                icon: Heart,
                title: "Waarden",
                items: [
                  "Gratis voor iedereen",
                  "Transparantie en eerlijkheid",
                  "Community first"
                ]
              },
              {
                icon: Shield,
                title: "Belofte",
                items: [
                  "Forex trading die werkt",
                  "Zonder je leven op te geven",
                  "Bewezen resultaten"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <item.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-300">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFD700]">Hoofdboodschap</h3>
              <p className="text-xl md:text-2xl text-white font-semibold mb-4">
                "Forex trading die werkt voor jou, niet andersom"
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Deze boodschap staat centraal in al onze communicatie. Het benadrukt dat trading een tool moet zijn die je leven verbetert, niet domineert. We positioneren ons als toegankelijk, realistisch en gericht op consistente resultaten zonder de gebruiker te overspoelen met onrealistische verwachtingen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
