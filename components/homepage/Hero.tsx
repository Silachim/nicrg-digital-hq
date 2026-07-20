import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-24 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <Container className="relative flex min-h-[85vh] items-center py-24">

        <div className="max-w-4xl">

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Research • Policy • Innovation
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Transforming Research Into National Impact.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            The Nigerian Interdisciplinary Critical Research Group (NICRG)
            advances evidence-informed research, public policy,
            innovation, and interdisciplinary collaboration to solve
            Nigeria's most pressing development challenges.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button>
              Explore Research
            </Button>

            <Button variant="secondary">
              Explore Frameworks
            </Button>

          </div>

          <div className="mt-16 flex flex-wrap gap-10">

            <div>
              <h3 className="text-3xl font-bold text-[#112B45]">8</h3>
              <p className="text-sm uppercase tracking-wider">
                Strategic Frameworks
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#112B45]">20+</h3>
              <p className="text-sm uppercase tracking-wider">
                Research Publications
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#112B45]">100%</h3>
              <p className="text-sm uppercase tracking-wider">
                Evidence Driven
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}