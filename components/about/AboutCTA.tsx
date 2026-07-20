import Container from "@/components/common/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutCTA() {
  return (
    <Section background="gradient">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-5xl font-extrabold text-white">
            Join a Growing Network of Researchers and Changemakers
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-200">
            Whether you are a researcher, policymaker, practitioner,
            student, institutional partner, or member of the Nigerian
            diaspora, NICRG provides opportunities to collaborate,
            publish, innovate, and contribute to sustainable national
            development.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button>
              Become a Member
            </Button>

            <Button variant="secondary">
              Contact NICRG
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}