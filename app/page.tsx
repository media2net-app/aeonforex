"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { TrendingUp, BarChart, AlertTriangle, AlertCircle, Lightbulb, Briefcase, Search } from "lucide-react";
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
      style={{ 
        scrollSnapType: 'y mandatory',
        height: '100vh',
        overflowY: 'auto'
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#000000] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="#video-section" className="text-gray-300 hover:text-yellow-500 transition text-sm font-medium whitespace-nowrap">How it works</Link>
              <Link href="#results" className="text-gray-300 hover:text-yellow-500 transition text-sm font-medium whitespace-nowrap">Results</Link>
              <Link href="#signals" className="text-gray-300 hover:text-yellow-500 transition text-sm font-medium whitespace-nowrap">Solution</Link>
              <Link href="#benefits" className="text-gray-300 hover:text-yellow-500 transition text-sm font-medium whitespace-nowrap">Benefits</Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-yellow-500 transition text-sm font-medium whitespace-nowrap">Testimonials</Link>
              <Link href="#faq" className="text-gray-300 hover:text-yellow-500 transition text-sm font-medium whitespace-nowrap">FAQ</Link>
              <Link 
                href="https://t.me/meta5Aeon" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 lg:px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-xs lg:text-sm hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/20 whitespace-nowrap"
              >
                Sign up for free
              </Link>
            </div>
            {/* Mobile menu button */}
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-xs hover:from-yellow-600 hover:to-orange-600 transition-all whitespace-nowrap"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Intro */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always pt-20 md:pt-24">
        <TradingBackground />
        <Spotlight />
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Learn how to scale safe and consistently with our
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative inline-block mt-2 md:mt-4"
            >
              <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                Free Signal Trades
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 origin-left rounded-full"
                style={{ transformOrigin: 'left' }}
              />
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                    "0 0 40px rgba(251, 191, 36, 0.5)",
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 blur-xl rounded-lg"
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
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105"
            >
              Join Our Community
            </Link>
            <Link 
              href="#video-section" 
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-gray-700 text-white rounded-full font-semibold text-base md:text-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
            >
              Watch Video
            </Link>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Video Section */}
      <section id="video-section" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
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
            <VideoPlayer 
              hlsSrc="https://content.apisystem.tech/hls/medias/JHwxeF4uUSVRypObYKhj/media/transcoded_videos/cts-cf9e5930fbedd2ec_,360,480,720,1080,p.mp4.urlset/master.m3u8"
              poster="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/JHwxeF4uUSVRypObYKhj/media/transcoded_videos/cf9e5930fbedd2ec.jpg"
            />
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section id="results" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
        <div className="max-w-7xl mx-auto text-center w-full px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500" />
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
      <section id="problem" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
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
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all">
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-red-400" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-400">Missing Trade Opportunities</h3>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-300">Missing Trade Opportunities Because You Want to Enjoy Life</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                You want freedom. You want to step away from the screen, meet friends or enjoy your day. But every time you do, you miss good trade opportunities. When you come back, you chase entries that are already gone and force trades that do not fit your plan. Trading should not punish you for having a life.
              </p>
            </div>

            {/* Trade With Too Much Emotions */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all">
              <AlertCircle className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-red-400" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-400">Trade With Too Much Emotions</h3>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-300">Trading Too Much With Emotions</h4>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Losses trigger frustration. Frustration leads to revenge trading, gambling and greed. You stop following your main plan and ignore risk management. What started as a structured strategy turns into emotional decisions. Without control, emotions slowly destroy consistency and results.
              </p>
            </div>

            {/* Many Hours Behind Charts */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30 hover:border-red-700/50 transition-all">
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
      <section id="signals" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000] snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-yellow-500 mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              We Have The Solution:
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-yellow-500">
              Our Free Signal Group
            </h3>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400">
              Built for Consistent Growth
            </h4>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed px-4">
            <p>
              <span className="font-semibold text-yellow-400">Aeon Forex focuses on XAUUSD</span> due to its high volatility, creating multiple trading opportunities throughout the day.
            </p>
            <p>
              The community was built because trading requires constant focus and time. Without full attention, opportunities are missed, and emotions take over. Profits often lead to greed, while losses trigger revenge trading.
            </p>
            <p>
              Once the technical side is mastered, scaling becomes simple, making earning potential unlimited.
            </p>
            <p>
              <span className="font-semibold text-yellow-400">Aeon Forex offers a transparent route toward financial freedom.</span> Joining and following the trades is completely free. The only requirement is trading through the same broker to ensure low spreads, consistency, and safety.
            </p>
            <p className="text-yellow-400 font-semibold">
              All risk management is handled by Aeon Forex, allowing you to trade with an added layer of security.
            </p>
          </div>

          <div className="text-center mt-8 md:mt-12 px-4">
            <Link 
              href="https://t.me/meta5Aeon" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="benefits" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-yellow-500 mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              Become A Trusted Member
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">
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
              <div key={index} className="bg-gray-900/50 p-4 md:p-6 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all">
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-lg md:text-xl flex-shrink-0">✓</span>
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
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Client Testimonial */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111] snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center w-full px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 px-4">
            Featured Client Testimonial
          </h2>
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-800 mx-2 sm:mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
              {[
                "Daily free signals",
                "Mental support",
                "Strict risk management",
                "Less screen time, more clarity"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-yellow-500 mr-3 text-lg md:text-xl flex-shrink-0">✓</span>
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
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/30"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          <div className="text-center mb-8 md:mb-16 px-4">
            <Search className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 md:mb-4 text-yellow-500 mx-auto" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              The Choice Is Yours
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400">
              (But We Make It Easy)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
            {/* Without Our Group */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 md:p-8 rounded-2xl border border-red-900/30">
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
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 md:p-8 rounded-2xl border border-green-900/30">
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
              className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="testimonials" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111111] to-[#000000] snap-start snap-always pt-24">
        <div className="w-full">
          <TestimonialsSection
            title="See What Others Are Saying"
            description="(Don't get too hyped) - Join thousands of traders who are already scaling safely and consistently with our free signals"
            testimonials={[
              {
                author: {
                  name: "Michael Chen",
                  handle: "@michaelforex",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                },
                text: "Using Aeon Forex signals has completely transformed my trading. The daily signals are accurate and the risk management is top-notch. I've been consistently profitable since joining.",
              },
              {
                author: {
                  name: "Sarah Johnson",
                  handle: "@sarahtrades",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                },
                text: "The best part is I can trade from anywhere. No more staring at charts all day. The signals come in, I execute, and I'm done. Finally have my freedom back!",
              },
              {
                author: {
                  name: "David Martinez",
                  handle: "@davidfx",
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                },
                text: "Started earning from day one. The setup was super easy and the community support is amazing. This is exactly what I needed to scale my trading safely.",
              },
              {
                author: {
                  name: "Emma Wilson",
                  handle: "@emmawilsonfx",
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
                },
                text: "The XAUUSD focus is perfect for me. High volatility means multiple opportunities daily. Combined with their risk management, I feel secure in every trade.",
              },
              {
                author: {
                  name: "James Anderson",
                  handle: "@jamesfx",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                },
                text: "No prior experience needed - they mean it! I was a complete beginner and now I'm making consistent profits. The guidance and signals are that good.",
              },
            ]}
          />
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start snap-always pt-20 md:pt-24 py-8 md:py-12">
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
            className="inline-block w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-bold text-lg md:text-xl hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105"
          >
            Join Our Community Now
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
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
