"use client";
import { useState } from "react";

/**
 * Portrait component — Displays your profile picture in the hero section.
 *
 * How it works:
 *  1. Tries to load the image at /dp.jpeg (which maps to public/dp.jpeg).
 *  2. If the image fails to load (e.g. file missing), it falls back to
 *     showing your initials ("AS") inside a styled placeholder div.
 *
 * To change your photo:
 *  → Replace public/dp.jpeg with your new image (keep the same filename).
 */
export default function Portrait() {
  // Track whether the image failed to load
  const [failed, setFailed] = useState(false);

  // Fallback: show initials if the image can't be loaded
  if (failed) {
    return (
      <div className="portrait-fallback" role="img" aria-label="Portrait placeholder">
        <span>AS</span>
      </div>
    );
  }

  // Primary: render the actual profile photo
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="portrait-img" src="/dp.jpeg" alt="Achintha Sewmina" onError={() => setFailed(true)} />;
}
