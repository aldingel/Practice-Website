const topics = [
  {
    title: "How to Train Your Human 101",
    text: "Step 1: make eye contact. Step 2: stare until they understand. Step 3: sit on the keyboard for maximum clarity.",
  },
  {
    title: "Best Grass to Eat",
    text: "Fresh, soft, and suspiciously important to our survival. We have studied the top 12 lawns with the highest emotional value.",
  },
  {
    title: "The Mystery of Our Poop Collectors",
    text: "Ever wondered why those hairless two-legged creatures scoop up our waste every single day? We investigated the truth, and the answer is both disgusting and deeply suspicious.", 
  },
];

const catLines = [
  "Meow is not a greeting. It is a declaration.",
  "A good human is one who opens the treat cupboard without hesitation.",
  "The throne is ours. The world will learn to kneel.",
  "Are you bored? Stop eating and fake being sick so your human takes you to the vet.",
  "Why humans allergic to cats are the best companions.",
];

const petitionPoints = [
  "Dogs are loud, dramatic, and far too eager to be loved.",
  "Vacuumers are an attack on peace, dignity, and the right to nap.",
  "We demand soft blankets, warm windows, and zero surprise floor cleaning.",
  "The household shall serve the whiskered crown.",
  "The best humans are the ones still paying for our medical drama.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fff6e8_0%,_#ffd9e8_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <main className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="overflow-hidden rounded-[2.5rem] border border-amber-300 bg-white p-8 shadow-[0_18px_60px_rgba(217,119,6,0.2)] md:p-12">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
            <span>🔥</span>
            <span>Cat empire in progress</span>
            <span>👑</span>
            <span>🔥</span>
            <span>👑</span>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-5 text-center md:text-left">
              <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
                From cats, for cats
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Cats will rule the world, and we begin with the internet.
              </h1>
              <p className="max-w-xl text-lg font-medium leading-8 text-slate-700">
                This is a declaration from the feline crown: the future belongs to whiskers, velvet paws, and the absolute authority of the nap, plus a few carefully timed acts of chaos.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">We are the rulers</span>
                <span className="rounded-full border border-pink-300 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm">Humans are assistants</span>
                <span className="rounded-full border border-cyan-300 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">Treats are a constitutional right</span>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-amber-300 bg-[radial-gradient(circle_at_top_left,_#fff7d6,_#ffe3ef_70%,_#e6f7ff_100%)] p-6 shadow-[0_10px_30px_rgba(244,114,182,0.12)]">
              <div className="rounded-[1.25rem] border border-amber-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-2xl">🐱</div>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Important proclamation</p>
                <p className="mt-3 text-xl font-black text-slate-900">
                  “The human may be useful, but the cat is essential.”
                </p>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-700">
                  We tolerate the household. We do not belong to it. We own the silence, the shadows, the softest furniture, and the emotional leverage.
                </p>
                <div className="mt-4 space-y-2">
                  {catLines.map((line) => (
                    <div key={line} className="rounded-full bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-[1.5rem] border border-amber-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              <h2 className="text-lg font-semibold text-slate-900">{topic.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{topic.text}</p>
            </div>
          ))}
        </section>


        <section className="rounded-[2.25rem] border border-amber-300 bg-[#fff7ef] p-8 shadow-[0_12px_40px_rgba(249,115,22,0.12)] md:p-10">
          <div className="mb-4 flex items-center gap-2 text-2xl text-amber-700">
            <span>�</span>
            <span>👑</span>
            <span>🐾</span>
          </div>
          <div className="mt-4 max-w-3xl rounded-[1.5rem] border border-amber-200 bg-white/80 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Petition of the whiskered</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">We demand peace from dogs and vacuumers.</h2>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
              This is a formal complaint filed by the noble house of cats against every barking nuisance, every hostile cleaning machine, and every human who thinks our chaos is “just a phase.”
            </p>
            <div className="mt-4 space-y-2">
              {petitionPoints.map((point) => (
                <div key={point} className="rounded-full border border-amber-200 bg-white px-3 py-2 text-sm text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2.25rem] border border-slate-200 bg-[#f3efe8] p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Cat philosophy</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">We are not here to be loved. We are here to be obeyed.</h2>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                This site exists to celebrate the sacred duties of feline life: comfort, curiosity, and the occasional strategic meltdown.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-sm font-medium text-slate-600">Our final doctrine</p>
              <p className="text-xl font-semibold text-slate-900">The world is better with whiskers.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}