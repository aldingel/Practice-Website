const features = [
  {
    title: "Sunny perches",
    text: "A cozy rainbow corner made for lounging and showing off bright feathers.",
    accent: "bg-yellow-400/90 text-yellow-950",
  },
  {
    title: "Colorful songs",
    text: "Every section sings with playful energy, from the hero to the animated bird reel.",
    accent: "bg-pink-500 text-white",
  },
  {
    title: "Feathered fun",
    text: "A cheerful layout with multiple bright sections for a full bird paradise experience.",
    accent: "bg-cyan-500 text-cyan-950",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#fff7b2,_#ff9f1c_40%,_#ff6b6b_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <main className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-pink-400/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-cyan-400/40 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center rounded-full bg-fuchsia-500/20 px-3 py-1 text-sm font-semibold text-fuchsia-700">
                🌈 Bright bird vibes
              </div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                Hello, <span className="text-cyan-600">cockatoos</span>!
              </h1>
              <p className="max-w-xl text-lg text-slate-700">
                This page now feels like a joyful bird paradise with sunny colors, playful sparkle, and a charming animated cockatoo.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-yellow-950">🦜 Sunny wings</span>
                <span className="rounded-full bg-pink-500 px-4 py-2 font-semibold text-white">🎨 Bold colors</span>
                <span className="rounded-full bg-cyan-500 px-4 py-2 font-semibold text-cyan-950">💛 Cockatoo charm</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 p-6 text-white shadow-lg">
              <div className="relative">
                <svg viewBox="0 0 320 220" className="mx-auto h-64 w-full max-w-md drop-shadow-2xl">
                  <ellipse cx="160" cy="182" rx="92" ry="26" fill="#fff7e8" opacity="0.65" />
                  <circle cx="166" cy="118" r="56" fill="#fffdf9" />
                  <circle cx="150" cy="112" r="7" fill="#2f2f2f" />
                  <circle cx="184" cy="112" r="7" fill="#2f2f2f" />
                  <path d="M120 92 C108 58, 90 46, 62 44 C90 76, 96 90, 120 92 Z" fill="#ff7f50" />
                  <path d="M144 76 C164 44, 200 44, 218 76" stroke="#4f46e5" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M140 86 C156 70, 186 70, 206 86" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M120 146 C135 156, 152 160, 168 160" stroke="#ff8fab" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M122 128 C134 134, 144 138, 152 142" stroke="#ff8fab" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M148 140 C168 150, 188 150, 208 136" stroke="#f7a1c4" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M126 118 C118 136, 116 152, 122 166" stroke="#4f46e5" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M194 118 C202 132, 208 148, 204 166" stroke="#4f46e5" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M142 92 C148 82, 158 76, 170 76" stroke="#f7a1c4" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path d="M150 158 C168 164, 186 164, 204 152" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <p className="mt-4 text-center text-lg font-semibold">Cockatoo bird</p>
              <p className="text-center text-sm opacity-90">A simple, friendly cockatoo illustration.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.25rem] border border-white/70 bg-white/80 p-5 shadow-lg backdrop-blur">
              <div className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${feature.accent}`}>
                {feature.title}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{feature.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-pink-50 p-8 shadow-xl md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Bird paradise</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">A full rainbow experience, from top to bottom.</h2>
              <p className="mt-3 text-lg text-slate-700">
                This page now includes a cheerful hero, colorful feature cards, and a looping animated cockatoo section for a lively finish.
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-white/80 px-5 py-4 shadow-md">
              <p className="text-sm font-semibold text-slate-700">Next stop:</p>
              <p className="text-2xl font-black text-fuchsia-600">More feathers, more fun</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}