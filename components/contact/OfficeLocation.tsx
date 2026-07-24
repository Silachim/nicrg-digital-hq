import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import { MapPin, Clock, Mail, Phone } from "lucide-react";

import { contact } from "@/content";

export default function OfficeLocation() {
  const office = contact.office;

  return (
    <Section background="slate">
      <SectionHeader
        badge="Office Location"
        title={office.heading}
        description="Our administrative office serves as the coordination point for NICRG's programmes, partnerships, and institutional activities."
      />

      <Card className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-10 p-10 lg:grid-cols-2">

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 text-emerald-700" />

              <div>
                <h4 className="font-semibold text-slate-900">
                  Address
                </h4>

                <p className="mt-2 text-slate-600">
                  {office.address || "To be announced"}
                </p>

                <p className="text-slate-600">
                  {office.city} {office.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 text-emerald-700" />

              <div>
                <h4 className="font-semibold text-slate-900">
                  Office Hours
                </h4>

                <p className="mt-2 text-slate-600">
                  {office.hours}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 text-emerald-700" />

              <div>
                <h4 className="font-semibold text-slate-900">
                  Email
                </h4>

                <p className="mt-2 text-slate-600">
                  {office.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 text-emerald-700" />

              <div>
                <h4 className="font-semibold text-slate-900">
                  Telephone
                </h4>

                <p className="mt-2 text-slate-600">
                  {office.phone || "Coming soon"}
                </p>
              </div>
            </div>

          </div>

          <div className="flex min-h-[320px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <p className="text-center text-slate-500">
              Google Maps Embed
              <br />
              (To be integrated)
            </p>
          </div>

        </div>
      </Card>
    </Section>
  );
}