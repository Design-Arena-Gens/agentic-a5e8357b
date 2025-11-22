import { ArrowUpRight, BarChart3, Lightbulb, Rocket, Sparkles } from "lucide-react";

export default function Home() {
  const metrics = [
    { label: "Audience Watchlist", value: "128K creators", delta: "+32% QoQ" },
    { label: "Creative Experiments", value: "412 plays", delta: "68% win rate" },
    { label: "Revenue Influence", value: "$2.4M attributed", delta: "+$640K MoM" },
  ];

  const pillars = [
    {
      title: "Cross-Network Pulse",
      description:
        "Unified performance feed for TikTok, Instagram, YouTube, and X with anomaly detection and trend clustering.",
      icon: <BarChart3 className="h-6 w-6 text-sky-400" aria-hidden />,
    },
    {
      title: "AI Playbook Engine",
      description:
        "Generates channel-specific growth moves using content DNA, posting cadence, and audience sentiment data.",
      icon: <Lightbulb className="h-6 w-6 text-sky-400" aria-hidden />,
    },
    {
      title: "Launch Control",
      description:
        "Operationalizes experiments with smart reminders, collaboration notes, and one-click brief exports.",
      icon: <Rocket className="h-6 w-6 text-sky-400" aria-hidden />,
    },
  ];

  const growthPlan = [
    {
      title: "Listen & Benchmark",
      body: "Viralytics aligns all owned handles, competitor benchmarks, and audience clusters in a single control center.",
      punchline: "Know what's spiking before it trends out.",
    },
    {
      title: "Model Creative DNA",
      body: "AI tags every post with format, hook, tone, CTA, retention curves, and sentiment to reveal repeatable levers.",
      punchline: "See the narrative threads that trigger lift.",
    },
    {
      title: "Activate Experiments",
      body: "Auto-generate test briefs, slot them onto ideal publishing windows, and push to your execution stack.",
      punchline: "Tight feedback loops turn insights into wins.",
    },
  ];

  const playbook = [
    {
      channel: "TikTok",
      insight: "Lean into 18-24 FOMO hooks",
      action:
        "Publish 3 short-form stories that remix top-performing creator collabs; run dual caption tests to amplify share rate.",
    },
    {
      channel: "YouTube",
      insight: "Retention cliff at 41 seconds",
      action:
        "Deploy mid-roll curiosity cliffhanger, trim intro to 12 seconds, and layer visual callouts against competitive 60% benchmark.",
    },
    {
      channel: "Instagram",
      insight: "Carousel saves up 54%",
      action:
        "Scale serialized swipe-to-learn format; pair with weekly story AMA to cycle community insights back into next drops.",
    },
  ];

  const faqs = [
    {
      question: "Can Viralytics replace our current social analytics stack?",
      answer:
        "Yes. Viralytics consolidates platform APIs, competitive intelligence, and audience listening in one workspace so teams have a single growth source-of-truth.",
    },
    {
      question: "Do we need to move our content planning into Viralytics?",
      answer:
        "No. Keep your current workflows. Viralytics syncs recommendations into Notion, Asana, Sheets, and Slack so teams stay aligned without extra lift.",
    },
    {
      question: "How fast can we launch?",
      answer:
        "Most teams are live within 7 days. Our onboarding squad connects your channels, imports historical data, and calibrates AI playbooks per growth objective.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(165,243,252,0.12),_transparent_60%)]" />
      <header className="relative border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/20 text-sky-300">
              <Sparkles className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight">Viralytics</p>
              <p className="text-xs text-white/60">
                AI Social Growth Command Center
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-sky-300/70 hover:text-white/90 sm:inline-flex"
            >
              Platform
            </a>
            <a
              href="#playbook"
              className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-sky-300/70 hover:text-white/90 sm:inline-flex"
            >
              Playbook
            </a>
            <a
              href="#cta"
              className="inline-flex rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/30 transition hover:bg-sky-300"
            >
              Request Access
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-24 lg:py-32">
        <section
          id="hero"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-sky-300" />
              Launching Q4 2024
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Transform social analytics into your next viral growth move.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/70">
                Viralytics surfaces the signals that matter, designs the play,
                and equips your team to execute before trends peak. It&apos;s
                the AI strategist sitting on top of your social stack.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
              >
                Book an AI Growth Audit
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-300/70 hover:text-white"
              >
                See how it works
              </a>
            </div>
            <div className="flex flex-wrap gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs font-medium text-sky-300">
                    {metric.delta}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl">
            <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
                  Viralytics Signal View
                </p>
                <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-medium text-sky-200">
                  Real-time
                </span>
              </div>
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                {playbook.map((item) => (
                  <div
                    key={item.channel}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-200/40 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                        {item.channel}
                      </p>
                      <ArrowUpRight className="h-4 w-4 text-sky-200" />
                    </div>
                    <p className="mt-3 text-base font-semibold text-white">
                      {item.insight}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.action}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                Viralytics streams channel intel into prioritised plays so your
                social team can ship with confidence every day.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Platform OS
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Everything you need to turn raw social data into growth strategy.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/70">
              Viralytics blends cross-channel analytics, AI research aides, and
              collaborative workflows so your team moves faster than the
              algorithmic curve.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-sky-200/40 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <div className="inline-flex rounded-xl border border-sky-400/30 bg-sky-400/10 p-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center"
        >
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Strategy Engine
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              The Viralytics growth loop compounds every week.
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Each day Viralytics ingests fresh signals, tunes your growth model,
              and pushes prioritized experiments back into your workflow.
            </p>
            <div className="space-y-8">
              {growthPlan.map((step, index) => (
                <div key={step.title} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="pl-12 text-sm leading-relaxed text-white/70">
                    {step.body}
                  </p>
                  <p className="pl-12 text-sm font-medium text-sky-200">
                    {step.punchline}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-900 p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
                AI Playbook Snapshot
              </p>
              <div className="grid gap-4 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Growth Priority
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Re-ignite Gen Z pipeline for Q4 launch
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Confidence
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-sky-200">
                      92%
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Based on 6 winning experiments
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Time to lift
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      14 days
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      Assuming 3 weekly drops
                    </p>
                  </div>
                </div>
                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Recommended Moves
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                      <p>
                        Deploy 4-part storytelling arc leveraging creator collab
                        micropods to drive cross-platform momentum.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                      <p>
                        Spin up hero live event recap with teaser hooks for
                        TikTok & Instagram Reels to recapture drop-off segments.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                      <p>
                        Retarget warm audiences with UGC mashups tuned to
                        specific persona pain points uncovered in comment mining.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="playbook" className="space-y-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Creator-Ready
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Channel-specific guidance that feels like a strategist in the room.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/70">
              Viralytics doesn&apos;t just summarize dashboards—it tells your team
              exactly what to ship next and why it will hit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {playbook.map((item) => (
              <div
                key={item.channel}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-200/40 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {item.channel}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  {item.insight}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/30 via-slate-900 to-slate-950 p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)]" />
          <div className="relative space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
              Private Beta
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Secure your spot for the Q4 2024 launch cohort.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-100/80">
              We onboard a limited number of creator collectives, media brands,
              and growth teams each quarter to keep the signal tight and the
              playbooks sharp.
            </p>
            <form className="grid gap-4 text-slate-900 md:grid-cols-[1.5fr_1fr_auto]">
              <input
                type="text"
                placeholder="Full name"
                className="h-12 rounded-full border border-white/20 bg-white/90 px-5 text-sm font-medium placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Work email"
                className="h-12 rounded-full border border-white/20 bg-white/90 px-5 text-sm font-medium placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Primary channel"
                className="h-12 rounded-full border border-white/20 bg-white/90 px-5 text-sm font-medium placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-black"
              >
                Request Access
              </button>
            </form>
            <p className="text-xs text-slate-100/60">
              We respond within 48 hours with next steps, onboarding checklist,
              and tailored growth projections.
            </p>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              FAQs
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What teams want to know before making the jump.
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Viralytics is purpose-built for social-first organizations ranging
              from creator collectives to enterprise growth squads.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-base font-semibold text-white">
                  {faq.question}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Viralytics</p>
            <p className="text-xs text-white/60">
              Built by the Viralytics product team · 2024
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">
              Product
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
