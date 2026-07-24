/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactForm
 * Version: 2.0.0
 *
 * Purpose:
 * Executive contact form for enquiries,
 * collaborations, partnerships, media,
 * and membership.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import TextInput from "@/components/ui/form/TextInput";
import Textarea from "@/components/ui/form/Textarea";
import Select from "@/components/ui/form/Select";
import Checkbox from "@/components/ui/form/Checkbox";
import FormActions from "@/components/ui/form/FormActions";

export default function ContactForm() {
  return (
    <Section
      id="contact-form"
      background="white"
    >
      <SectionHeader
        badge="Send an Enquiry"
        title="We'd Love to Hear From You"
        description="Complete the form below and the appropriate NICRG team will respond as soon as possible."
      />

      <Card className="mx-auto mt-16 max-w-5xl">
        <form className="space-y-8">

          <div className="grid gap-8 md:grid-cols-2">

            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              required
            />

            <TextInput
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              required
            />

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <TextInput
              label="Phone Number"
              placeholder="+234..."
            />

            <TextInput
              label="Organization / Institution"
              placeholder="Organization name"
            />

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <TextInput
              label="Position / Role"
              placeholder="Your position"
            />

            <TextInput
              label="Country"
              placeholder="Country"
            />

          </div>

          <Select
            label="Enquiry Category"
            required
            options={[
              {
                label: "General Enquiry",
                value: "general",
              },
              {
                label: "Membership",
                value: "membership",
              },
              {
                label: "Research Collaboration",
                value: "research",
              },
              {
                label: "Institutional Partnership",
                value: "partnership",
              },
              {
                label: "Publications",
                value: "publications",
              },
              {
                label: "Conference",
                value: "conference",
              },
              {
                label: "Training & Capacity Building",
                value: "training",
              },
              {
                label: "Media & Communications",
                value: "media",
              },
              {
                label: "Sponsorship",
                value: "sponsorship",
              },
              {
                label: "Technical Support",
                value: "technical",
              },
              {
                label: "Other",
                value: "other",
              },
            ]}
          />

          <TextInput
            label="Subject"
            placeholder="Brief subject"
            required
          />

          <Textarea
            label="Message"
            placeholder="Tell us how we can assist you..."
            rows={8}
            required
          />

          <Checkbox>
            I consent to NICRG storing my information and
            contacting me regarding this enquiry in accordance
            with the organization's Privacy Policy.
          </Checkbox>

          <FormActions align="between">

            <Button
              variant="secondary"
              type="reset"
            >
              Reset Form
            </Button>

            <Button type="submit">
              Submit Enquiry
            </Button>

          </FormActions>

        </form>
      </Card>

      <Card className="mx-auto mt-10 max-w-5xl bg-emerald-50 border-emerald-100">
        <h3 className="text-xl font-bold text-slate-900">
          What Happens Next?
        </h3>

        <ul className="mt-6 space-y-3 text-slate-700 leading-7">
          <li>• Your enquiry is securely received by NICRG.</li>

          <li>• It is routed to the appropriate department.</li>

          <li>• Most enquiries receive a response within 2–3 business days.</li>

          <li>• Research collaborations and institutional partnerships may require additional review.</li>
        </ul>
      </Card>

    </Section>
  );
}