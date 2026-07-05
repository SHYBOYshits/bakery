import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeJourney from "@/components/HomeJourney";
import HomeStats from "@/components/HomeStats";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeJourney />
      <HomeStats />
      <HomeCTA />
    </>
  );
}
