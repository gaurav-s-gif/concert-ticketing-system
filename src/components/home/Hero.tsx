const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 px-6">
      <div className="max-w-5xl text-center">

        <p className="text-purple-400 font-semibold tracking-widest uppercase">
          Live Music • Festivals • Events
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Book Your Next
          <span className="block text-purple-500">
            Concert Experience
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Discover the biggest concerts, reserve the best seats,
          and enjoy unforgettable live performances from your
          favorite artists.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition">
            Browse Concerts
          </button>

          <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl transition">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;