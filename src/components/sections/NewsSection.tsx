import "../../css/NewsSection.css";
import { Button } from "../ui/button";

export function NewsSection() {
  return (
    <section className="newsSection gap-8 relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 before:absolute text-center md:text-left before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/50 before:via-transparent md:before:hidden">
      <div className="backdrop-blur-[1px] absolute inset-0 md:backdrop-blur-none"></div>
      <div className="relative w-full px-4 flex flex-col bg-white md:bg-transparent shadow-2xl md:shadow-none border md:border-0 md:py-0 py-4 z-10 gap-4 md:max-w-[28rem] md:ml-8">
        <h2 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold">
          Lorem ipsum dolor sit amet, consectetur.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam libero
          ducimus ipsa optio explicabo esse nulla eos eaque ipsam dolore
          assumenda aliquam, fuga tempore adipisci exercitationem nemo
          asperiores illo incidunt.
        </p>
        <Button size="lg" className="mt-4 md:mr-auto">
          VIEW ALL
        </Button>
      </div>
      <div className="flex-1 w-full hidden md:flex"></div>
    </section>
  );
}
