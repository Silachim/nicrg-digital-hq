import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { research } from "@/content";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-32 text-white">

      {/* Background glow */}

      <div className="absolute inset-0 opacity-20">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />

      </div>

      <Section className="relative z-10 bg-transparent py-0">

        <Badge variant="primary">
          {research.hero.badge}
        </Badge>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          {research.hero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {research.hero.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Button>
            {research.hero.primaryButton}
          </Button>

          <Button variant="secondary">
            {research.hero.secondaryButton}
          </Button>

        </div>

      </Section>

    </section>
  );
}