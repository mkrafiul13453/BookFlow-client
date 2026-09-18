import BannerSlider from "@/components/Banner";
import CommunityStats from "@/components/CommunityStats";
import Featured from "@/components/Featured";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import { Feature } from "framer-motion";

export default function Home() {
  return (
    <div>
      <BannerSlider/>
      <Featured />
      <Features />
      <CommunityStats />
      <Testimonial />
    </div>
  );
}
