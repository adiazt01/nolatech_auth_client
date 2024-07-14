export function ProductSection() {
  return (
    <section className="py-8 px-4 flex flex-col min-h-screen justify-center items-center">
      <div className="flex w-full gap-8 flex-col max-w-screen-lg md:flex-row">
        <div className="flex text-center flex-col lg:max-w-lg md:max-w-md gap-8 md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor
          </h2>
          <p className="text-lg leading-6  tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            libero ducimus ipsa optio explicabo esse nulla eos eaque ipsam
            dolore assumenda aliquam, fuga tempore adipisci exercitationem nemo
            asperiores illo incidunt. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.<br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            libero ducimus ipsa optio explicabo esse nulla eos eaque ipsam
            dolore assumenda aliquam, fuga tempore adipisci exercitationem nemo
          </p>

        </div>
        <div className="w-full relative h-80 md:h-72 lg:h-96">
          <img
            src="orange_juice.png"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
