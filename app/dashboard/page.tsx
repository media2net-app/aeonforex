"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { createChart, ColorType, LineSeries } from 'lightweight-charts';
import { useEffect, useRef } from "react";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  Settings, 
  LogOut, 
  Folder,
  Calendar,
  Bell,
  Search,
  Download,
  Plus,
  Sun,
  Moon,
  ChevronDown,
  Clock,
  MapPin,
  MoreVertical,
  CheckCircle2,
  Circle
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  const projectsChartRef = useRef<HTMLDivElement>(null);
  const clientsChartRef = useRef<HTMLDivElement>(null);
  const revenueChartRef = useRef<HTMLDivElement>(null);
  const progressChartRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    router.push('/login');
  };

  const sidebarItems = [
    { icon: LayoutDashboard, href: "/dashboard", active: true, dot: true },
    { icon: Users, href: "/dashboard/trading-signals", active: false },
    { icon: Folder, href: "/dashboard/analytics", active: false },
    { icon: Calendar, href: "#", active: false },
    { icon: Bell, href: "#", active: false },
    { icon: Settings, href: "#", active: false },
  ];

  // Initialize mini charts for stat cards
  useEffect(() => {
    const initMiniChart = (container: HTMLDivElement | null, color: string, data: number[]) => {
      if (!container) return;
      
      const chart = createChart(container, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: 'transparent',
        },
        grid: {
          vertLines: { visible: false },
          horzLines: { visible: false },
        },
        width: container.clientWidth,
        height: 40,
        rightPriceScale: { visible: false },
        leftPriceScale: { visible: false },
        timeScale: { visible: false },
      });

      const lineSeries = chart.addSeries(LineSeries, {
        color: color,
        lineWidth: 2,
      });

      const chartData = data.map((value, index) => ({
        time: index as any,
        value: value,
      }));

      lineSeries.setData(chartData);
      
      return () => chart.remove();
    };

    const cleanup1 = initMiniChart(projectsChartRef.current, '#10b981', [20, 25, 22, 28, 30, 27, 32]);
    const cleanup2 = initMiniChart(clientsChartRef.current, '#10b981', [15, 18, 16, 20, 22, 19, 24]);
    const cleanup3 = initMiniChart(revenueChartRef.current, '#ef4444', [70, 72, 68, 75, 73, 70, 68]);

    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
    };
  }, []);

  // Initialize progress chart
  useEffect(() => {
    if (!progressChartRef.current) return;

    const chart = createChart(progressChartRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#000000' },
        textColor: '#9ca3af',
      },
      grid: {
        vertLines: { color: '#1a1a1a' },
        horzLines: { color: '#1a1a1a' },
      },
      width: progressChartRef.current.clientWidth,
      height: 300,
      rightPriceScale: { visible: false },
    });

    const postSuccessSeries = chart.addSeries(LineSeries, {
      color: '#a855f7',
      lineWidth: 3,
    });

    const postFailedSeries = chart.addSeries(LineSeries, {
      color: '#f97316',
      lineWidth: 3,
    });

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const successData = [2, 3, 2.5, 4, 3.5, 5, 4.5, 6, 5.5, 7, 6.5, 8];
    const failedData = [1, 1.5, 1.2, 2, 1.8, 2.5, 2.2, 3, 2.8, 3.5, 3.2, 4];

    postSuccessSeries.setData(months.map((_, i) => ({ time: i as any, value: successData[i] })));
    postFailedSeries.setData(months.map((_, i) => ({ time: i as any, value: failedData[i] })));

    return () => chart.remove();
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-[#000000] text-white flex relative overflow-hidden">
      {/* Golden Glow Effect - Top Center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Left Sidebar - Narrow with Icons Only */}
      <aside className="fixed md:static inset-y-0 left-0 z-50 w-16 md:w-20 bg-gray-900/50 backdrop-blur-sm border-r border-[#D4AF37]/10 flex flex-col items-center py-6">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className={`
                relative w-12 h-12 flex items-center justify-center rounded-lg mb-3
                transition-all duration-200
                ${item.active 
                  ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#C9A961]/10 text-[#FFD700] border border-[#D4AF37]/30' 
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-[#D4AF37]'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {item.dot && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full border border-[#000000]" />
              )}
            </Link>
          );
        })}
        
        {/* Profile Picture at Bottom */}
        <button
          onClick={handleLogout}
          className="mt-auto w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] flex items-center justify-center border-2 border-[#D4AF37]/30 hover:border-[#FFD700] transition-all cursor-pointer group"
          title="Logout"
        >
          <span className="text-white font-bold text-sm">A</span>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#000000] opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 ml-16 md:ml-20 relative z-10">
        {/* Top Header */}
        <header className="bg-gray-900/30 backdrop-blur-sm border-b border-[#D4AF37]/10 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Dashboard */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C9A961] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Dashboard</h1>
            </div>

            {/* Center: Welcome + Search */}
            <div className="flex-1 max-w-2xl mx-8 hidden lg:flex items-center gap-6">
              <div>
                <p className="text-sm text-gray-400">Welcome buddy!</p>
                <p className="text-sm text-gray-300">Today? {currentDate}</p>
              </div>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-gray-800/50 border border-[#D4AF37]/20 hover:bg-gray-800/70 transition-all">
                  <Download className="w-4 h-4 text-gray-300" />
                </button>
                <button className="px-3 py-2 rounded-lg bg-gray-800/50 border border-[#D4AF37]/20 hover:bg-gray-800/70 transition-all text-sm text-gray-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule
                </button>
                <button className="p-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C9A961] hover:from-[#FFD700] hover:to-[#D4AF37] transition-all">
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right: Mode Toggle + Branch + Settings */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-800/50 border border-[#D4AF37]/20 hover:bg-gray-800/70 transition-all"
              >
                {darkMode ? <Moon className="w-4 h-4 text-gray-300" /> : <Sun className="w-4 h-4 text-gray-300" />}
              </button>
              <button className="px-3 py-2 rounded-lg bg-gray-800/50 border border-[#D4AF37]/20 hover:bg-gray-800/70 transition-all text-sm text-gray-300 flex items-center gap-2">
                <span>Branch Name</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800/50 border border-[#D4AF37]/20 hover:bg-gray-800/70 transition-all">
                <Settings className="w-4 h-4 text-gray-300" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Top Row - Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Active Trades Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Trades</p>
                <select className="text-xs text-gray-400 bg-gray-800/50 border border-[#D4AF37]/20 rounded px-2 py-1">
                  <option>This month</option>
                </select>
              </div>
              <p className="text-4xl font-bold text-white mb-2">48</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-green-400">+12% ↗</span>
                <div ref={projectsChartRef} className="flex-1 h-10" />
              </div>
            </motion.div>

            {/* Community Members Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Community</p>
                <select className="text-xs text-gray-400 bg-gray-800/50 border border-[#D4AF37]/20 rounded px-2 py-1">
                  <option>This month</option>
                </select>
              </div>
              <p className="text-4xl font-bold text-white mb-2">4,250</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-green-400">+8% ↗</span>
                <div ref={clientsChartRef} className="flex-1 h-10" />
              </div>
            </motion.div>

            {/* Total Profit Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Profit</p>
                <select className="text-xs text-gray-400 bg-gray-800/50 border border-[#D4AF37]/20 rounded px-2 py-1">
                  <option>This month</option>
                </select>
              </div>
              <p className="text-4xl font-bold text-white mb-2">$124K</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-green-400">+15% ↗</span>
                <div ref={revenueChartRef} className="flex-1 h-10" />
              </div>
            </motion.div>
          </div>

          {/* Middle Row - Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Trading Performance Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Trading Performance Overview</h3>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="text-gray-400">Winning Trades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-gray-400">Losing Trades</span>
                  </div>
                </div>
              </div>
              <div ref={progressChartRef} className="w-full h-[300px]" />
              <div className="mt-4 p-3 bg-gray-800/30 rounded-lg border border-[#D4AF37]/10">
                <p className="text-xs text-gray-400 mb-1">Today - {new Date().toLocaleDateString()}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-white">$3,245</p>
                  <span className="text-sm font-semibold text-green-400">+3.4%</span>
                </div>
              </div>
            </motion.div>

            {/* Trading Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <h3 className="text-lg font-bold text-white mb-6">Your Trading Score</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90" width="192" height="192">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="16"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="16"
                      strokeDasharray={`${83 * 2.51} ${251 * 2.51}`}
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="16"
                      strokeDasharray={`${83 * 2.51} ${251 * 2.51}`}
                      strokeDashoffset={`-${83 * 2.51}`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="16"
                      strokeDasharray={`${83 * 2.51} ${251 * 2.51}`}
                      strokeDashoffset={`-${(83 + 83) * 2.51}`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="16"
                      strokeDasharray={`${83 * 2.51} ${251 * 2.51}`}
                      strokeDashoffset={`-${(83 + 83 + 83) * 2.51}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-white">83%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-sm text-gray-300">Win Rate</span>
                  <span className="text-sm font-bold text-white">83%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-sm text-gray-300">Risk Management</span>
                  <span className="text-sm font-bold text-white">92%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-sm text-gray-300">Consistency</span>
                  <span className="text-sm font-bold text-white">78%</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] hover:from-[#FFD700] hover:to-[#D4AF37] rounded-lg text-white font-semibold text-sm transition-all">
                Excellent Performance
              </button>
            </motion.div>
          </div>

          {/* Bottom Row - Status, Tasks, Meetings */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Active Traders - Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <h3 className="text-lg font-bold text-white mb-4">Active Traders</h3>
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">Online</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Michael Chen", pair: "XAUUSD", time: "2 Hr" },
                  { name: "Sarah Johnson", pair: "XAUUSD", time: "1 Hr" },
                  { name: "David Martinez", pair: "XAUUSD", time: "30 Min" },
                ].map((trader, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{trader.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{trader.name}</p>
                      <p className="text-xs text-gray-400">{trader.pair}</p>
                    </div>
                    <span className="text-xs text-gray-400">{trader.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trading Signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5 lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Trading Signals</h3>
                <Link href="/dashboard/trading-signals" className="p-2 rounded-lg bg-gray-800/50 border border-[#D4AF37]/20 hover:bg-gray-800/70 transition-all">
                  <Plus className="w-4 h-4 text-gray-300" />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { 
                    title: "XAUUSD BUY Signal - Entry: $2,145.50", 
                    desc: "Strong support level detected. Target: $2,155.00, Stop Loss: $2,140.00",
                    date: "Today",
                    priority: "High",
                    status: "Active"
                  },
                  { 
                    title: "XAUUSD SELL Signal - Entry: $2,148.00", 
                    desc: "Resistance level reached. Target: $2,140.00, Stop Loss: $2,152.00",
                    date: "Today",
                    priority: "Medium",
                    status: "Pending"
                  },
                ].map((signal, index) => (
                  <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-[#D4AF37]/10">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">{signal.title}</p>
                        <p className="text-xs text-gray-400">{signal.desc}</p>
                      </div>
                      <button className="p-1 hover:bg-gray-700/50 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{signal.date}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        signal.priority === 'High' 
                          ? 'bg-red-500/20 text-red-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {signal.priority}
                      </span>
                      <select className="px-2 py-1 bg-gray-700/50 border border-[#D4AF37]/20 rounded text-xs text-gray-300">
                        <option>{signal.status}</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Active Traders - Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <h3 className="text-lg font-bold text-white mb-4">Top Performers</h3>
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">Profitable</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Emma Wilson", profit: "+$2,450", time: "Today" },
                  { name: "James Anderson", profit: "+$1,890", time: "Today" },
                  { name: "Lucas Thompson", profit: "+$3,120", time: "Today" },
                ].map((trader, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{trader.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{trader.name}</p>
                      <p className="text-xs text-green-400 font-semibold">{trader.profit}</p>
                    </div>
                    <span className="text-xs text-gray-400">{trader.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trading Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Signal Schedule</h3>
              </div>
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-1 hover:bg-gray-800/50 rounded">
                  <ChevronDown className="w-4 h-4 text-gray-400 rotate-90" />
                </button>
                <span className="text-sm font-semibold text-white">{new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                <button className="p-1 hover:bg-gray-800/50 rounded">
                  <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
                </button>
              </div>

              {/* Week View */}
              <div className="flex items-center justify-between mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => {
                  const today = new Date();
                  const dayNum = today.getDate() - (today.getDay() - 1) + index;
                  return (
                    <div
                      key={index}
                      className={`flex-1 text-center py-2 rounded ${
                        index === today.getDay() - 1 ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#C9A961]/10 border border-[#D4AF37]/30' : ''
                      }`}
                    >
                      <p className={`text-xs ${index === today.getDay() - 1 ? 'text-[#FFD700] font-bold' : 'text-gray-400'}`}>
                        {day} {dayNum}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Search and Filter */}
              <div className="mb-4">
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search signals"
                    className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg text-white placeholder-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                  />
                </div>
                <div className="flex gap-2">
                  {['Signals', 'Events', 'Alerts'].map((filter, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded text-xs transition-all ${
                        index === 0
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Signal List */}
              <div className="space-y-3">
                {[
                  { title: "XAUUSD BUY Signal", time: "9:25-9:45 AM (UTC)", pair: "XAUUSD", location: "Telegram Channel", tag: "High Priority" },
                  { title: "XAUUSD SELL Signal", time: "9:00-9:20 AM (UTC)", pair: "XAUUSD", location: "Telegram Channel", tag: "Medium" },
                  { title: "Market Analysis Update", time: "9:50-10:10 AM (UTC)", pair: "XAUUSD", location: "Telegram Channel", tag: "" },
                ].map((signal, index) => (
                  <div key={index} className="p-3 bg-gray-800/30 rounded-lg border border-[#D4AF37]/10">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">{signal.title}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                          <Clock className="w-3 h-3" />
                          <span>{signal.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="text-[#D4AF37] font-semibold">{signal.pair}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{signal.location}</span>
                        </div>
                      </div>
                    </div>
                    {signal.tag && (
                      <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                        {signal.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
