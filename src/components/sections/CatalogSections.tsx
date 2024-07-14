import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";

const VIDEO_DATA = [
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
  {
    title: "Lorem ipsum",
    img: "https://random.imagecdn.app/500/150",
  },
];

export function CatalogSections() {
  const [api, setApi] = useState<CarouselApi>();
  const [slidesToScroll, setSlidesToScroll] = useState(1); // Estado inicial basado en pantallas pequeñas

  useEffect(() => {
    const updateSlidesToScroll = () => {
      // Ajusta estos valores según tus puntos de ruptura específicos
      const width = window.innerWidth;
      if (width > 768) {
        // Ejemplo de punto de ruptura para pantallas grandes
        setSlidesToScroll(3);
      } else {
        setSlidesToScroll(1);
      }
    };

    // Llama a la función al montar el componente
    updateSlidesToScroll();

    // Agrega el listener para cambios de tamaño
    window.addEventListener("resize", updateSlidesToScroll);

    // Limpieza al desmontar el componente
    return () => window.removeEventListener("resize", updateSlidesToScroll);
  }, []); // Dependenc

  const count = VIDEO_DATA.length; // Define count based on VIDEO_DATA


  return (
    <section className="py-8 px-4 flex flex-col items-start justify-center gap-8">
      <h2 className="text-3xl font-bold text-center w-full">Lorem ipsum</h2>
      <div className="grid grid-cols-1 w-full gap-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            slidesToScroll: slidesToScroll,
          }}
          className="w-full mx-auto max-w-sm"
        >
          <CarouselContent>
            {VIDEO_DATA.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="h-8 w-8 rounded-full"
            >
              <span className="sr-only">{index + 1}</span>
            </Button>
          ))}
        </Carousel>
      </div>
      <Button className="mt-4 mx-auto">VIEW ALL</Button>
    </section>
  );
}
