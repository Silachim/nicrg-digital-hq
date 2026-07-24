import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import MembershipTierCard from "./MembershipTierCard";

type MembershipOption = {
  title: string;
  description: string;
  benefits: string[];
  badge?: string;
  annualFee?: string;
  href?: string;
};

type MembershipGroup = {
  title: string;
  description: string;
  options: MembershipOption[];
};

type MembershipCategoriesProps = {
  badge: string;
  title: string;
  description: string;
  groups: MembershipGroup[];
};

export default function MembershipCategories({
  badge,
  title,
  description,
  groups,
}: MembershipCategoriesProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 space-y-20">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="mb-10 max-w-3xl">
              <h3 className="text-3xl font-bold text-slate-900">
                {group.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {group.description}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {group.options.map((option) => (
                <MembershipTierCard
                  key={option.title}
                  title={option.title}
                  annualFee={option.annualFee}
                  description={option.description}
                  benefits={option.benefits}
                  badge={option.badge}
                  href={option.href}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}