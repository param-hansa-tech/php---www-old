"use client";

import { useState, useEffect, useRef, useMemo, FC } from "react";


import { initCharsAnimation } from "./BigText.utils";
// import type { BigTextProps } from "./BigText.types";
import styles from "./BigText.module.scss";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BigText: FC<any> = ({
  text,
  className,
  isStatic,
  animationDelay,
  animateIntoView = true,
  snapOnAnimationEnd,
  intersectionThreshold,
  intersectionRootMargin,
  withoutSrText,
  srText,
  animate = true,
}) => {

  const [animationsCleanUp, setAnimationsCleanUp] = useState(false);
  const chars = useMemo(() => text.split(""), [text]);
  const containerRef = useRef<HTMLSpanElement>(null);

  const staticReset = () => {
    setAnimationsCleanUp(true);
  };

  useEffect(() => {
    if (!isStatic && animate) {
      initCharsAnimation({
        containerRef,
        staticReset,
        animationDelay,
        animateIntoView,
        snapOnAnimationEnd,
        intersectionThreshold,
        intersectionRootMargin,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(animate === false) {
    return text;
  }

  return (
    <span ref={containerRef} className={cn(styles.bigText, className)}>
      {isStatic ? (
        chars.map((char: string, index: number) => <span key={index}>{char}</span>)
      ) : (
        <>
          <span className={styles.srText}>
            {!withoutSrText && (srText || text)}
          </span>

          {chars.map((char: string, index: number) => (
            <span
              className={cn({ [styles.passive]: !animationsCleanUp })}
              key={index}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}

          {!animationsCleanUp && (
            <span className={styles.animatedChars} aria-hidden="true" />
          )}
        </>
      )}
    </span>
  );
};
