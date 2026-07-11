"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px 0px" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView && videoRef.current) {
      // Lazy load the video source when in view
      if (!videoRef.current.src) {
        videoRef.current.src = src;
        videoRef.current.load();
      }
    }
  }, [isInView, src]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full flex items-center justify-center bg-black overflow-hidden ${className}`}
    >
      <motion.video
        ref={videoRef}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full h-auto max-h-[100vh] object-contain"
      />
    </div>
  );
}
