import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";

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
];

export function VideoSection() {
  return (
    <section className="py-8 px-4 flex flex-col items-center justify-center gap-8">
      <h2 className="text-3xl mt-8 text-center mx-auto md:text-5xl lg:text-6xl font-bold">
          Lorem ipsum dolor
        </h2>
      <div className="grid max-w-screen-lg grid-cols-1 md:grid-cols-3 justify-center items-center align-middle w-full gap-4">
        {VIDEO_DATA.map((video, index) => (
          <article key={index} className="flex gap-2 flex-col w-full">
            <div className="flex w-full border border-red-500 flex-col h-52 overflow-hidden relative">
              <img src={video.img} className="object-cover w-full h-full" />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white -translate-y-1/2">
                <PlayCircle size={48} />
              </button>
            </div>
            <p className="text-center text-lg font-medium text-gray-800">
              {video.title}
            </p>
          </article>
        ))}
      </div>
      <Button size="lg" className="mt-4 mx-auto">VIEW ALL</Button>
    </section>
  );
}
