"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { TrendingUp, Users, BarChart, Eye, MousePointerClick, Video, MessageSquare, Calendar, ArrowUpRight, ArrowDownRight, Activity, Target, Zap } from "lucide-react";

export default function MarketingPlanDashboard() {
  const stats = [
    {
      label: "Website Traffic",
      value: "12,458",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Telegram Leden",
      value: "1,247",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "from-[#D4AF37] to-[#C9A961]"
    },
    {
      label: "Conversie Rate",
      value: "3.8%",
      change: "+0.5%",
      trend: "up",
      icon: MousePointerClick,
      color: "from-green-500 to-emerald-500"
    },
    {
      label: "Engagement Rate",
      value: "5.2%",
      change: "+1.2%",
      trend: "up",
      icon: Activity,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const recentActivity = [
    { type: "Ad Campaign", name: "Lifestyle Reel #3", status: "Live", date: "2 uur geleden", performance: "+15% CTR" },
    { type: "Content", name: "Educational Reel - Emoties", status: "Draft", date: "5 uur geleden", performance: "Pending" },
    { type: "A/B Test", name: "CTA Variatie Test", status: "Running", date: "1 dag geleden", performance: "Variatie A wint" },
    { type: "Analytics", name: "Weekly Report", status: "Completed", date: "2 dagen geleden", performance: "View Report" },
  ];

  const campaignPerformance = [
    { name: "Lifestyle Ads", impressions: 45230, clicks: 1245, ctr: 2.75, conversions: 89, status: "active" },
    { name: "Educational Ads", impressions: 38210, clicks: 1923, ctr: 5.03, conversions: 142, status: "active" },
    { name: "Retargeting", impressions: 28150, clicks: 856, ctr: 3.04, conversions: 67, status: "active" },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Hero Section */}
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
                  Marketing Dashboard
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Overzicht van alle marketing activiteiten, statistieken en prestaties
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {stat.trend === "up" ? (
                      <div className="flex items-center gap-1 text-green-400">
                        <ArrowUpRight className="w-4 h-4" />
                        <span className="text-sm font-semibold">{stat.change}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-400">
                        <ArrowDownRight className="w-4 h-4" />
                        <span className="text-sm font-semibold">{stat.change}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campaign Performance */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Campaign Performance</h2>
            <Link 
              href="/marketingplan/metrics"
              className="text-[#D4AF37] hover:text-[#FFD700] transition text-sm font-medium flex items-center gap-2"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {campaignPerformance.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                    {campaign.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Impressions</span>
                    <span className="text-white font-semibold">{campaign.impressions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Clicks</span>
                    <span className="text-white font-semibold">{campaign.clicks.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">CTR</span>
                    <span className="text-[#D4AF37] font-semibold">{campaign.ctr}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Conversions</span>
                    <span className="text-green-400 font-semibold">{campaign.conversions}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity & Quick Actions */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
                <Activity className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-800 last:border-0">
                    <div className="p-2 bg-[#D4AF37]/20 rounded-lg">
                      {activity.type === "Ad Campaign" && <Video className="w-4 h-4 text-[#D4AF37]" />}
                      {activity.type === "Content" && <MessageSquare className="w-4 h-4 text-[#D4AF37]" />}
                      {activity.type === "A/B Test" && <Zap className="w-4 h-4 text-[#D4AF37]" />}
                      {activity.type === "Analytics" && <BarChart className="w-4 h-4 text-[#D4AF37]" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-semibold">{activity.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          activity.status === "Live" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                          activity.status === "Running" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                          activity.status === "Draft" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
                          "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{activity.type}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{activity.date}</span>
                        <span className="text-[#D4AF37] text-xs font-medium">{activity.performance}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
                <Zap className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Link
                  href="/marketingplan/ai-ads"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A961]/5 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition group"
                >
                  <div className="p-2 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition">
                    <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Bekijk AI Ads Strategie</h4>
                    <p className="text-gray-400 text-sm">Lifestyle & Educational</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] transition" />
                </Link>
                <Link
                  href="/marketingplan/ab-testing"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A961]/5 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition group"
                >
                  <div className="p-2 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Start A/B Test</h4>
                    <p className="text-gray-400 text-sm">Test nieuwe variaties</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] transition" />
                </Link>
                <Link
                  href="/marketingplan/calendar"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A961]/5 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition group"
                >
                  <div className="p-2 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37]/30 transition">
                    <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Content Calendar</h4>
                    <p className="text-gray-400 text-sm">Plan je content</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#D4AF37] transition" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
