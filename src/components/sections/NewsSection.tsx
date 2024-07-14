import "../../css/NewsSection.css";
import { Button } from "../ui/button";

export function NewsSection() {
  return (
    <section className="newsSection relative min-h-screen w-full flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-black/50 before:via-transparent">
      <div className="backdrop-blur-[1px] absolute inset-0"></div>
    
      <div className="relative flex flex-col bg-white shadow-2xl border py-4 z-10 gap-2 text-center">
        <h2 className="text-3xl font-bold text-center">Lorem ipsum</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam libero
          ducimus ipsa optio explicabo esse nulla eos eaque ipsam dolore
          assumenda aliquam, fuga tempore adipisci exercitationem nemo
          asperiores illo incidunt.
        </p>
        <Button className="mt-4 mx-auto">
            VIEW ALL
        </Button>
      </div>
    </section>
  );
}
