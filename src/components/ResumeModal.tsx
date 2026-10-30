
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import {  } from './fx';

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3">
        <p className="truncate font-display text-2xl tracking-wide text-bone">
          My Resume
        </p>

        <div className="flex items-center gap-2">
          <a
  href="/Prasanth_Resume_Python_Backend_Developer%20(ori)%20(1)%20(1).pdf"
  download="Prasanth_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink"
>
  Download
</a>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="gutter flex-1 pb-6">
        <iframe
          title="Prasanth Resume PDF"
          src={`${profile.resumePdf}#view=FitH`}
          className="h-full w-full rounded-xl bg-white"
        />
      </div>
    </motion.div>
  );
}
