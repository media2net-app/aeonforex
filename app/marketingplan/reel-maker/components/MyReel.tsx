// Generated Remotion component based on: "AI character drinkt koffie op terras"
// Reel Type: lifestyle

import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

interface MyReelProps {
  prompt?: string;
  type?: "lifestyle" | "educational";
}

export const MyReel: React.FC<MyReelProps> = ({ prompt, type = "lifestyle" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [0, 30],
    [0.8, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(to right, #FFD700, #D4AF37, #C9A961)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 20,
          }}
        >
          Lifestyle Reel
        </h1>
        {prompt && (
          <p
            style={{
              fontSize: 32,
              color: "#ffffff",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            {prompt}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};
