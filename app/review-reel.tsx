"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Review = readonly [quote: string, name: string];

const AUTO_PAUSE_MS = 2200;
const MANUAL_PAUSE_MS = 4200;
const SLIDE_DURATION_MS = 850;

export function ReviewReel({ reviews, googleUrl }: { reviews: readonly Review[]; googleUrl: string }) {
  const reelRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(1);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationRef = useRef<number | null>(null);
  const manualScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animatingRef = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const cardStep = useCallback(() => {
    const reel = reelRef.current;
    const card = reel?.querySelector<HTMLElement>("blockquote");
    if (!reel || !card) return 0;
    const gap = Number.parseFloat(getComputedStyle(reel).columnGap || getComputedStyle(reel).gap) || 0;
    return card.offsetWidth + gap;
  }, []);

  const centreOffset = useCallback(() => {
    const reel = reelRef.current;
    const step = cardStep();
    if (!reel || !step) return 0;
    const visibleCards = Math.max(1, Math.round(reel.clientWidth / step));
    return Math.floor(visibleCards / 2);
  }, [cardStep]);

  const animateTo = useCallback((target: number, onComplete?: () => void) => {
    const reel = reelRef.current;
    if (!reel) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const start = reel.scrollLeft;
    const distance = target - start;
    const started = performance.now();
    animatingRef.current = true;

    const frame = (now: number) => {
      const progress = Math.min((now - started) / SLIDE_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      reel.scrollLeft = start + distance * eased;
      if (progress < 1) animationRef.current = requestAnimationFrame(frame);
      else {
        animatingRef.current = false;
        animationRef.current = null;
        onComplete?.();
      }
    };
    animationRef.current = requestAnimationFrame(frame);
  }, []);

  const stepBy = useCallback((direction: -1 | 1, manual = false) => {
    const reel = reelRef.current;
    const step = cardStep();
    if (!reel || !step || reviews.length === 0) return;
    clearTimer();

    if (direction === -1 && indexRef.current === 0) {
      indexRef.current = reviews.length;
      reel.scrollLeft = reviews.length * step;
    }

    const targetIndex = indexRef.current + direction;
    setActiveReview((targetIndex + centreOffset() + reviews.length) % reviews.length);
    animateTo(targetIndex * step, () => {
      if (targetIndex >= reviews.length) {
        indexRef.current = 0;
        reel.scrollLeft = 0;
      } else {
        indexRef.current = Math.max(0, targetIndex);
      }
      timerRef.current = setTimeout(() => stepBy(1), manual ? MANUAL_PAUSE_MS : AUTO_PAUSE_MS);
    });
  }, [animateTo, cardStep, centreOffset, clearTimer, reviews.length]);

  useEffect(() => {
    setActiveReview(centreOffset() % reviews.length);
    timerRef.current = setTimeout(() => stepBy(1), AUTO_PAUSE_MS);
    return () => {
      clearTimer();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (manualScrollTimerRef.current) clearTimeout(manualScrollTimerRef.current);
    };
  }, [centreOffset, clearTimer, reviews.length, stepBy]);

  const handleManualScroll = () => {
    if (animatingRef.current) return;
    clearTimer();
    if (manualScrollTimerRef.current) clearTimeout(manualScrollTimerRef.current);
    manualScrollTimerRef.current = setTimeout(() => {
      const step = cardStep();
      const reel = reelRef.current;
      if (!reel || !step) return;
      indexRef.current = Math.round(reel.scrollLeft / step) % reviews.length;
      setActiveReview((indexRef.current + centreOffset()) % reviews.length);
      timerRef.current = setTimeout(() => stepBy(1), MANUAL_PAUSE_MS);
    }, 220);
  };

  const repeatedReviews = [...reviews, ...reviews];

  return (
    <div className="hv2-review-reel-wrap">
      <div className="hv2-review-controls" aria-label="Review carousel controls">
        <a className="hv2-more-reviews" href={googleUrl} target="_blank" rel="noreferrer">Read more reviews <ArrowRight size={17} /></a>
        <div>
          <button type="button" onClick={() => stepBy(-1, true)} aria-label="Previous review"><ArrowLeft size={19} /></button>
          <button type="button" onClick={() => stepBy(1, true)} aria-label="Next review"><ArrowRight size={19} /></button>
        </div>
      </div>
      <div
        className="hv2-review-reel"
        ref={reelRef}
        tabIndex={0}
        aria-label="Customer reviews. Scroll horizontally or use the arrow buttons."
        onScroll={handleManualScroll}
      >
        {repeatedReviews.map(([quote, name], index) => (
          <blockquote className={index % reviews.length === activeReview ? "is-active" : ""} key={`${name}-${index}`} aria-hidden={index >= reviews.length}>
            <div className="hv2-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p>“{quote}”</p>
            <footer>{name}<span>Google review</span></footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
