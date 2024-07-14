import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <main className="flex py-8 flex-col items-center justify-center min-h-screen backgroundImage relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/90 before:to-black/50 before:via-transparent">
      <section className="flex mt-4 flex-col lg:flex-row w-full z-10">
        <div className="lg:w-4/6"></div>
        <div className="flex w-full flex-col items-center lg:items-start justify-start text-center md:text-left text-4xl md:text-5xl xl:text-6xl scroll-m-20 font-bold text-white gap-3 ">
          <p>LOREM IPSUM</p>
          <p className="bg-white py-0.5 lg:pb-1 text-black w-full sm:w-auto px-2">
            LOREM IPSUM DOLOR
          </p>
          <p>LOREM IPSUM</p>
          <Button size="lg" className="mt-8 text-xl">WHAT IS NEXT</Button>
        </div>
      </section>
    </main>
  );
}
