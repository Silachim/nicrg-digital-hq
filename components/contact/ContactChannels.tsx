import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

import { contact } from "@/content";

import {
  Mail,
  Phone,
  Users,
  FlaskConical,
} from "lucide-react";

const iconMap = {
  mail: Mail,
  phone: Phone,
  users: Users,
  flask: FlaskConical,
};

export default function ContactChannels() {
  return (
    <Section
      id="contact-channels"
      background="white"
    >
      <SectionHeader
        badge="Contact Channels"
        title="Reach the Right Team"
        description="Choose the most appropriate communication channel for your enquiry."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {contact.channels.map((channel) => {
          const LucideIcon =
            iconMap[
              channel.icon as keyof typeof iconMap
            ];

          return (
            <Card
              key={channel.title}
              className="flex h-full flex-col"
            >
              <div className="p-8">

                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <Icon
                    icon={LucideIcon}
                    className="text-emerald-700"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {channel.title}
                </h3>

                <p className="mt-3 font-medium text-emerald-700">
                  {channel.value}
                </p>

                <p className="mt-5 flex-1 leading-7 text-slate-600">
                  {channel.description}
                </p>

                <div className="mt-8">
                  <Button
                    href={channel.href}
                    variant="secondary"
                  >
                    Contact
                  </Button>
                </div>

              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}