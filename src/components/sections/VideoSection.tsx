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
    <section className="py-8 px-4 flex flex-col items-start justify-center gap-8">
      <h2 className="text-3xl font-bold text-center w-full">Lorem ipsum</h2>
      <div className="grid grid-cols-1 w-full gap-8">
        {VIDEO_DATA.map((video, index) => (
          <article key={index} className="flex gap-2 flex-col w-full">
            <div className="flex w-full border border-red-500 flex-col h-72 overflow-hidden relative">
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
      <Button className="mt-4 mx-auto">VIEW ALL</Button>
    </section>
  );
}
