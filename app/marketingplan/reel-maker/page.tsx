"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Film, Code, Play, Video, Brain, CheckCircle2, FileText, Wand2, Sparkles, Loader2 } from "lucide-react";

const ReelPreview = dynamic(() => import("./components/ReelPreview").then(mod => ({ default: mod.ReelPreview })), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[9/16] bg-black/50 rounded-lg flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#D4AF37] animate-spin" />
    </div>
  ),
});

export default function ReelMakerPage() {
  const [prompt, setPrompt] = useState("");
  const [reelType, setReelType] = useState<"lifestyle" | "educational">("lifestyle");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate generation - in production this would call an API or use AI
    setTimeout(() => {
      const code = `// Generated Remotion component based on: "${prompt}"
// Reel Type: ${reelType}

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

interface MyReelProps {
  prompt?: string;
  type?: "lifestyle" | "educational";
}

export const MyReel: React.FC<MyReelProps> = ({ prompt, type = "${reelType}" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [0, 30],
    [0.8, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
    >
      <div
        style={{
          opacity,
          transform: \`scale(\${scale})\`,
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(to right, #FFD700, #D4AF37, #C9A961)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 20,
          }}
        >
          ${reelType === "lifestyle" ? "Lifestyle Reel" : "Educational Reel"}
        </h1>
        {prompt && (
          <p
            style={{
              fontSize: 32,
              color: "#ffffff",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            {prompt}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};

// Add to RemotionRoot.tsx:
// <Composition
//   id="MyReel"
//   component={MyReel}
//   durationInFrames={300}
//   fps={30}
//   width={1080}
//   height={1920}
//   defaultProps={{
//     prompt: "${prompt}",
//     type: "${reelType}"
//   }}
// />`;
      setGeneratedCode(code);
      setIsGenerating(false);
    }, 2000);
  };

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
                  Reel Maker met Remotion
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Maak professionele reels met Remotion API voor AI Character advertenties
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          {/* Prompt Interface */}
          <div className="mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <Wand2 className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Reel Generator</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Reel Type
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setReelType("lifestyle")}
                      className={`flex-1 px-4 py-3 rounded-lg border transition ${
                        reelType === "lifestyle"
                          ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#FFD700]"
                          : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Video className="w-5 h-5" />
                        <span>Lifestyle</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setReelType("educational")}
                      className={`flex-1 px-4 py-3 rounded-lg border transition ${
                        reelType === "educational"
                          ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#FFD700]"
                          : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Brain className="w-5 h-5" />
                        <span>Educational</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Beschrijf je reel (prompt)
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Bijvoorbeeld: 'AI Character drinkt koffie op terras, subtiele success indicators, focus op tijd en vrijheid'"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] resize-none"
                    rows={4}
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Beschrijf wat je wilt zien in de reel. Hoe gedetailleerder, hoe beter het resultaat.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowPreview(true);
                    }}
                    disabled={!prompt.trim()}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Preview Reel</span>
                  </button>
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-lg font-semibold hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Genereren...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        <span>Genereer Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Reel Preview */}
          {showPreview && prompt && (
            <div className="mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <Play className="w-6 h-6 text-[#D4AF37]" />
                    Live Preview
                  </h3>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition text-sm"
                  >
                    Sluiten
                  </button>
                </div>
                <div className="bg-black/50 p-4 rounded-lg">
                  <ReelPreview prompt={prompt} type={reelType} />
                </div>
              </motion.div>
            </div>
          )}

          {/* Generated Code Display */}
          {generatedCode && (
            <div className="mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <Code className="w-6 h-6 text-[#D4AF37]" />
                    Generated Remotion Code
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(generatedCode);
                      }}
                      className="px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/30 transition text-sm"
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
                <pre className="bg-black/50 p-4 rounded-lg border border-gray-700 overflow-x-auto max-h-96">
                  <code className="text-sm text-gray-300">{generatedCode}</code>
                </pre>
                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-blue-300">
                    <strong>Next steps:</strong> Kopieer deze code naar een Remotion component bestand. 
                    Gebruik <code className="bg-black/50 px-2 py-1 rounded text-blue-200">npm run remotion:studio</code> om de Remotion Studio te openen en je reel te previewen.
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Quick Start Guide */}
          <div className="mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Quick Start</h3>
              </div>
              <ol className="space-y-3 text-sm md:text-base text-gray-300 list-decimal list-inside">
                <li>Geef een prompt op in het veld hierboven</li>
                <li>Kies het type reel (Lifestyle of Educational)</li>
                <li>Klik op "Genereer Remotion Code"</li>
                <li>Kopieer de gegenereerde code</li>
                <li>Plak de code in een Remotion component bestand</li>
                <li>Run <code className="bg-black/50 px-2 py-1 rounded text-[#D4AF37]">npm run remotion:studio</code> om te previewen</li>
                <li>Render met <code className="bg-black/50 px-2 py-1 rounded text-[#D4AF37]">npm run remotion:render</code></li>
              </ol>
            </motion.div>
          </div>

          {/* Remotion Overview */}
          <div className="mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Remotion API</h3>
              </div>
              <p className="text-gray-300 mb-4 text-base md:text-lg">
                Remotion is een React-based framework voor het maken van video's programmatisch. Perfect voor het genereren van consistente, professionele reels voor onze AI Character advertenties.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
                <a 
                  href="https://www.remotion.dev/docs/api" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Bekijk Remotion API Documentatie
                </a>
              </div>
            </motion.div>
          </div>

          {/* Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              {
                icon: Video,
                title: "Lifestyle Reels",
                description: "Maak dynamische lifestyle reels met AI Character in verschillende situaties",
                features: [
                  "Animaties van dagelijkse momenten",
                  "Smooth transitions tussen scenes",
                  "Text overlays met messaging",
                  "Background muziek integratie"
                ]
              },
              {
                icon: Brain,
                title: "Educational Reels",
                description: "Creëer educatieve reels die concepten uitleggen met visuals en animaties",
                features: [
                  "Grafieken en statistieken animaties",
                  "Step-by-step uitleg visuals",
                  "Highlight belangrijke punten",
                  "Call-to-action overlays"
                ]
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
              >
                <useCase.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm md:text-base text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Implementation Guide */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD700] flex items-center gap-2">
                <Play className="w-8 h-8" />
                Implementatie Stappen
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Remotion Installatie",
                    description: "Installeer Remotion in je project",
                    code: "npm install remotion"
                  },
                  {
                    step: "2",
                    title: "Project Setup",
                    description: "Maak een Remotion project structuur voor reels",
                    code: "npx create-video"
                  },
                  {
                    step: "3",
                    title: "AI Character Integratie",
                    description: "Integreer AI Character assets en animaties",
                    code: "Importeer AI Character componenten"
                  },
                  {
                    step: "4",
                    title: "Reel Templates",
                    description: "Maak herbruikbare templates voor Lifestyle en Educational reels",
                    code: "Creëer template components"
                  },
                  {
                    step: "5",
                    title: "Rendering",
                    description: "Render reels naar video formaten (MP4, etc.)",
                    code: "npx remotion render"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-[#D4AF37]/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] rounded-full flex items-center justify-center text-black font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 mb-3 text-sm md:text-base">{item.description}</p>
                        <div className="bg-black/50 p-3 rounded border border-gray-700">
                          <code className="text-[#D4AF37] text-sm">{item.code}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Best Practices */}
          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]">Best Practices</h3>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  "Gebruik consistente branding (kleuren, fonts, logo)",
                  "Houd reels kort (15-30 seconden voor optimale engagement)",
                  "Zorg voor duidelijke call-to-actions",
                  "Test verschillende variaties (A/B testing)",
                  "Optimaliseer voor verschillende platformen (Instagram, TikTok, etc.)",
                  "Gebruik subtitles voor silent viewing",
                  "Zorg voor goede audio kwaliteit of gebruik royalty-free muziek"
                ].map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{practice}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD700]">Resources & Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://www.remotion.dev/docs/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition"
                >
                  <FileText className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <p className="text-white font-semibold">Remotion API Docs</p>
                    <p className="text-gray-400 text-sm">Complete API referentie</p>
                  </div>
                </a>
                <a
                  href="https://www.remotion.dev/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition"
                >
                  <Code className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <p className="text-white font-semibold">Remotion Docs</p>
                    <p className="text-gray-400 text-sm">Getting started guide</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
