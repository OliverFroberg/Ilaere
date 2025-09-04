"use client"
import {useEffect, useState} from "react";

export function useMediaQuery(query: string) {
  // Always start with a stable value that matches SSR
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Set actual value after mount (avoids hydration mismatch)
    setMatches(mql.matches);

    // Modern API
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
