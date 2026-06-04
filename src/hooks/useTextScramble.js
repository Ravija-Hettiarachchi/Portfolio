import { useState, useEffect, useRef } from "react";

const GLYPHS = "01XZ$_%#@!<>[]-+/\\*=";

/**
 * Custom hook to animate text content by scrambling it with glyphs and gradually resolving it.
 * Perfect for a cybersecurity-themed interface.
 */
export default function useTextScramble(text, options = {}) {
  const {
    glyphs = GLYPHS,
    speed = 30,
    delay = 200,
    resolveSpeed = 1,
  } = options;

  const [displayText, setDisplayText] = useState("");
  const isAnimatedRef = useRef(false);

  useEffect(() => {
    // Only scramble once
    if (isAnimatedRef.current) {
      setDisplayText(text);
      return;
    }

    let timer;
    const runScramble = () => {
      let frame = 0;
      const targetLength = text.length;
      const current = [];

      // Pre-fill spaces and initial random glyphs
      for (let i = 0; i < targetLength; i++) {
        current[i] = text[i] === " " ? " " : glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      setDisplayText(current.join(""));

      const tick = () => {
        let resolvedCount = 0;
        const nextState = [...current];

        for (let i = 0; i < targetLength; i++) {
          if (text[i] === " ") {
            nextState[i] = " ";
            resolvedCount++;
            continue;
          }

          // Progressively resolve characters from left to right
          const progressIndex = frame * resolveSpeed;
          if (i < progressIndex) {
            nextState[i] = text[i];
            resolvedCount++;
          } else {
            // Keep scrambling the remaining characters
            nextState[i] = glyphs[Math.floor(Math.random() * glyphs.length)];
          }
        }

        setDisplayText(nextState.join(""));

        if (resolvedCount < targetLength) {
          frame++;
          timer = setTimeout(tick, speed);
        } else {
          isAnimatedRef.current = true;
        }
      };

      timer = setTimeout(tick, delay);
    };

    runScramble();

    return () => clearTimeout(timer);
  }, [text, glyphs, speed, delay, resolveSpeed]);

  return displayText;
}
