"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const TRACK = {
  url: "https://pub-11d219e6dc704894b9f604321ae1fb79.r2.dev/Miriam/Miriam%20-%20Caminho%20e%20o%20Guia.MP3",
  title: "Caminho e o Guia",
  artist: "Ana Heloysa & Daniel Alves",
};

const STORAGE_KEY = "miriam-music-muted";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Tenta autoplay; se o browser bloquear, espera primeira interação
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    // Respeita preferência salva do usuário
    const userMuted = localStorage.getItem(STORAGE_KEY) === "true";
    if (userMuted) return;

    let cleanup: (() => void) | null = null;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setNeedsInteraction(true);
        const onInteract = async () => {
          try {
            await audio.play();
            setPlaying(true);
            setNeedsInteraction(false);
          } catch {}
        };
        const events = ["click", "touchstart", "keydown", "scroll"];
        events.forEach((e) =>
          window.addEventListener(e, onInteract, { once: true, passive: true }),
        );
        cleanup = () => {
          events.forEach((e) => window.removeEventListener(e, onInteract));
        };
      }
    };

    tryPlay();
    return () => cleanup?.();
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setNeedsInteraction(false);
        localStorage.setItem(STORAGE_KEY, "false");
      } catch {}
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK.url}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <motion.div
        className="fixed bottom-5 left-5 z-50 flex items-center"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", damping: 16 }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <button
          onClick={toggle}
          onFocus={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
          aria-label={playing ? "Pausar música" : "Tocar música"}
          aria-pressed={playing}
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-ochre text-ink shadow-[0_5px_0_#a6371a,0_12px_24px_-6px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_7px_0_#a6371a,0_14px_28px_-6px_rgba(0,0,0,0.5)]"
        >
          {/* Pulse — quando precisa de interação */}
          {needsInteraction && (
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-ochre opacity-60" />
          )}

          {playing ? <SoundWaves /> : <MusicNote />}
        </button>

        <AnimatePresence>
          {(expanded || needsInteraction) && (
            <motion.div
              initial={{ opacity: 0, x: -8, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -8, width: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="ml-3 overflow-hidden whitespace-nowrap"
            >
              <div className="paper-grain border-2 border-ink bg-kraft px-4 py-2 shadow-[3px_3px_0_#a6371a]">
                <p className="font-[var(--font-display)] text-[11px] uppercase tracking-[0.12em] text-terracota-dk">
                  ♪ {needsInteraction ? "Toque para ouvir" : TRACK.title}
                </p>
                {!needsInteraction && (
                  <p className="font-[var(--font-serif)] text-xs italic text-ink-soft">
                    {TRACK.artist}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

/* ===== Ícones ===== */

function MusicNote() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 17V5l11-2v12"
        opacity="0.2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17V5l11-2v12"
      />
      <ellipse cx="6" cy="17" rx="3" ry="2.4" fill="currentColor" />
      <ellipse cx="17" cy="15" rx="3" ry="2.4" fill="currentColor" />
      {/* slash quando pausado */}
      <line
        x1="3"
        y1="3"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function SoundWaves() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <g fill="currentColor">
        <motion.rect
          x="4"
          y="9"
          width="2.4"
          height="6"
          rx="1.2"
          animate={{ scaleY: [0.6, 1.2, 0.6], y: [3, 0, 3] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0.5, originX: 0.5 }}
        />
        <motion.rect
          x="9.4"
          y="5"
          width="2.4"
          height="14"
          rx="1.2"
          animate={{ scaleY: [1, 0.5, 1], y: [0, 4, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
          }}
          style={{ originY: 0.5, originX: 0.5 }}
        />
        <motion.rect
          x="14.8"
          y="7"
          width="2.4"
          height="10"
          rx="1.2"
          animate={{ scaleY: [0.8, 1.3, 0.8], y: [1, -2, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{ originY: 0.5, originX: 0.5 }}
        />
      </g>
    </svg>
  );
}
