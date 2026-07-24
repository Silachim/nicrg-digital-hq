import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function PublicationSubmission() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Submission"
        title="Contribute to the NICRG Knowledge Repository"
        description="Researchers, practitioners, and institutional partners are invited to submit high-quality scholarly and policy-oriented work for consideration."
      />

      <div className="mt-12 text-center">
        <Button>
          Submission Guidelines
        </Button>
      </div>
    </Section>
  );
}