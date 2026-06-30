import {
  ShieldCheck,
  Ticket,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: <Ticket size={38} />,
    title: "Verified Tickets",
    description:
      "Every ticket is verified to ensure a safe and authentic concert experience.",
  },
  {
    icon: <CreditCard size={38} />,
    title: "Secure Payments",
    description:
      "Fast and secure payments protected with modern authentication and encryption.",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Instant Booking",
    description:
      "Reserve your seats in seconds and receive instant booking confirmation.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-purple-600/20 px-4 py-2 text-sm text-purple-300">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Why ConcertHub?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Designed to make booking concert tickets effortless,
            secure and enjoyable.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10"
            >

              <div className="inline-flex rounded-2xl bg-purple-600/20 p-4 text-purple-400">

                {feature.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}