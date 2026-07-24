import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Newspaper,
  Camera,
  Mic,
} from "lucide-react";

const media = [
  "Press Releases",
  "Media Statements",
  "Photo Gallery",
  "Video Gallery",
  "Interviews",
  "Press Kits",
];

export default function MediaCentrePage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="News & Media"
          title="Media Centre"
          description="Official news releases, media resources, interviews, and institutional communications from NICRG."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Media Resources"
          title="Communicating Research Impact"
          description="Supporting journalists, partners, and the public with credible information."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {media.map((item) => (
            <Card key={item}>
              <Newspaper className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-xl font-bold">
                {item}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Official institutional media resources will be published here.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}