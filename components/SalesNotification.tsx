'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NotificationData {
  name: string;
  location: string;
  time: string;
}

const notifications: NotificationData[] = [
  { name: 'Michael', location: 'Amsterdam', time: '2 minutes ago' },
  { name: 'Sarah', location: 'Rotterdam', time: '3 minutes ago' },
  { name: 'David', location: 'Utrecht', time: '4 minutes ago' },
  { name: 'Emma', location: 'Den Haag', time: '5 minutes ago' },
  { name: 'Lucas', location: 'Eindhoven', time: '6 minutes ago' },
  { name: 'Sophie', location: 'Groningen', time: '7 minutes ago' },
  { name: 'Thomas', location: 'Maastricht', time: '8 minutes ago' },
  { name: 'Lisa', location: 'Leiden', time: '9 minutes ago' },
  { name: 'Jan', location: 'Breda', time: '10 minutes ago' },
  { name: 'Anna', location: 'Nijmegen', time: '11 minutes ago' },
  { name: 'Mark', location: 'Enschede', time: '12 minutes ago' },
  { name: 'Laura', location: 'Tilburg', time: '13 minutes ago' },
  { name: 'Kevin', location: 'Almere', time: '14 minutes ago' },
  { name: 'Julia', location: 'Haarlem', time: '15 minutes ago' },
];

export default function SalesNotification() {
  const [currentNotification, setCurrentNotification] = useState<NotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const showNotification = () => {
      if (isVisibleRef.current) return; // Don't show if already visible
      
      // Pick random notification
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);
      isVisibleRef.current = true;

      // Hide after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        isVisibleRef.current = false;
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    // Then show notifications every 10-18 seconds
    const scheduleNext = () => {
      const delay = Math.random() * 8000 + 10000; // Random between 10-18 seconds
      intervalId = setTimeout(() => {
        if (!isVisibleRef.current) {
          showNotification();
        }
        scheduleNext();
      }, delay);
    };

    // Start scheduling after first notification
    setTimeout(() => {
      scheduleNext();
    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg shadow-2xl p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#D4AF37] text-sm font-semibold animate-pulse">
                    ✓
                  </span>
                  <p className="text-white text-sm font-semibold truncate">
                    {currentNotification.name} from {currentNotification.location}
                  </p>
                </div>
                <p className="text-gray-400 text-xs mb-1">
                  just joined the free community
                </p>
                <p className="text-gray-500 text-xs">
                  {currentNotification.time}
                </p>
              </div>
            </div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#D4AF37]/25 to-[#C9A961]/25"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
