import { Composition } from "remotion";
import { MyReel } from "./MyReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyReel"
        component={MyReel}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          prompt: "AI character drinkt koffie op terras",
          type: "lifestyle" as const,
        }}
      />
    </>
  );
};
