'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  className?: string;
  hlsSrc?: string; // HLS stream URL (.m3u8)
}

export default function VideoPlayer({ src, hlsSrc, poster, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // If HLS source is provided, use hls.js
    if (hlsSrc) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hls.loadSource(hlsSrc);
        hls.attachMedia(videoRef.current);

        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        videoRef.current.src = hlsSrc;
      }
    }
  }, [hlsSrc]);

  if (src || hlsSrc) {
    return (
      <div className={`relative aspect-video rounded-2xl overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          controls
        >
          {src && !hlsSrc && <source src={src} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Placeholder when no video is provided
  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4AF37]/40 animate-pulse">
            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p className="text-gray-400">Video placeholder - Add your video to /public/hero-video.mp4</p>
          <p className="text-gray-500 text-sm mt-2">Or update the VideoPlayer component with your video URL</p>
        </div>
      </div>
    </div>
  );
}
