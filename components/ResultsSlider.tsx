'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ResultsSliderProps {
  images: string[];
}

export default function ResultsSlider({ images }: ResultsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPreviousIndex = () => 
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  
  const getNextIndex = () => 
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout - Single Column */}
      <div className="md:hidden">
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-xs aspect-[9/16]">
            <Image
              src={`/${images[currentIndex]}`}
              alt={`Trading result ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
              unoptimized
            />
            {/* Navigation Buttons - Mobile */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/80 hover:bg-black text-white rounded-full transition-all backdrop-blur-sm border border-gray-600"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/80 hover:bg-black text-white rounded-full transition-all backdrop-blur-sm border border-gray-600"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            {/* Image Counter - Mobile */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-full border border-gray-600">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Three Column */}
      <div className="hidden md:grid grid-cols-3 gap-4 items-center">
        {/* Previous Image (Left) */}
        <motion.div
          key={`prev-${getPreviousIndex()}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="relative cursor-pointer group flex justify-center"
          onClick={goToPrevious}
        >
          <div className="relative w-full max-w-xs aspect-[9/16]">
            <Image
              src={`/${images[getPreviousIndex()]}`}
              alt={`Previous trading result`}
              fill
              className="object-contain"
              unoptimized
            />
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-gray-600"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Current Image (Center) - Slightly Smaller */}
        <motion.div
          key={`current-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[9/16]">
            <Image
              src={`/${images[currentIndex]}`}
              alt={`Trading result ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
              unoptimized
            />
            {/* Image Counter */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full border border-gray-600">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>

        {/* Next Image (Right) */}
        <motion.div
          key={`next-${getNextIndex()}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="relative cursor-pointer group flex justify-center"
          onClick={goToNext}
        >
          <div className="relative w-full max-w-xs aspect-[9/16]">
            <Image
              src={`/${images[getNextIndex()]}`}
              alt={`Next trading result`}
              fill
              className="object-contain"
              unoptimized
            />
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors" />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-gray-600"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
