"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { TrendingUp, BarChart, AlertTriangle, AlertCircle, Lightbulb, Briefcase, Search, Star } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Logo from "@/components/Logo";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollSnapHandler from "@/components/ScrollSnapHandler";
import SalesNotification from "@/components/SalesNotification";
import ResultsSlider from "@/components/ResultsSlider";
import FAQ from "@/components/FAQ";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { Spotlight, TradingBackground } from "@/components/blocks/spotlight-new";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-[#000000] text-white overflow-x-hidden" 
      id="main-container"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#000000]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="#video-section" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">How it works</Link>
              <Link href="#results" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">Results</Link>
              <Link href="#signals" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">Solution</Link>
              <Link href="#benefits" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">Benefits</Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">Testimonials</Link>
              <Link href="#faq" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">FAQ</Link>
              <Link 
                href="https://t.me/meta5Aeon" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 lg:px-6 py-2 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-xs lg:text-sm hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/30 whitespace-nowrap"
              >
                Sign up for free
              </Link>
            </div>
            {/* Mobile menu button */}
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden px-4 py-2 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-xs hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all whitespace-nowrap"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Intro */}
      <section className="relative min-h-[auto] md:min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always pt-20 md:pt-24 py-16 md:py-0">
        <TradingBackground />
        <Spotlight />
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Trustpilot Score & Stats - Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 flex-wrap"
          >
            {/* Trustpilot Score */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const isFullStar = i < Math.floor(4.5);
                  const isHalfStar = i === Math.floor(4.5) && 4.5 % 1 >= 0.5;
                  return (
                    <div key={i} className="relative">
                      <Star
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isFullStar
                            ? "fill-[#FFB800] text-[#FFB800]"
                            : "fill-gray-700 text-gray-700"
                        }`}
                      />
                      {isHalfStar && (
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB800] text-[#FFB800]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold text-white">4.5</span>
                <span className="text-sm sm:text-base text-gray-400">TrustScore</span>
                <a
                  href="https://www.trustpilot.com/review/aeonforex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors underline"
                >
                  (7 reviews)
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-[#D4AF37]/30"></div>

            {/* Telegram Members */}
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">+1000</span>
              <span className="text-sm sm:text-base text-gray-400">people in our Free Signal Telegram group</span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-[#D4AF37]/30"></div>

            {/* Win Ratio & Daily Profit */}
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold text-green-400">89% Win Ratio</span>
              <span className="text-sm sm:text-base text-gray-400">Last week!</span>
              <span className="text-lg sm:text-xl font-bold text-[#D4AF37]">€500 per day!</span>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
              Learn how to scale safe and consistently with our
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative inline-block mt-2 md:mt-4"
            >
              <span className="relative z-10 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                Free Signal Trades
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#D4AF37] origin-left rounded-full"
                style={{ transformOrigin: 'left' }}
              />
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.4)",
                    "0 0 40px rgba(212, 175, 55, 0.6)",
                    "0 0 20px rgba(212, 175, 55, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/25 via-[#C9A961]/25 to-[#D4AF37]/25 blur-xl rounded-lg"
              />
            </motion.span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 mb-8 md:mb-12 max-w-4xl mx-auto px-4">
            Turn signal trading into a profitable, consistent system that works for you with Aeon Forex.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-base md:text-lg hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/50 transform hover:scale-105"
            >
              Join Our Community
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                const videoSection = document.getElementById('video-section');
                if (videoSection) {
                  videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-[#D4AF37]/30 text-white rounded-full font-semibold text-base md:text-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all"
            >
              Watch Video
            </button>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Video Section */}
      <section id="video-section" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
              See How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Watch our video to learn more about our free signal trading system
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/10">
              <VideoPlayer 
                hlsSrc="https://content.apisystem.tech/hls/medias/JHwxeF4uUSVRypObYKhj/media/transcoded_videos/cts-cf9e5930fbedd2ec_,360,480,720,1080,p.mp4.urlset/master.m3u8"
                poster="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/JHwxeF4uUSVRypObYKhj/media/transcoded_videos/cf9e5930fbedd2ec.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section id="results" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-7xl mx-auto text-center w-full px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#D4AF37]" />
            Real Results
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-300 px-4">
            Real Results From Our Free Community
          </h3>
          {/* Real Results Slider */}
          <div className="mt-6 md:mt-12">
            <ResultsSlider 
              images={[
                'results/tmp4cfsf90u.jpg',
                'results/tmpo1w2dr3t.jpg',
                'results/tmpca3oa9gi.jpg',
                'results/tmpkrd5r3ol.jpg',
                'results/tmp413um7l6.jpg'
              ]}
            />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-red-500 mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              Why You&apos;re Still Failing Forex
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400">
              (While Others Pass Consistently)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Missing Trade Opportunities */}
            <div className="relative bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all overflow-hidden group">
              <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-red-400" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-400">Missing Trade Opportunities</h3>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-300">Missing Trade Opportunities Because You Want to Enjoy Life</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                You want freedom. You want to step away from the screen, meet friends or enjoy your day. But every time you do, you miss good trade opportunities. When you come back, you chase entries that are already gone and force trades that do not fit your plan. Trading should not punish you for having a life.
              </p>
            </div>

            {/* Trade With Too Much Emotions */}
            <div className="relative bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all overflow-hidden group">
              <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-red-400" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-400">Trade With Too Much Emotions</h3>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-300">Trading Too Much With Emotions</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Losses trigger frustration. Frustration leads to revenge trading, gambling and greed. You stop following your main plan and ignore risk management. What started as a structured strategy turns into emotional decisions. Without control, emotions slowly destroy consistency and results.
              </p>
            </div>

            {/* Many Hours Behind Charts */}
            <div className="relative bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all overflow-hidden group">
              <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-red-400" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-400">Many Hours Behind Charts</h3>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-300">Losing Many Hours Behind Charts Instead of Having Fun</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                You spend endless hours staring at charts, waiting for something to happen. Days go by with stress instead of enjoyment. While others live their life, you are stuck behind a screen with no freedom and no balance. Trading should give time back, not take it away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="signals" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000] snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-[#D4AF37] mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              We Have The Solution:
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-[#D4AF37]">
              Our Free Signal Group
            </h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400">
              Built for Consistent Growth
            </h4>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed px-4">
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5">
              <p>
                <span className="font-semibold text-[#FFD700]">Aeon Forex focuses on XAUUSD</span> due to its high volatility, creating multiple trading opportunities throughout the day.
              </p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5">
              <p>
                The community was built because trading requires constant focus and time. Without full attention, opportunities are missed, and emotions take over. Profits often lead to greed, while losses trigger revenge trading.
              </p>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5">
              <p>
                Once the technical side is mastered, scaling becomes simple, making earning potential unlimited.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C9A961]/5 p-6 md:p-8 rounded-xl border border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10">
              <p>
                <span className="font-semibold text-[#FFD700]">Aeon Forex offers a transparent route toward financial freedom.</span> Joining and following the trades is completely free. The only requirement is trading through the same broker to ensure low spreads, consistency, and safety.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#D4AF37]/15 to-[#C9A961]/10 p-6 md:p-8 rounded-xl border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/15">
              <p className="text-[#FFD700] font-semibold">
                All risk management is handled by Aeon Forex, allowing you to trade with an added layer of security.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-base md:text-lg hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/50 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="benefits" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-[#D4AF37] mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              Become A Trusted Member
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37]">
              (For Absolutely Nothing)
            </h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mt-3 md:mt-4">
              Trusted Membership
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
            {[
              "Daily forex trades",
              "Trade from anywhere",
              "Copy trades from profitable traders with proven risk management",
              "Trade without emotion",
              "Start earning from day one",
              "No prior experience required",
              "Full guidance with setup and onboarding"
            ].map((benefit, index) => (
              <div key={index} className="relative bg-gray-900/40 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-lg md:text-xl flex-shrink-0">✓</span>
                  <p className="text-sm md:text-base text-gray-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 md:mt-12 text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Most trusted members are setup in one hour and start earning in their first day in the community.
          </p>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-base md:text-lg hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/50 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Client Testimonial */}
      <section className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-4xl mx-auto text-center w-full px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 px-4">
            Featured Client Testimonial
          </h2>
          <div className="bg-gray-900/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5 mx-2 sm:mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
              {[
                "Daily free signals",
                "Mental support",
                "Strict risk management",
                "Less screen time, more clarity"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#D4AF37] mr-3 text-lg md:text-xl flex-shrink-0">✓</span>
                  <p className="text-sm md:text-base text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 md:mt-8 px-4">
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-base md:text-lg hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/50 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <Search className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-[#D4AF37] mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              The Choice Is Yours
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400">
              (But We Make It Easy)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
            {/* Without Our Group */}
            <div className="relative bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 overflow-hidden">
              <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-2xl"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-red-400">Without Our Group</h3>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Missing out on trading opportunities",
                  "No financial freedom",
                  "Emotional decisions",
                  "Revenge and gamble trades",
                  "Losing money",
                  "First profits often come only after expensive courses, or not at all"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
                    <span className="text-sm md:text-base text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Our Free Group */}
            <div className="relative bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 md:p-8 rounded-2xl border border-green-900/30 overflow-hidden">
              <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-2xl"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-green-400">With Our Free Group</h3>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Daily forex trades",
                  "Trade from anywhere",
                  "Copy trades from profitable traders with proven risk management",
                  "Trade without emotion",
                  "Start earning from day one",
                  "No prior experience required"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-semibold text-base md:text-lg hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/50 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="testimonials" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000] snap-start snap-always pt-24 py-12 md:py-0">
        <div className="w-full">
          <TestimonialsSection
            title="See What Others Are Saying"
            description="(Don't get too hyped) - Join thousands of traders who are already scaling safely and consistently with our free signals"
            trustScore={4.5}
            totalReviews={7}
            testimonials={[
              {
                author: {
                  name: "Dennis Vink",
                  handle: "Trustpilot Review",
                },
                text: "When I started trading, I knew absolutely nothing. I didn't understand the charts, I had no idea what the numbers meant, and trading felt extremely complicated. Aeon completely changed that for me. What makes Aeon stand out is how simple and easy everything is explained. The focus on risk management is especially valuable. If you simply follow the rules, respect the system, and stay disciplined, trading becomes much calmer and more confident.",
                rating: 5,
              },
              {
                author: {
                  name: "Dilano Moya",
                  handle: "Trustpilot Review",
                },
                text: "Best for beginners. I didn't know nothing about trading not even what the Numbers mean, Aeon made me understand it simple. I follow the risk management easy to understand and if you just follow the steps you Will win. Just copy the trades follow the program and see for yourself.",
                rating: 5,
              },
              {
                author: {
                  name: "Puck Philippens",
                  handle: "Trustpilot Review",
                },
                text: "No experience ever before in forex made profit within the first hour! The setup was super easy and the community support is amazing. This is exactly what I needed to start trading safely.",
                rating: 5,
              },
              {
                author: {
                  name: "Quinn Jongen",
                  handle: "Trustpilot Review",
                },
                text: "Very transparant never made profits in forex before but this changed my life. The program is very well structured and practical. It's not about getting rich overnight it's about building real skills with a proven and beginner-friendly approach.",
                rating: 5,
              },
              {
                author: {
                  name: "Florens Caviet",
                  handle: "Trustpilot Review",
                },
                text: "Really good experience with this company. I didn't know anything about forex before entering this program. They even build a risk-management for the costumers! Being able to copy and follow trades helps a lot in understanding how the market works.",
                rating: 5,
              },
              {
                author: {
                  name: "Mex Kraft",
                  handle: "Trustpilot Review",
                },
                text: "Had my first payout very soon after joining the premium group. Started earning from day one. The signals are accurate and the risk management is top-notch. I've been consistently profitable since joining.",
                rating: 5,
              },
            ]}
          />
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="relative min-h-[auto] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-12 md:py-8">
        <div className="max-w-4xl mx-auto text-center w-full px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12">
            Join thousands of traders who are already scaling safely and consistently with our free signals.
          </p>
          <Link 
            href="https://t.me/meta5Aeon" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] text-white rounded-full font-bold text-lg md:text-xl hover:from-[#C9A961] hover:via-[#D4AF37] hover:to-[#C9A961] transition-all shadow-lg shadow-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/50 transform hover:scale-105"
          >
            Join Our Community Now
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <Logo />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-gray-400 text-sm md:text-base">
              <Link href="/privacy" className="hover:text-white transition text-center sm:text-left">Privacy Policy</Link>
              <Link href="/legal" className="hover:text-white transition text-center sm:text-left">Legal Disclaimer</Link>
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-center text-gray-500 text-xs sm:text-sm px-4">
            © Copyright AeonForex. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Sales Notification */}
      <SalesNotification />
      
      {/* Scroll Snap Handler */}
      <ScrollSnapHandler />
    </div>
  );
}
