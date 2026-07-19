import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-50 py-24">
          <Container>
            <div className="max-w-4xl">
              <p className="font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Nigerian Interdisciplinary Critical Research Group
              </p>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
                Transforming Research Into National Impact.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                NICRG brings together scholars, professionals, policymakers,
                innovators, and communities to generate interdisciplinary
                research that addresses Nigeria's most pressing challenges and
                supports evidence-informed national development.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button>Explore Our Research</Button>

                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}