"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Target, TrendingUp, Users, BarChart, Lightbulb, CheckCircle2, Video, MessageSquare, Calendar, Zap, Shield, Heart, Brain, Clock, TestTube, Eye, MousePointerClick, Menu, X, Film, Megaphone } from "lucide-react";
import Logo from "@/components/Logo";

const sidebarItems = [
  { id: "overview", label: "Dashboard", icon: Target, href: "/marketingplan" },
  { id: "advertisements", label: "Advertenties", icon: Megaphone, href: "/marketingplan/advertisements", highlight: true },
  { id: "messaging", label: "Core Messaging", icon: MessageSquare, href: "/marketingplan/messaging" },
  { id: "ai-ads", label: "AI Character Ads", icon: Video, href: "/marketingplan/ai-ads" },
  { id: "content-pillars", label: "Content Pillars", icon: Lightbulb, href: "/marketingplan/content-pillars" },
  { id: "targeting", label: "Targeting", icon: Users, href: "/marketingplan/targeting" },
  { id: "ab-testing", label: "A/B Testing", icon: TestTube, href: "/marketingplan/ab-testing" },
  { id: "formats", label: "Ad Formats", icon: Film, href: "/marketingplan/formats" },
  { id: "cta", label: "Call-to-Actions", icon: MousePointerClick, href: "/marketingplan/cta" },
  { id: "calendar", label: "Content Calendar", icon: Calendar, href: "/marketingplan/calendar" },
  { id: "tone", label: "Tone of Voice", icon: Heart, href: "/marketingplan/tone" },
  { id: "metrics", label: "Metrics", icon: BarChart, href: "/marketingplan/metrics" },
];

export default function MarketingPlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#000000] text-white flex">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          bg-[#000000] border-r border-[#D4AF37]/20
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64 flex flex-col
        `}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-[#D4AF37]/20">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>
            <button
              onClick={() => {
                setSidebarOpen(false);
                setMobileMenuOpen(false);
              }}
              className="md:hidden text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href === "/marketingplan" && pathname === "/marketingplan");
            const isHighlighted = item.highlight;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A961]/10 text-[#FFD700] border border-[#D4AF37]/30' 
                    : isHighlighted
                    ? 'bg-gradient-to-r from-[#D4AF37]/30 to-[#C9A961]/20 text-[#FFD700] border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/20'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-[#D4AF37]'
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
                {isHighlighted && (
                  <span className="ml-auto px-2 py-0.5 bg-[#D4AF37] text-black text-xs font-bold rounded-full">NEW</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#D4AF37]/20">
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition text-sm"
          >
            <span>← Terug naar Home</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <nav className="sticky top-0 z-40 bg-[#000000]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <button
                onClick={() => {
                  setSidebarOpen(!sidebarOpen);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="md:hidden text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link href="/" className="text-gray-300 hover:text-[#D4AF37] transition text-sm font-medium whitespace-nowrap">Home</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
