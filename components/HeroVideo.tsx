"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const POSTER = "/s-oil.jpg";
const VIDEO_SRC = "/hero.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");

      const playPromise = video.play();
      if (playPromise) {
        playPromise
          .then(() => setShowPoster(false))
          .catch(() => {
            // Retry after iOS buffers more data
          });
      }
    };

    const onPlaying = () => setShowPoster(false);
    const onError = () => setShowPoster(true);

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplaythrough", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("error", onError);

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // First user touch can unlock playback on strict iOS modes
    const onTouch = () => tryPlay();
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    tryPlay();

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplaythrough", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {showPoster && (
        <Image
          src={POSTER}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-primary/20" />
    </div>
  );
}
