'use client';

import { useEffect, useRef } from 'react';

export default function ScrollSnapHandler() {
  const isScrollingRef = useRef(false);
  const scrollLockRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null);

  useEffect(() => {
    // Only enable scroll snap on desktop/tablet (>=768px)
    const isDesktop = window.innerWidth >= 768;
    
    if (!isDesktop) {
      // On mobile, disable scroll snap - let users scroll naturally
      return;
    }

    const SCROLL_LOCK_DURATION = 2000; // 2 seconds lock
    const SCROLL_COOLDOWN = 100; // Minimum time between scrolls (ms)

    const getCurrentSectionIndex = (): number => {
      const sections = document.querySelectorAll('section[class*="snap-start"]');
      const viewportHeight = window.innerHeight;
      
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        // Check if section is in viewport (within 50% of viewport)
        if (rect.top >= -viewportHeight * 0.5 && rect.top <= viewportHeight * 0.5) {
          return i;
        }
      }
      return 0;
    };

    const scrollToSection = (index: number) => {
      const sections = document.querySelectorAll('section[class*="snap-start"]');
      if (index < 0 || index >= sections.length) return;

      isScrollingRef.current = true;
      scrollLockRef.current = true;

      sections[index].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });

      // Lock scrolling for 2 seconds after scroll
      setTimeout(() => {
        scrollLockRef.current = false;
        isScrollingRef.current = false;
      }, SCROLL_LOCK_DURATION);
    };

    const handleWheel = (e: WheelEvent) => {
      // Prevent default scrolling
      e.preventDefault();

      // If locked or currently scrolling, ignore
      if (scrollLockRef.current || isScrollingRef.current) {
        return;
      }

      // Check cooldown
      const now = Date.now();
      if (now - lastScrollTimeRef.current < SCROLL_COOLDOWN) {
        return;
      }

      const deltaY = e.deltaY;
      const currentIndex = getCurrentSectionIndex();
      const sections = document.querySelectorAll('section[class*="snap-start"]');

      // Determine direction
      let newDirection: 'up' | 'down' | null = null;
      if (deltaY > 10) {
        newDirection = 'down';
      } else if (deltaY < -10) {
        newDirection = 'up';
      }

      // Only proceed if direction is clear and different from last
      if (!newDirection) return;

      // Reset direction if it changed
      if (scrollDirectionRef.current && scrollDirectionRef.current !== newDirection) {
        scrollDirectionRef.current = newDirection;
        return;
      }

      scrollDirectionRef.current = newDirection;
      lastScrollTimeRef.current = now;

      // Scroll to next/previous section
      if (newDirection === 'down' && currentIndex < sections.length - 1) {
        scrollToSection(currentIndex + 1);
      } else if (newDirection === 'up' && currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }
    };

    // Also handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (scrollLockRef.current || isScrollingRef.current) {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const currentIndex = getCurrentSectionIndex();
      const sections = document.querySelectorAll('section[class*="snap-start"]');

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentIndex < sections.length - 1) {
          scrollToSection(currentIndex + 1);
        } else if (deltaY < 0 && currentIndex > 0) {
          scrollToSection(currentIndex - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return null;
}
