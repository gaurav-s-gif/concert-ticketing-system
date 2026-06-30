const testimonials = [
  {
    name: "Rahul Sharma",
    text: "The booking process was incredibly smooth. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    text: "Beautiful interface and very easy to book tickets.",
  },
  {
    name: "Aditya Singh",
    text: "Fast payment, verified tickets and amazing experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-purple-600/20 px-4 py-2 text-purple-300">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            What Our Users Say
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >

              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="mt-5 leading-8 text-slate-300">
                "{testimonial.text}"
              </p>

              <h4 className="mt-8 font-bold text-white">
                {testimonial.name}
              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}