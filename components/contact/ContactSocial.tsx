/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactSocial
 * Version: 2.0.0
 *
 * Purpose:
 * Displays NICRG's official digital platforms
 * and social media channels.
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ContactSocialCard from "./ContactSocialCard";

import { Globe } from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import { contact } from "@/content";

export default function ContactSocial() {
  const { social } = contact;

  const platforms = [
    {
      title: "Official Website",
      description:
        "Visit the NICRG website for research, publications, news, programmes, and institutional information.",
      value: social.website,
      href: social.website,
      icon: <Globe className="h-9 w-9" />,
    },

    {
      title: "LinkedIn",
      description:
        "Connect with NICRG's professional community, institutional partnerships, and research network.",
      value: social.linkedin,
      href: social.linkedin,
      icon: <FaLinkedin className="h-9 w-9" />,
    },

    {
      title: "GitHub",
      description:
        "Explore NICRG's open-source projects, digital tools, datasets, and collaborative development.",
      value: social.github,
      href: social.github,
      icon: <FaGithub className="h-9 w-9" />,
    },

    {
      title: "YouTube",
      description:
        "Watch conferences, webinars, research seminars, interviews, and educational videos.",
      value: social.youtube,
      href: social.youtube,
      icon: <FaYoutube className="h-9 w-9" />,
    },

    {
      title: "Facebook",
      description:
        "Follow institutional updates, public engagement activities, community programmes, and announcements.",
      value: social.facebook,
      href: social.facebook,
      icon: <FaFacebook className="h-9 w-9" />,
    },

    {
      title: "Instagram",
      description:
        "Discover photographs, conference highlights, institutional events, and community impact stories.",
      value: social.instagram,
      href: social.instagram,
      icon: <FaInstagram className="h-9 w-9" />,
    },

    {
      title: "TikTok",
      description:
        "Explore short educational videos, research insights, outreach activities, and public awareness campaigns.",
      value: social.tiktok,
      href: social.tiktok,
      icon: <FaTiktok className="h-9 w-9" />,
    },
  ];

  return (
    <Section
      id="contact-social"
      background="white"
    >
      <SectionHeader
        badge="Digital Community"
        title="Connect With NICRG Across Our Digital Platforms"
        description="Stay informed through our official digital platforms where we share research findings, institutional news, conferences, publications, educational resources, and opportunities for collaboration."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {platforms.map((platform) => (
          <ContactSocialCard
            key={platform.title}
            title={platform.title}
            description={platform.description}
            value={platform.value}
            href={platform.href}
            icon={platform.icon}
          />
        ))}
      </div>
    </Section>
  );
}