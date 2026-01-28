"use client";

import { Player } from "@remotion/player";
import { MyReel } from "./MyReel";
import { useMemo } from "react";

interface ReelPreviewProps {
  prompt?: string;
  type?: "lifestyle" | "educational";
}

export const ReelPreview: React.FC<ReelPreviewProps> = ({ prompt, type = "lifestyle" }) => {
  const inputProps = useMemo(() => ({
    prompt: prompt || "",
    type: type || "lifestyle",
  }), [prompt, type]);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
        <Player
          component={MyReel}
          durationInFrames={300}
          compositionWidth={1080}
          compositionHeight={1920}
          fps={30}
          controls
          style={{
            width: "100%",
            height: "100%",
          }}
          inputProps={inputProps}
        />
      </div>
    </div>
  );
};
