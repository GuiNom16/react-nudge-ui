import React, { useState, useEffect } from "react";
import "./Nudge.css";

type NudgeProps = {
  children: React.ReactNode;
  hint?: string;
  duration?: number;

  ringColor?: string;
  ringSize?: number;
  ringBorderRadius?: string;

  tooltipBgColor?: string;
  tooltipTextColor?: string;
  tooltipFontSize?: string;
  tooltipPadding?: string;
  tooltipPosition?: "top" | "bottom";
  tooltipFloating?: boolean;

  className?: string;
  tooltipClassName?: string;
  ringClassName?: string;
};

export const Nudge: React.FC<NudgeProps> = ({
  children,
  hint,
  duration = 5000,
  ringColor = "#007bff",
  ringSize = 8,
  ringBorderRadius,
  tooltipBgColor = "#333",
  tooltipTextColor = "#fff",
  tooltipFontSize = "14px",
  tooltipPadding = "6px 12px",
  tooltipPosition = "top",
  tooltipFloating = true,
  className,
  tooltipClassName,
  ringClassName,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const clampedRingSize = Math.min(Math.max(ringSize, 0), 20);

  return (
    <div
      className={`nudge-wrapper ${className ?? ""}`}
      style={{ borderRadius: ringBorderRadius, display: "inline-block" }}
    >
      {visible && (
        <div
          className={`nudge-ring ${ringClassName ?? ""}`}
          style={{
            borderColor: ringColor,
            top: -clampedRingSize,
            left: -clampedRingSize,
            right: -clampedRingSize,
            bottom: -clampedRingSize,
            borderRadius: ringBorderRadius,
          }}
        />
      )}
      {children}
      {visible && hint && (
        <div
          className={`nudge-tooltip ${
            tooltipPosition === "bottom"
              ? "nudge-tooltip-bottom"
              : "nudge-tooltip-top"
          } ${tooltipFloating ? "nudge-float-animation" : ""} ${
            tooltipClassName ?? ""
          }`}
          style={{
            backgroundColor: tooltipBgColor,
            color: tooltipTextColor,
            fontSize: tooltipFontSize,
            padding: tooltipPadding,
          }}
        >
          {hint}
        </div>
      )}
    </div>
  );
};
