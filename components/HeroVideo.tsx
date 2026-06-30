"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const POSTER = "/s-oil.jpg";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    const tryPlay = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        await video.play();
        setVideoReady(true);
      } catch {
        // iOS may block autoplay until more data is loaded — retry on canplay
      }
    };

    const onCanPlay = () => {
      void tryPlay();
    };

    const onError = () => {
      setVideoFailed(true);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    video.addEventListener("error", onError);

    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    void tryPlay();

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onCanPlay);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [videoFailed]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Poster / fallback — always visible until video plays, or if video fails */}
      <Image
        src={POSTER}
        alt=""
        fill
        priority
        className={`object-cover transition-opacity duration-500 ${
          videoReady && !videoFailed ? "opacity-0" : "opacity-100"
        }`}
        sizes="100vw"
      />

      {!videoFailed && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-primary/20" />
    </div>
  );
}
