export default function Stage() {
  return (
    <div className="mb-16 flex justify-center">
      <div className="relative w-full max-w-3xl">

        {/* Glow */}
        <div className="absolute inset-x-10 top-0 h-12 rounded-full bg-purple-500/20 blur-3xl"></div>

        {/* Stage */}
        <div className="rounded-b-[100px] border border-purple-400/40 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 py-5 text-center shadow-[0_0_40px_rgba(168,85,247,0.35)]">

          <h2 className="text-lg font-bold tracking-[0.5em] text-white">
            STAGE
          </h2>

        </div>

      </div>
    </div>
  );
}