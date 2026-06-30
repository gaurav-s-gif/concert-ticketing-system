export default function Newsletter() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-12 text-center">

        <h2 className="text-4xl font-black text-white">
          Stay Updated
        </h2>

        <p className="mt-5 text-slate-300">
          Subscribe to receive updates on concerts,
          artists and exclusive ticket offers.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl bg-slate-900 p-4 text-white outline-none"
          />

          <button className="rounded-xl bg-purple-600 px-8 font-semibold text-white transition hover:bg-purple-700">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}