import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { organization } from "@/content";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-32 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <Container className="relative z-10">

        <Badge variant="primary">
          About NICRG
        </Badge>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
  {organization.aboutHeroTitle}
</h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {organization.identity}
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <Button>
            Explore Research
          </Button>

          <Button variant="secondary">
            Become a Member
          </Button>
        </div>

      </Container>

    </section>
  );
}