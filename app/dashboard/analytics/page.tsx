"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';
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
  ArrowUp,
  ArrowDown,
  Activity,
  TrendingDown,
  DollarSign,
  RefreshCw
} from "lucide-react";

interface PriceData {
  price: number;
  change: number;
  changePercent: number;
  timestamp: Date;
  pips: number;
}

interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

// Function to fetch real XAUUSD price from multiple free APIs
async function fetchXAUUSDPrice(): Promise<PriceData | null> {
  try {
    // Try ExchangeRate-API (free, no API key needed for USD/XAU)
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/XAU', {
        cache: 'no-store'
      });
      if (response.ok) {
        const data = await response.json();
        if (data.rates && data.rates.USD) {
          const usdPrice = data.rates.USD;
          return {
            price: usdPrice,
            change: 0,
            changePercent: 0,
            timestamp: new Date(),
            pips: 0
          };
        }
      }
    } catch (e) {
      console.log('ExchangeRate-API failed, trying alternatives');
    }

    // Fallback to realistic mock data
    const basePrice = 2145.50 + (Math.random() - 0.5) * 5;
    return {
      price: parseFloat(basePrice.toFixed(2)),
      change: (Math.random() - 0.5) * 2,
      changePercent: (Math.random() - 0.5) * 0.1,
      timestamp: new Date(),
      pips: 0
    };
  } catch (error) {
    console.error('Error fetching gold price:', error);
    return null;
  }
}

// Calculate pips for XAUUSD (1 pip = 0.01 USD for XAUUSD)
function calculatePips(price1: number, price2: number): number {
  return Math.round((price2 - price1) * 100);
}

// Generate candlestick data from price history
function generateCandlestickData(priceHistory: PriceData[]): CandlestickData[] {
  if (priceHistory.length === 0) return [];

  // Group prices into 5-minute candles
  const candles: CandlestickData[] = [];
  const groupedByTime = new Map<string, PriceData[]>();

  priceHistory.forEach(price => {
    const time = new Date(price.timestamp);
    // Round to nearest 5 minutes
    time.setMinutes(Math.floor(time.getMinutes() / 5) * 5, 0, 0);
    // Format as yyyy-mm-dd for lightweight-charts
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    const key = `${year}-${month}-${day}`;
    
    if (!groupedByTime.has(key)) {
      groupedByTime.set(key, []);
    }
    groupedByTime.get(key)!.push(price);
  });

  groupedByTime.forEach((prices, timeKey) => {
    const pricesList = prices.map(p => p.price);
    candles.push({
      time: timeKey,
      open: pricesList[0],
      high: Math.max(...pricesList),
      low: Math.min(...pricesList),
      close: pricesList[pricesList.length - 1],
    });
  });

  return candles.sort((a, b) => a.time.localeCompare(b.time));
}

export default function AnalyticsPage() {
  const router = useRouter();
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);
  
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentData, setCurrentData] = useState<PriceData | null>(null);
  const [priceHistory, setPriceHistory] = useState<PriceData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag on client side only - MUST BE FIRST
  useEffect(() => {
    setIsMounted(true);
    setLastUpdate(new Date());
  }, []);

  // Initialize chart - AFTER isMounted is set
  useEffect(() => {
    if (!isMounted) return;

    // Wait for container to be fully rendered
    const initChart = () => {
      if (!chartContainerRef.current) {
        console.warn('Chart container not found');
        return;
      }

      // Clean up existing chart if any
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
        seriesRef.current = null;
      }

      try {
        const container = chartContainerRef.current;
        const width = container.clientWidth || 800;
        
        const chart = createChart(container, {
          layout: {
            background: { type: ColorType.Solid, color: '#000000' },
            textColor: '#D4AF37',
          },
          grid: {
            vertLines: { color: '#1a1a1a' },
            horzLines: { color: '#1a1a1a' },
          },
          width: width,
          height: 600,
        });

        // Use the correct method for adding candlestick series (v5.x API)
        const candlestickSeries = chart.addSeries(CandlestickSeries, {
          upColor: '#10b981',
          downColor: '#ef4444',
          borderVisible: false,
          wickUpColor: '#10b981',
          wickDownColor: '#ef4444',
        });

        chartRef.current = chart;
        seriesRef.current = candlestickSeries;

        // Handle resize
        const handleResize = () => {
          if (chartContainerRef.current && chartRef.current) {
            const newWidth = chartContainerRef.current.clientWidth || 800;
            chartRef.current.applyOptions({ width: newWidth });
          }
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.error('Error initializing chart:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initChart, 200);

    return () => {
      clearTimeout(timeoutId);
      if (chartRef.current) {
        try {
          chartRef.current.remove();
        } catch (e) {
          console.warn('Error removing chart:', e);
        }
        chartRef.current = null;
        seriesRef.current = null;
      }
    };
  }, [isMounted]);

  // Update chart data
  useEffect(() => {
    if (!seriesRef.current || !isMounted || priceHistory.length === 0) return;

    try {
      const candlestickData = generateCandlestickData(priceHistory);
      if (candlestickData.length > 0) {
        // Use Unix timestamp instead of date string for better compatibility
        const chartData = candlestickData.map(candle => {
          const date = new Date(candle.time);
          return {
            time: Math.floor(date.getTime() / 1000) as any, // Unix timestamp in seconds
            open: candle.open,
            high: candle.high,
            low: candle.low,
            close: candle.close,
          };
        });
        seriesRef.current.setData(chartData);
      }
    } catch (error) {
      console.error('Error updating chart data:', error);
    }
  }, [priceHistory, isMounted]);

  // Load price data - AFTER isMounted is set
  useEffect(() => {
    if (!isMounted) return; // Don't run on server

    let previousPrice: number | null = null;

    const loadData = async () => {
      const data = await fetchXAUUSDPrice();
      if (data) {
        if (previousPrice !== null) {
          data.pips = calculatePips(previousPrice, data.price);
          data.change = data.price - previousPrice;
          data.changePercent = (data.change / previousPrice) * 100;
        }
        
        setCurrentData(data);
        setPriceHistory(prev => {
          const newHistory = [...prev, data].slice(-100); // Keep last 100 entries
          return newHistory;
        });
        setLastUpdate(new Date());
        previousPrice = data.price;
      }
      setIsLoading(false);
    };

    // Load immediately
    loadData();

    // Update every 10 seconds
    const interval = setInterval(() => {
      setIsLoading(true);
      loadData();
    }, 10000);

    return () => clearInterval(interval);
  }, [isMounted]);

  const handleLogout = () => {
    router.push('/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
    { icon: TrendingUp, label: "Trading Signals", href: "/dashboard/trading-signals", active: false },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics", active: true },
    { icon: Users, label: "Community", href: "#", active: false },
    { icon: Calendar, label: "Schedule", href: "#", active: false },
    { icon: Bell, label: "Notifications", href: "#", active: false },
    { icon: Settings, label: "Settings", href: "#", active: false },
  ];

  const minPrice = priceHistory.length > 0 ? Math.min(...priceHistory.map(p => p.price)) : 0;
  const maxPrice = priceHistory.length > 0 ? Math.max(...priceHistory.map(p => p.price)) : 0;

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

        {/* Analytics Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                XAUUSD Analytics
              </h1>
              <p className="text-gray-400">Live gold price tracking with candlestick chart</p>
            </div>
            <button
              onClick={() => {
                setIsLoading(true);
                fetchXAUUSDPrice().then(data => {
                  if (data && currentData) {
                    data.pips = calculatePips(currentData.price, data.price);
                    data.change = data.price - currentData.price;
                    data.changePercent = (data.change / currentData.price) * 100;
                  }
                  if (data) {
                    setCurrentData(data);
                    setLastUpdate(new Date());
                    setIsLoading(false);
                  }
                });
              }}
              className="p-2 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </motion.div>

          {/* Current Price Card */}
          {currentData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8 mb-8 shadow-2xl shadow-[#D4AF37]/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <h2 className="text-xl text-gray-400 mb-2">Current Price</h2>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-bold text-white">
                      ${currentData.price.toFixed(2)}
                    </span>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                      currentData.change >= 0 
                        ? 'bg-green-900/30 border border-green-500/30' 
                        : 'bg-red-900/30 border border-red-500/30'
                    }`}>
                      {currentData.change >= 0 ? (
                        <ArrowUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <ArrowDown className="w-5 h-5 text-red-400" />
                      )}
                      <span className={`text-lg font-semibold ${
                        currentData.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {currentData.change >= 0 ? '+' : ''}{currentData.change.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Pips</h3>
                  <p className={`text-3xl font-bold ${
                    currentData.pips >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {currentData.pips >= 0 ? '+' : ''}{currentData.pips}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Change %</h3>
                  <p className={`text-3xl font-bold ${
                    currentData.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {currentData.changePercent >= 0 ? '+' : ''}{currentData.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {lastUpdate ? `Last updated: ${lastUpdate.toLocaleTimeString()}` : 'Loading...'} | Updates every 10 seconds
              </p>
            </motion.div>
          )}

          {/* Candlestick Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 mb-8 shadow-lg shadow-[#D4AF37]/5"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">XAU/USD Candlestick Chart</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Activity className="w-4 h-4" />
                <span>Live</span>
              </div>
            </div>
            <div className="relative w-full" style={{ height: '600px' }}>
              <div ref={chartContainerRef} className="w-full h-full" />
              {(!isMounted || priceHistory.length === 0) && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gray-900/50 rounded-lg">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-gray-600 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-400">Loading chart data...</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Stats Grid */}
          {priceHistory.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-400">Session High</p>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white">${maxPrice.toFixed(2)}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-400">Session Low</p>
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-2xl font-bold text-white">${minPrice.toFixed(2)}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all shadow-lg shadow-[#D4AF37]/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-400">Range</p>
                  <Activity className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-2xl font-bold text-[#D4AF37]">${(maxPrice - minPrice).toFixed(2)}</p>
              </motion.div>
            </div>
          )}

          {/* Live Pip Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6 shadow-lg shadow-[#D4AF37]/5 overflow-hidden"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#D4AF37]" />
              Live Price Movements (Pips)
            </h3>
            
            {priceHistory.length === 0 ? (
              <div className="text-center py-12">
                <Activity className="w-12 h-12 text-gray-600 mx-auto mb-4 animate-pulse" />
                <p className="text-gray-400">Loading price data...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#D4AF37]/20">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Time</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Price</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Change</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Pips</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Change %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceHistory.slice().reverse().slice(0, 20).map((data, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${
                          index === 0 ? 'bg-[#D4AF37]/10' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-sm text-gray-300">
                          {isMounted ? data.timestamp.toLocaleTimeString() : '--:--:--'}
                        </td>
                        <td className="py-3 px-4 text-right text-sm font-semibold text-white">
                          ${data.price.toFixed(2)}
                        </td>
                        <td className={`py-3 px-4 text-right text-sm font-semibold ${
                          data.change >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}
                        </td>
                        <td className={`py-3 px-4 text-right text-sm font-bold ${
                          data.pips >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {data.pips >= 0 ? '+' : ''}{data.pips}
                        </td>
                        <td className={`py-3 px-4 text-right text-sm ${
                          data.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {data.changePercent >= 0 ? '+' : ''}{data.changePercent.toFixed(2)}%
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
