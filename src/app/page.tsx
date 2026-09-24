import { HomeShell } from "@/components/HomeShell";

export default function Home() {
  return (
    <HomeShell
      variant="v2"
      defaultMode="dark"
      videoSrc="/assets/images/overlay-2.mp4"
      bodyClass="counter-scroll"
    />
  );
}
