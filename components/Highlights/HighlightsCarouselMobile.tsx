"use client";

import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import HighlightCard from "./HighlightCard";
import { HighlightEntry } from "@/lib/types";

interface HighlightsCarouselMobileProps {
  items: HighlightEntry[];
}

export default function HighlightsCarouselMobile({ items }: HighlightsCarouselMobileProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemWidthRef = useRef(0);
  const isJumpingRef = useRef(false);

  // Clone item terakhir di depan & item pertama di belakang -> efek circular
  const loopedItems = [items[items.length - 1], ...items, items[0]];
  const REAL_START_INDEX = 1;
  const REAL_END_INDEX = items.length; // index item asli terakhir di array loopedItems

  const measureItemWidth = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;
    const firstChild = scroller.children[0] as HTMLElement | undefined;
    if (!firstChild) return 0;
    const gap = parseFloat(getComputedStyle(scroller).columnGap || "0");
    return firstChild.offsetWidth + gap;
  }, []);

  // Posisikan carousel di item pertama "asli" saat mount, tanpa animasi
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const width = measureItemWidth();
    itemWidthRef.current = width;
    scroller.scrollLeft = width * REAL_START_INDEX;
  }, [measureItemWidth]);

  // Deteksi saat carousel mencapai clone, lalu "teleport" diam-diam ke posisi asli
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let debounceTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (isJumpingRef.current) return;
        const width = itemWidthRef.current || measureItemWidth();
        if (!width) return;

        const currentIndex = Math.round(scroller.scrollLeft / width);

        if (currentIndex <= 0) {
          // Swipe kiri dari item pertama -> lompat diam-diam ke item terakhir asli
          isJumpingRef.current = true;
          scroller.scrollLeft = width * REAL_END_INDEX;
          requestAnimationFrame(() => (isJumpingRef.current = false));
        } else if (currentIndex >= REAL_END_INDEX + 1) {
          // Swipe kanan dari item terakhir -> lompat diam-diam ke item pertama asli
          isJumpingRef.current = true;
          scroller.scrollLeft = width * REAL_START_INDEX;
          requestAnimationFrame(() => (isJumpingRef.current = false));
        }
      }, 100);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimer);
    };
  }, [measureItemWidth]);

  // Jaga posisi tetap benar saat resize / rotate layar
  useEffect(() => {
    const handleResize = () => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const width = measureItemWidth();
      if (!width) return;
      const approxIndex = Math.round(scroller.scrollLeft / itemWidthRef.current || width);
      itemWidthRef.current = width;
      scroller.scrollLeft = width * Math.min(Math.max(approxIndex, REAL_START_INDEX), REAL_END_INDEX);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureItemWidth]);

  return (
    <div
      ref={scrollerRef}
      className="
        flex sm:hidden
        gap-5
        overflow-x-auto
        snap-x snap-mandatory
        -mx-6 px-6
        scrollbar-hide
        items-stretch
      "
    >
      {loopedItems.map((entry, i) => (
        <div key={`${entry.id}-${i}`} className="snap-start shrink-0 w-[80%] xs:w-[70%] flex">
          <HighlightCard entry={entry} index={i} />
        </div>
      ))}
    </div>
  );
}