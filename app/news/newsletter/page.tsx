import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function NewsletterPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Newsletter"
          title="Stay Connected with NICRG"
          description="Receive research updates, publications, policy briefs, events, funding opportunities, and institutional news directly in your inbox."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Why Subscribe?"
          title="Evidence Delivered Monthly"
          description="Our newsletter keeps researchers, policymakers, practitioners, and development partners informed about the latest work across NICRG."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-bold">
              Research Highlights
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Discover our newest publications, reports, and policy briefs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">
              Upcoming Events
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Stay informed about conferences, webinars, workshops, and fellowships.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold">
              Opportunities
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Receive announcements about grants, collaborations, internships, and memberships.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          badge="Coming Soon"
          title="Newsletter Subscription"
          description="Newsletter subscriptions will be available during the next platform release."
        />
      </Section>
    </>
  );
}