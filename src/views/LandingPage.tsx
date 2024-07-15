import { Button } from "../components/ui/button";
import "../css/LandingPage.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { ServiceSection } from "../components/sections/ServiceSection";
import { VideoSection } from "../components/sections/VideoSection";
import { NewsSection } from "../components/sections/NewsSection";
import { CatalogSections } from "../components/sections/CatalogSections";
import { CountSection } from "../components/sections/CountSection";
import { ProductSection } from "../components/sections/ProductSection";
import { JoinUsSection } from "../components/sections/JoinUsSection";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CountSection />
      <ProductSection />
      <ServiceSection />
      <section className="relative md:px-4 pt-24 flex flex-col md:flex-row gap-8 justify-center items-center md:items-end bg-green-700">
        <div className="flex gap-8 lg:gap-8 mb-auto max-w-lg flex-col px-4">
          <h2 className="text-4xl text-white text-center md:text-left md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit <br />
            amet, consectetur.
          </h2>
          <div className="flex flex-col gap-4">
            <Button size="lg" variant="white" className="font-medium">
              Lorem ipsum
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Lorem ipsum
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="old_man.png" alt=""  className="max-w-xs mx-auto md:max-w-sm lg:max-w-lg"/>
        </div>
      </section>
      <VideoSection />
      <JoinUsSection />
      <NewsSection />
      <CatalogSections />
    </>
  );
}
