/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactFAQ
 * Version: 1.0.0
 *
 * Purpose:
 * Frequently Asked Questions for visitors,
 * collaborators, researchers, institutions,
 * members, and the public.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import { ChevronDown } from "lucide-react";

import { contact } from "@/content";

export default function ContactFAQ() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Frequently Asked Questions"
        title="Before You Contact Us"
        description="Find answers to some of the most common questions about NICRG, our programmes, collaborations, and membership."
      />

      <div className="mx-auto mt-16 max-w-5xl space-y-6">
        {contact.faq.map((item) => (
          <Card
            key={item.question}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>

                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="leading-8 text-slate-600">
                  {item.answer}
                </p>
              </div>
            </details>
          </Card>
        ))}
      </div>
    </Section>
  );
}