import { Button } from "../ui/button";

const SERVICE_DATA = [
  {
    title: "Lorem ipsum",
    img: "services_1.png",
  },
  {
    title: "Lorem ipsum",
    img: "services_2.png",
  },
  {
    title: "Lorem ipsum",
    img: "services_3.png",
  },
];

export function ServiceSection() {
  return (
    <section className="py-8 px-4 flex flex-col min-h-screen gap-8 justify-center items-center bg-slate-100">
      <header className="flex flex-col text-center lg:max-w-screen-md gap-2">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Lorem ipsum dolor
        </h2>
        <p className="text-center mt-4 text-lg leading-6 tracking-tight max-w-screen-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam libero
          ducimus ipsa optio explicabo esse nulla eos eaque ipsam dolore
          assumenda aliquam, fuga tempore adipisci exercitationem nemo
          asperiores illo incidunt.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:max-w-screen-lg lg:grid-cols-3 px-4 gap-6 w-full">
        {SERVICE_DATA.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-5xl hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-80 md:h-auto md:rounded-none md:rounded-s-lg"
              src={service.img}
              alt=""
            />
            <div className="flex flex-col bg-primary w-full py-2.5 items-center">
              <p className="text-white/90 text-xl font-medium dark:text-gray-400">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button size="lg" className="mt-4">
        VIEW MORE
      </Button>
    </section>
  );
}
