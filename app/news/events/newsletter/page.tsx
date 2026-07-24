import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Mail,
  Bell,
  BookOpen,
} from "lucide-react";

export default function NewsletterPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="News & Media"
          title="NICRG Newsletter"
          description="Stay informed about the latest research, publications, programmes, partnerships, and institutional developments."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Coming Soon"
          title="Quarterly Institutional Newsletter"
          description="NICRG newsletters will highlight research breakthroughs, policy engagement, upcoming events, and opportunities."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card>
            <Mail className="h-10 w-10 text-emerald-700" />
            <h3 className="mt-6 text-xl font-bold">
              Subscribe
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Receive our quarterly newsletter directly in your inbox.
            </p>
          </Card>

          <Card>
            <Bell className="h-10 w-10 text-emerald-700" />
            <h3 className="mt-6 text-xl font-bold">
              Updates
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Stay updated on research, events, and institutional news.
            </p>
          </Card>

          <Card>
            <BookOpen className="h-10 w-10 text-emerald-700" />
            <h3 className="mt-6 text-xl font-bold">
              Archives
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Browse previous newsletter editions as our archive grows.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}