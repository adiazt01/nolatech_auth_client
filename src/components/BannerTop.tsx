import { CirclePlay, Radio } from "lucide-react";

export function BannerTop() {
  return (
    <div className="flex w-full justify-center gap-4 h-[3.2rem] bg-primary flex-row lg:text-2xl">
      <div className="h-full flex justify-center flex-row gap-2 px-2 font-semibold items-center bg-red-500 -tracking-tighter">
        <p>LIVE</p>
        <Radio />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="h-full flex flex-row gap-2 px-2 font-semibold items-center bg-green-700 lg:text-xl">
        <p>JOIN NOW!</p>
        <CirclePlay />
      </div>
    </div>
  );
}
