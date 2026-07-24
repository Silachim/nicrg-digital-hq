import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function PublicationsCTA() {
  return (
    <Section background="gradient">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-extrabold text-white">
          Share Knowledge That Shapes the Future
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-200">
          Join NICRG's growing community of scholars, policymakers, practitioners,
          and innovators committed to producing research that creates meaningful
          impact across Nigeria and beyond.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Button>
            Submit Publication
          </Button>

          <Button variant="secondary">
            Join Research Network
          </Button>
        </div>
      </div>
    </Section>
  );
}