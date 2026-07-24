/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactInformation
 * Version: 1.0.0
 *
 * Purpose:
 * Executive overview of NICRG's official
 * communication channels.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ContactInformationCard from "./ContactInformationCard";

import {
  Mail,
  Users,
  Briefcase,
  Newspaper,
  Handshake,
  LifeBuoy,
} from "lucide-react";

import { contact } from "@/content";

export default function ContactInformation() {
  const information = contact.information;

  const items = [
    {
      icon: <Mail className="h-7 w-7" />,
      title: "General Enquiries",
      content: information.general,
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Membership",
      content: information.membership,
    },
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: "Research Collaboration",
      content: information.research,
    },
    {
      icon: <Handshake className="h-7 w-7" />,
      title: "Partnerships",
      content: information.partnerships,
    },
    {
      icon: <Newspaper className="h-7 w-7" />,
      title: "Media & Communications",
      content: information.media,
    },
    {
      icon: <LifeBuoy className="h-7 w-7" />,
      title: "Support",
      content: information.support,
    },
  ];

  return (
    <Section background="white">
      <SectionHeader
        badge="Contact Channels"
        title="Reach the Right Team"
        description="Whether you are interested in membership, research collaboration, institutional partnership, media enquiries, or general information, our team is ready to assist."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ContactInformationCard
            key={item.title}
            icon={item.icon}
            title={item.title}
          >
            <p>{item.content}</p>
          </ContactInformationCard>
        ))}
      </div>
    </Section>
  );
}