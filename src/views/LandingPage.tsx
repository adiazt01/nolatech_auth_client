import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
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

export function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CountSection />
      <ProductSection />
      <ServiceSection />
      <section className="relative md:px-4 pt-8 flex flex-col md:flex-row min-h-screen gap-8 justify-center items-center md:items-end bg-green-600">
        <div className="flex gap-8 lg:gap-16 mb-auto md:mt-20 max-w-lg flex-col px-4">
          <h2 className="text-4xl text-white text-center md:text-left md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit <br />
            amet, consectetur.
          </h2>
          <div className="flex flex-col gap-4">
            <Button size="lg" variant="white" className="font-medium">
              Lorem ipsum
            </Button>
            <Button  size="lg" variant="outline" className="font-medium">
              Lorem ipsum
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <img src="old_man.png" alt="" />
        </div>
      </section>
      <VideoSection />
      <section className="relative pt-8 px-8 flex flex-col min-h-screen gap-8 justify-between items-center bg-gradient-to-b from-zinc-800/90 to-zinc-900">
        <div className="flex gap-8 flex-col">
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium text-center text-gray-100">
              JOIN US.
            </h2>
            <p className="text-center text-gray-100/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <Input
                type="text"
                placeholder="First Name"
                className="col-span-1"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="col-span-1"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Input
                type="text"
                placeholder="Phone Number"
                className="col-span-1"
              />
              <Input type="text" placeholder="Email" className="col-span-1" />
            </div>
            <Input type="text" placeholder="Department" />
            <Textarea placeholder="Message" />
            <Button className="font-medium mt-4">Submit</Button>
          </form>
        </div>
        <div className="flex flex-col gap-4">
          <img src="join_us.png" className="w-full h-full" />
        </div>
      </section>
      <NewsSection />
      <CatalogSections />
    </>
  );
}
