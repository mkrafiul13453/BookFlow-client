import BannerSlider from "@/components/Banner";
import About from "@/components/About";
import CommunityStats from "@/components/CommunityStats";
import FAQ from "@/components/FAQ";
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
      <About />
      <Testimonial />
      <FAQ />
    </div>
  );
}
