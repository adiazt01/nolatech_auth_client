import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../components/ui/carousel";
import "../../lib/utils";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const VIDEO_DATA = [
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
  {
    title: "Lorem ipsum",
    img: "orange_juice.png",
  },
];

export function CatalogSections() {
  const [api, setApi] = useState<CarouselApi>();
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const updateSlidesToScroll = () => {
      // Ajusta estos valores según tus puntos de ruptura específicos
      const width = window.innerWidth;
      if (width > 768) {
        setSlidesToScroll(3);
      } else {
        setSlidesToScroll(1);
      }
    };

    // Llama a la función al montar el componente
    updateSlidesToScroll();

    // Agrega el listener para cambios de tamaño
    window.addEventListener("resize", updateSlidesToScroll);

    return () => window.removeEventListener("resize", updateSlidesToScroll);
  }, []);

  return (
    <section className="py-8 bg-teal-700 px-4 flex flex-col items-center min-h-screen justify-center gap-8">
      <h2 className="text-4xl mt-8 text-center max-w-screen-md text-white md:text-5xl lg:text-6xl font-medium">
        Lorem ipsum dolor sit amet, consectetur.
      </h2>
      <div className="grid grid-cols-1 w-full gap-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: slidesToScroll,
            watchDrag: false,
            dragFree: false,
          }}
          className="w-full  max-w-screen-lg mx-auto"
        >
          <CarouselContent className="py-8">
            {VIDEO_DATA.map((_, index) => (
              <CarouselItem
                key={index}
                className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/3 border-0"
              >
                <div>
                  <Card className="h-96 rounded-xl overflow-hidden border-0 shadow-xl">
                    <img
                      src={VIDEO_DATA[index].img}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="hidden md:flex mt-4 flex-row gap-4 items-center justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <label
              key={index}
              className={cn(
                "size-4 border-white border-4 rounded-full cursor-pointer hover:bg-white/50 transition",
                {
                  "bg-white hover:bg-white cursor-default scale-125":
                    selectedPage === index,
                  "bg-transparent": selectedPage !== index,
                }
              )}
            >
              <input
                type="radio"
                name="pagination"
                value={index}
                disabled={selectedPage === index}
                checked={selectedPage === index}
                onChange={() => {
                  setSelectedPage(index);
                  api?.scrollTo(index);
                  console.log(`page ${index} selected`);
                  console.log(`pagina seleccionada ${index}`);
                }}
                className="sr-only"
              />
            </label>
          ))}
        </div>
        <div className="flex md:hidden mt-4 flex-row gap-4 items-center">
          <Button className="w-full" onClick={() => api?.scrollPrev()}>
            Previous
          </Button>
          <Button className="w-full" onClick={() => api?.scrollNext()}>
            Next
          </Button>
        </div>
      </div>
      <Button size="lg" variant="white" className="mx-auto">
        VIEW ALL
      </Button>
    </section>
  );
}
