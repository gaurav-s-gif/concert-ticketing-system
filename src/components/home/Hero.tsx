const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24">

      {/* Background Blur Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}
        <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          🎵 India's Premium Concert Ticketing Platform
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Experience
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Live Music
          </span>

          <br />

          Like Never Before
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Book tickets for the biggest concerts, music festivals and live
          performances across India. Discover unforgettable experiences with
          your favourite artists.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-purple-700">
            Browse Concerts
          </button>

          <button className="rounded-xl border border-purple-500 px-8 py-4 font-semibold text-purple-300 transition hover:bg-purple-500 hover:text-white">
            Explore Events
          </button>

        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white">500+</h2>
            <p className="mt-2 text-slate-300">Live Concerts</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white">50K+</h2>
            <p className="mt-2 text-slate-300">Tickets Sold</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-4xl font-bold text-white">100+</h2>
            <p className="mt-2 text-slate-300">Artists</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;