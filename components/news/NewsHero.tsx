import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";

import { newsHero } from "@/content";

export default function NewsHero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-32 text-white">
      <Container>
        <Badge variant="primary">
          {newsHero.badge}
        </Badge>

        <h1 className="mt-8 text-6xl font-extrabold">
          {newsHero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {newsHero.description}
        </p>
      </Container>
    </section>
  );
}