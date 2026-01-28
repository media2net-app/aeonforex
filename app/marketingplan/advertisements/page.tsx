"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Megaphone, Play, Download, Calendar, Eye, Video as VideoIcon } from "lucide-react";

interface Advertisement {
  id: string;
  name: string;
  type: "lifestyle" | "educational";
  videos: string[];
  photos: string[];
  resultVideo: string;
  createdAt: string;
  status: "active" | "draft" | "archived";
  views?: number;
}

export default function AdvertisementsPage() {
  const [selectedAd, setSelectedAd] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Mock data - in production this would come from an API or file system
  const advertisements: Advertisement[] = [
    {
      id: "1",
      name: "Advertentie 1",
      type: "lifestyle",
      videos: [
        "video-1.mp4",
        "video-2.mp4",
        "video-3.mp4",
        "video-4.mp4",
        "video-5.mp4",
      ],
      photos: [
        "photo-1.png",
        "photo-2.png",
        "photo-3.png",
        "photo-4.png",
        "photo-5.png",
      ],
      resultVideo: "0128.mov",
      createdAt: "2024-01-15",
      status: "active",
      views: 1250,
    },
  ];

  const getVideoPath = (adId: string, videoName: string) => {
    return `/Ads/Advertentie ${adId}/Video/${videoName}`;
  };

  const getPhotoPath = (adId: string, photoName: string) => {
    return `/Ads/Advertentie ${adId}/Photo/${photoName}`;
  };

  const getResultVideoPath = (adId: string, videoName: string) => {
    return `/Ads/Advertentie ${adId}/Result/${videoName}`;
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <section className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000000] to-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A961] bg-clip-text text-transparent">
                  Advertenties Overzicht
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              Beheer en bekijk al je advertentie video's
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Advertisements List */}
            <div className="lg:col-span-1 space-y-4">
              {advertisements.map((ad) => (
                <motion.div
                  key={ad.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => {
                    setSelectedAd(ad.id);
                    setSelectedVideo(null);
                  }}
                  className={`
                    bg-gray-900/40 backdrop-blur-sm p-4 rounded-xl border cursor-pointer transition-all
                    ${selectedAd === ad.id 
                      ? 'border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/10 to-[#C9A961]/5' 
                      : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                    }
                  `}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{ad.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{ad.createdAt}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ad.status === "active" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : ad.status === "draft"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}>
                      {ad.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <VideoIcon className="w-4 h-4" />
                      <span>{ad.videos.length} video's</span>
                    </div>
                    {ad.views && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span>{ad.views.toLocaleString()} views</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Content Preview */}
            <div className="lg:col-span-2">
              {selectedAd ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Result Video */}
                  <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {advertisements.find(a => a.id === selectedAd)?.name}
                      </h2>
                      <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Result Video</h3>
                    </div>
                    <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
                      <video
                        src={getResultVideoPath(selectedAd, advertisements.find(a => a.id === selectedAd)?.resultVideo || "")}
                        controls
                        className="w-full h-full object-contain"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Photos and Videos Grid */}
                  <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Foto's en Video's</h3>
                    
                    {/* Photos */}
                    {advertisements.find(a => a.id === selectedAd)?.photos && advertisements.find(a => a.id === selectedAd)!.photos.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400 mb-3">Foto's</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {advertisements.find(a => a.id === selectedAd)?.photos.map((photo, index) => (
                            <div
                              key={index}
                              className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                            >
                              <img
                                src={getPhotoPath(selectedAd, photo)}
                                alt={`Photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Videos */}
                    {advertisements.find(a => a.id === selectedAd)?.videos && advertisements.find(a => a.id === selectedAd)!.videos.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-3">Video's</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {advertisements.find(a => a.id === selectedAd)?.videos.map((video, index) => (
                            <div
                              key={index}
                              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700"
                            >
                              <div className="p-3 border-b border-gray-700">
                                <h5 className="text-sm font-medium text-white">Video {index + 1}</h5>
                              </div>
                              <div className="aspect-[9/16] bg-black">
                                <video
                                  src={getVideoPath(selectedAd, video)}
                                  controls
                                  className="w-full h-full object-contain"
                                  playsInline
                                  preload="metadata"
                                >
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <div className="p-3 flex justify-end">
                                <a
                                  href={getVideoPath(selectedAd, video)}
                                  download
                                  className="flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/30 transition text-sm"
                                >
                                  <Download className="w-4 h-4" />
                                  <span>Download</span>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-12 rounded-xl border border-[#D4AF37]/20 text-center"
                >
                  <VideoIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Selecteer een advertentie om de video's te bekijken</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
