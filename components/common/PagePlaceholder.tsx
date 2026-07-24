// components/common/PagePlaceholder.tsx

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type Props = {
  title: string;
  description: string;
};

export default function PagePlaceholder({
  title,
  description,
}: Props) {
  return (
    <Section background="white">
      <SectionHeader
        badge="Coming Soon"
        title={title}
        description={description}
      />
    </Section>
  );
}