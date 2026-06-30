import { motion } from "framer-motion";
import { CalendarDays, Music2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24">

      {/* Background Effects */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-700/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/10 px-5 py-2 text-sm font-medium text-purple-300">

            <CalendarDays size={16} />

            India's Premium Concert Platform

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

            Experience

            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">

              Live Music

            </span>

            Like Never Before

          </h1>

          {/* Subtitle */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

            Book tickets for India's biggest concerts,
            music festivals and unforgettable live performances.

            Fast booking, secure payments and verified tickets.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/30">

              🎟 Browse Concerts

            </button>

            <button className="rounded-xl border border-purple-500 px-8 py-4 font-semibold text-purple-300 transition duration-300 hover:bg-purple-600 hover:text-white">

              Learn More

            </button>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:flex justify-center"
        >
          {/* Glow */}

          <div className="absolute h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />

          {/* Main Card */}

          <div className="relative w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

            {/* Poster */}

            <div className="h-[420px] bg-gradient-to-br from-purple-700 via-fuchsia-600 to-indigo-700" />

            {/* Info */}

            <div className="space-y-3 p-8">

              <div className="inline-flex rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">

                Featured Event

              </div>

              <h2 className="text-3xl font-bold text-white">

                Coldplay

              </h2>

              <p className="text-slate-400">

                Music Of The Spheres World Tour

              </p>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-800 p-5">

                <div>

                  <p className="text-sm text-slate-400">

                    Starting From

                  </p>

                  <h3 className="text-2xl font-bold text-green-400">

                    ₹1499

                  </h3>

                </div>

                <Music2
                  size={42}
                  className="text-purple-400"
                />

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}