"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  Settings, 
  LogOut, 
  Menu,
  X,
  BarChart3,
  Calendar,
  Bell,
  Filter,
  Search,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function TradingSignalsPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "closed">("all");

  const handleLogout = () => {
    router.push('/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
    { icon: TrendingUp, label: "Trading Signals", href: "/dashboard/trading-signals", active: true },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics", active: false },
    { icon: Users, label: "Community", href: "#", active: false },
    { icon: Calendar, label: "Schedule", href: "#", active: false },
    { icon: Bell, label: "Notifications", href: "#", active: false },
    { icon: Settings, label: "Settings", href: "#", active: false },
  ];

  const signals = [
    {
      id: 1,
      pair: "XAUUSD",
      type: "BUY",
      entry: "2,145.50",
      stopLoss: "2,140.00",
      takeProfit: "2,155.00",
      status: "active",
      time: "2 hours ago",
      profit: "+$245.00",
      riskReward: "1:2.5",
      confidence: "High"
    },
    {
      id: 2,
      pair: "XAUUSD",
      type: "SELL",
      entry: "2,142.30",
      stopLoss: "2,147.00",
      takeProfit: "2,135.00",
      status: "closed",
      time: "5 hours ago",
      profit: "+$180.00",
      riskReward: "1:1.5",
      confidence: "Medium"
    },
    {
      id: 3,
      pair: "XAUUSD",
      type: "BUY",
      entry: "2,140.20",
      stopLoss: "2,135.00",
      takeProfit: "2,150.00",
      status: "closed",
      time: "1 day ago",
      profit: "+$320.00",
      riskReward: "1:2.0",
      confidence: "High"
    },
    {
      id: 4,
      pair: "XAUUSD",
      type: "SELL",
      entry: "2,148.00",
      stopLoss: "2,152.00",
      takeProfit: "2,140.00",
      status: "active",
      time: "3 hours ago",
      profit: "Pending",
      riskReward: "1:1.0",
      confidence: "Medium"
    },
    {
      id: 5,
      pair: "XAUUSD",
      type: "BUY",
      entry: "2,138.50",
      stopLoss: "2,133.00",
      takeProfit: "2,148.00",
      status: "active",
      time: "6 hours ago",
      profit: "+$95.00",
      riskReward: "1:1.9",
      confidence: "High"
    },
    {
      id: 6,
      pair: "XAUUSD",
      type: "SELL",
      entry: "2,150.20",
      stopLoss: "2,155.00",
      takeProfit: "2,142.00",
      status: "closed",
      time: "2 days ago",
      profit: "-$120.00",
      riskReward: "1:1.0",
      confidence: "Low"
    },
  ];

  const filteredSignals = signals.filter(signal => {
    const matchesSearch = signal.pair.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || signal.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const activeSignals = signals.filter(s => s.status === "active").length;
  const closedSignals = signals.filter(s => s.status === "closed").length;
  const totalProfit = signals
    .filter(s => s.status === "closed" && typeof s.profit === "string" && s.profit.startsWith("+"))
    .reduce((sum, s) => {
      const profit = parseFloat(s.profit.replace(/[^0-9.-]/g, ""));
      return sum + (isNaN(profit) ? 0 : profit);
    }, 0);

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
          bg-gray-900/90 backdrop-blur-sm border-r border-[#D4AF37]/20
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64 flex flex-col
        `}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-[#D4AF37]/20">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <h2 className="text-xl font-bold bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent cursor-pointer">
                Aeon Forex
              </h2>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${item.active 
                    ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A961]/10 border border-[#D4AF37]/30 text-[#FFD700]' 
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-[#D4AF37] border border-transparent'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-[#D4AF37]/20">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-900/20 hover:text-red-400 transition-all border border-transparent hover:border-red-900/30"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-gray-900/50 backdrop-blur-sm border-b border-[#D4AF37]/20 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Welcome back</p>
                  <p className="text-sm font-semibold text-white">Admin User</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Trading Signals Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
              Trading Signals
            </h1>
            <p className="text-gray-400">Monitor and manage all your trading signals</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Active Signals</p>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-white">{activeSignals}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Closed Signals</p>
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-3xl font-bold text-white">{closedSignals}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-400">Total Profit</p>
                <ArrowUp className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-green-400">${totalProfit.toFixed(2)}</p>
            </motion.div>
          </div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-4 mb-6 shadow-lg shadow-[#D4AF37]/5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#D4AF37]/60" />
                </div>
                <input
                  type="text"
                  placeholder="Search by pair..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]/50 transition-all"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus("all")}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    filterStatus === "all"
                      ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A961]/10 border-[#D4AF37]/30 text-[#FFD700]"
                      : "bg-gray-800/50 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus("active")}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    filterStatus === "active"
                      ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A961]/10 border-[#D4AF37]/30 text-[#FFD700]"
                      : "bg-gray-800/50 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilterStatus("closed")}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    filterStatus === "closed"
                      ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#C9A961]/10 border-[#D4AF37]/30 text-[#FFD700]"
                      : "bg-gray-800/50 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                  }`}
                >
                  Closed
                </button>
              </div>
            </div>
          </motion.div>

          {/* Signals List */}
          <div className="space-y-4">
            {filteredSignals.map((signal, index) => (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Side - Signal Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        signal.type === "BUY" 
                          ? "bg-green-900/30 border border-green-500/30" 
                          : "bg-red-900/30 border border-red-500/30"
                      }`}>
                        {signal.type === "BUY" ? (
                          <ArrowUp className="w-8 h-8 text-green-400" />
                        ) : (
                          <ArrowDown className="w-8 h-8 text-red-400" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{signal.pair}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            signal.status === "active"
                              ? "bg-green-900/30 text-green-400 border border-green-500/30"
                              : "bg-gray-800 text-gray-400 border border-gray-700"
                          }`}>
                            {signal.status.toUpperCase()}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            signal.confidence === "High"
                              ? "bg-[#D4AF37]/20 text-[#FFD700] border border-[#D4AF37]/30"
                              : signal.confidence === "Medium"
                              ? "bg-yellow-900/20 text-yellow-400 border border-yellow-500/30"
                              : "bg-orange-900/20 text-orange-400 border border-orange-500/30"
                          }`}>
                            {signal.confidence}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{signal.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Trading Details */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Entry</p>
                        <p className="text-sm font-semibold text-white">{signal.entry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Stop Loss</p>
                        <p className="text-sm font-semibold text-red-400">{signal.stopLoss}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Take Profit</p>
                        <p className="text-sm font-semibold text-green-400">{signal.takeProfit}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Risk/Reward</p>
                        <p className="text-sm font-semibold text-[#D4AF37]">{signal.riskReward}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Profit */}
                  <div className="lg:text-right">
                    <p className="text-xs text-gray-500 mb-1">Profit/Loss</p>
                    <p className={`text-2xl font-bold ${
                      typeof signal.profit === "string" && signal.profit.startsWith("+")
                        ? "text-green-400"
                        : typeof signal.profit === "string" && signal.profit.startsWith("-")
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}>
                      {signal.profit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSignals.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No signals found matching your criteria</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
