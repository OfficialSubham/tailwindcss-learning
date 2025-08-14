const Hero = () => {
  return (
    <div className="my-40 flex max-w-2xl flex-col items-center">
      <h1 className="max-w-2xl bg-gradient-to-b from-white to-neutral-700 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mt-8 text-center text-lg text-neutral-600">
        Say goodbye to the outdated financial tools, Every small business owner,
        regardless of background, can now manage their business like a pro.
        Simple, Intuitive. And never boring.
      </p>

      <div className="mt-8 flex w-full max-w-lg gap-4">
        <input
          type="text"
          className="flex-1 rounded-xl border focus:ring-1 border-neutral-600 px-4 text-white placeholder:text-neutral-500 focus:ring-sky-400/50 focus:outline-none transition duration-300"
          placeholder="Enter your Email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-600 px-2 py-1 text-white">
          <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
          Join waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
