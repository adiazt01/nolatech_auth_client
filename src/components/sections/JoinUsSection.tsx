import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../ui/textarea";

export function JoinUsSection() {
  return (
    <section className="relative px-8 lg:px-12 flex flex-col pt-8 md:pt-0 md:flex-row-reverse  gap-4 md:gap-12 justify-between items-center md:items-end bg-gradient-to-b  from-zinc-800/90 to-zinc-900">
      <div className="flex md:max-w-lg md:mt-16 lg:mt-4 md:mb-auto w-full pb-8 gap-8 flex-col">
        <div className="flex flex-col text-center md:text-left gap-4 w-full ">
          <h2 className="text-3xl text-white mt-8 md:text-5xl lg:text-6xl font-bold">
            JOIN US.
          </h2>
          <p className="text-gray-100/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <form className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="First Name"
              className="col-span-1"
            />
            <Input type="text" placeholder="Last Name" className="col-span-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Phone Number"
              className="col-span-1"
            />
            <Input type="text" placeholder="Email" className="col-span-1" />
          </div>
          <Input type="text" placeholder="Department" />
          <Textarea placeholder="Message" />
          <div className="mx-auto md:mx-0">
            <Button size="lg" className="font-medium mt-4">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="flex w-full items-end flex-col">
        <img src="join_us.png" className="w-full mx-auto max-w-[20rem] md:max-w-md h-full" />
      </div>
    </section>
  );
}
