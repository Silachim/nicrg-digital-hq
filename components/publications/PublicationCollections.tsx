/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationCollections
 * Version: 2.0.0
 *
 * Purpose:
 * Presents NICRG's curated publication
 * collections, enabling users to explore
 * scholarly resources by publication type.
 *
 * Used In:
 * • Publications
 * • Digital Repository
 * • Knowledge Hub
 * • Resource Centre
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  BookOpen,
  BookText,
  FileText,
  ScrollText,
  Library,
  GraduationCap,
  Newspaper,
  FolderOpen,
} from "lucide-react";

const iconMap = {
  books: BookOpen,
  journals: BookText,
  reports: FileText,
  policy: ScrollText,
  proceedings: Library,
  theses: GraduationCap,
  magazines: Newspaper,
  resources: FolderOpen,
} as const;

type Collection = {
  title: string;

  description: string;

  total: string;

  icon: keyof typeof iconMap;

  href?: string;
};

type PublicationCollectionsProps = {
  badge: string;

  title: string;

  description: string;

  collections: Collection[];
};

export default function PublicationCollections({
  badge,
  title,
  description,
  collections,
}: PublicationCollectionsProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {collections.map((collection, index) => {
          const Icon =
            iconMap[collection.icon] ??
            FolderOpen;

          return (
            <Card
              key={`${collection.title}-${index}`}
              className="flex h-full flex-col"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {collection.title}
              </h3>

              <p className="mt-5 flex-1 leading-8 text-slate-600">
                {collection.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {collection.total}
                </span>

                {collection.href && (
                  <Button
                    href={collection.href}
                    variant="secondary"
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}