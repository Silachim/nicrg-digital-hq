import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { organization } from "@/content";

export default function OurStory() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Our Story"
        title="Why NICRG Was Established"
        description="The story of an emerging institution committed to transforming research into national development."
      />

      <div className="mx-auto mt-16 max-w-4xl">
        <p className="text-lg leading-9 text-slate-600">
          {organization.foundedStory}
        </p>
      </div>
    </Section>
  );
}