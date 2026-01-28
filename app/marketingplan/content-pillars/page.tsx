"use client";

import { motion } from "motion/react";
import { Lightbulb, Users, Shield, Heart, Clock, CheckCircle2 } from "lucide-react";

export default function ContentPillarsPage() {
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
              <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Content Pillars
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Vier pijlers voor consistente messaging
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Toegankelijkheid",
                messages: [
                  "Voor iedereen, niet alleen voor experts",
                  "Gratis betekent niet minderwaardig",
                  "Je hoeft niet rijk te zijn om te beginnen"
                ]
              },
              {
                icon: Shield,
                title: "Realisme",
                messages: [
                  "Geen get-rich-quick beloftes",
                  "Consistentie over snelheid",
                  "Echte resultaten, echte mensen"
                ]
              },
              {
                icon: Clock,
                title: "Vrijheid",
                messages: [
                  "Trading die past in jouw leven",
                  "Meer tijd, minder stress",
                  "Vrijheid door discipline"
                ]
              },
              {
                icon: Heart,
                title: "Community",
                messages: [
                  "Je bent niet alleen",
                  "Samen sterker dan alleen",
                  "Gratis support, altijd"
                ]
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <pillar.icon className="w-8 h-8 text-[#D4AF37]" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">{pillar.title}</h3>
                </div>
                <ul className="space-y-2">
                  {pillar.messages.map((message, msgIndex) => (
                    <li key={msgIndex} className="flex items-start text-sm md:text-base text-gray-300">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>{message}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
