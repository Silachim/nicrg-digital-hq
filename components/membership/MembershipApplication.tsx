/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipApplication
 * Version: 1.0.0
 *
 * Purpose:
 * Provides a clear call-to-action for
 * prospective members to begin their
 * membership application.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  ClipboardCheck,
  Clock3,
  CheckCircle2,
  ArrowRight,
  Download,
} from "lucide-react";

type MembershipApplicationProps = {
  badge: string;
  title: string;
  description: string;

  status: string;
  processingTime: string;

  requirements: string[];

  primaryButton: string;
  primaryHref: string;

  secondaryButton?: string;
  secondaryHref?: string;
};

export default function MembershipApplication({
  badge,
  title,
  description,
  status,
  processingTime,
  requirements,
  primaryButton,
  primaryHref,
  secondaryButton,
  secondaryHref,
}: MembershipApplicationProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mx-auto mt-16 max-w-5xl">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <ClipboardCheck className="h-8 w-8" />
                </div>

                <div>
                  <Badge variant="primary">
                    Applications {status}
                  </Badge>

                  <p className="mt-3 flex items-center gap-2 text-slate-600">
                    <Clock3 className="h-5 w-5 text-emerald-700" />

                    Processing Time: {processingTime}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-slate-900">
                  Before You Apply
                </h3>

                <div className="mt-6 space-y-5">
                  {requirements.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

                      <span className="leading-7 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Ready to Join?
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Complete your membership application and become part of
                Nigeria's growing interdisciplinary research community.
              </p>

              <div className="mt-10 space-y-4">
                <Button
                  href={primaryHref}
                  variant="primary"
                  className="w-full justify-center"
                >
                  {primaryButton}

                  <ArrowRight className="h-4 w-4" />
                </Button>

                {secondaryButton && secondaryHref && (
                  <Button
                    href={secondaryHref}
                    variant="secondary"
                    className="w-full justify-center"
                  >
                    {secondaryButton}

                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}