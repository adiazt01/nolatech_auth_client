import { useEffect, useState } from "react";

export function CountSection() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(new Date().getFullYear() + 1, 0, 1); // 1 de enero del próximo año
    const interval = setInterval(() => {
      const now = new Date();
      const difference = +target - +now;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-8 gap-8 flex flex-col md:flex-row bg-green-900">
      <header className="flex lg:w-3/6 flex-col items-center justify-center">
        <h3 className="text-4xl font-medium text-gray-100">
          Fecha de apertura
        </h3>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-4 gap-y-6 w-full lg:divide-x divide-white/40 ">
        <div className="flex flex-col border-b pb-2 lg:pb-0 lg:border-b-0 border-b-white/40 items-center justify-center">
          <h4 className="text-6xl font-medium text-gray-100">{days}</h4>
          <p className="font-normal text-gray-100/80">Days</p>
        </div>
        <div className="flex border-b pb-2 lg:pb-0 lg:border-b-0 border-b-white/40 flex-col items-center justify-center">
          <h4 className="text-6xl font-medium text-gray-100">{hours}</h4>
          <p className="font-normal text-gray-100/80">Hours</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-6xl font-medium text-gray-100">{minutes}</h4>
          <p className="font-normal text-gray-100/80">Minutes</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-6xl font-medium text-gray-100">{seconds}</h4>
          <p className="font-normal text-gray-100/80">Seconds</p>
        </div>
      </div>
    </section>
  );
}
