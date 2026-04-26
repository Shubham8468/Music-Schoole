import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Feature } from "motion";
import FeatureCourse from "@/components/FetureCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/MovingCard";
import UpComingVebinar from "@/components/UpcomingWebinar";
import Special from "@/components/Special";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
     <HeroSection />
     <FeatureCourse/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpComingVebinar/>
     <Special/>
     
    </main>
   
  );
}
  