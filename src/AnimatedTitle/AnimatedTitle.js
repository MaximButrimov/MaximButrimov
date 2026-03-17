import React, { useEffect, useRef } from "react";
import "./AnimatedTitle.css";

/**
 * AnimatedTitle
 * ─────────────
 * Animated heading for a GitHub profile page.
 *
 * Props:
 *  @param {string}  name       — Full name to display (default: "Maxim Butrimov")
 *  @param {string}  greeting   — Emoji + greeting prefix (default: "👋 Hola, soy")
 *  @param {string}  theme      — "dark" | "light"  (default: "dark")
 *  @param {number}  delay      — Extra CSS animation delay in ms (default: 0)
 *  @param {string}  className  — Extra class names for the wrapper
 */
const AnimatedTitle = ({
  name      = "Maxim Butrimov",
  greeting  = "👋 Hola, soy",
  theme     = "dark",
  delay     = 0,
  className = "",
}) => {
  const titleRef = useRef(null);

  /* Allow an external delay override via inline style */
  useEffect(() => {
    if (titleRef.current && delay > 0) {
      titleRef.current.style.animationDelay = `${delay}ms, ${delay}ms, ${delay + 900}ms`;
    }
  }, [delay]);

  const wrapperClass = [
    "animated-title-wrapper",
    theme === "light" ? "light-bg" : "dark-bg",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass} aria-label={`${greeting} ${name}`}>
      <h1 ref={titleRef} className="animated-title">
        {greeting}&nbsp;<span className="name-segment">{name}</span>
      </h1>
    </div>
  );
};

export default AnimatedTitle;
