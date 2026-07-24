/**
 * --------------------------------------------------------
 * NICRG Content
 * File: membership.ts
 * Purpose:
 * Content source for the Membership page.
 * --------------------------------------------------------
 */

import {
  Users,
  GraduationCap,
  Briefcase,
  Building2,
  Globe,
  HeartHandshake,
  BookOpen,
  Network,
  Lightbulb,
  FileText,
  Award,
  Landmark,
} from "lucide-react";

/* ======================================================
   HERO
====================================================== */

export const membershipHero = {
  badge: "NICRG Membership",

  title:
    "Join Nigeria's Growing Community of Researchers, Professionals, and Changemakers",

  description:
    "Become part of an inclusive interdisciplinary network committed to advancing research excellence, innovation, evidence-informed policy, and sustainable national development.",

  primaryButton: {
    label: "Apply for Membership",
    href: "/membership/apply",
  },

  secondaryButton: {
    label: "Membership Categories",
    href: "#membership-categories",
  },

  philosophyBadge: "Membership Philosophy",

  philosophyTitle:
    "One Community. Equal Membership.",

  philosophyStatement:
    "NICRG believes that every member contributes unique knowledge, experience, and perspectives. Whether you are a student, researcher, policymaker, institution, or community advocate, your membership carries equal dignity, equal opportunity, and equal responsibility in advancing interdisciplinary research and national development.",
};
/* ======================================================
   OVERVIEW
====================================================== */

export const membershipOverview = {
  badge: "Membership",

  title: "A Community Built on Collaboration",

  description:
    "NICRG membership connects individuals and organizations committed to advancing research, innovation, education, policy, and national development.",

  highlights: [
    {
      title: "Inclusive Community",
      description:
        "Membership welcomes professionals, students, practitioners, institutions, policymakers, and citizens who support evidence-informed development.",
    },
    {
      title: "Interdisciplinary Collaboration",
      description:
        "Work across disciplines to address complex societal challenges through collaborative research and innovation.",
    },
    {
      title: "Professional Development",
      description:
        "Access training, mentoring, conferences, publications, and networking opportunities throughout your career.",
    },
    {
      title: "National Impact",
      description:
        "Contribute knowledge and expertise that influence policy, practice, education, and sustainable development.",
    },
  ],
};

export const membershipPrinciple = {
  badge: "Membership Philosophy",

  title: "One Community. Equal Membership.",

  description:
    "NICRG welcomes individuals and institutions from diverse disciplines, sectors, career stages, and backgrounds into one collaborative research community.",

  principleTitle: "One Community. Equal Membership.",

  principle:
    "NICRG recognizes the diversity of its members by offering different membership categories that reflect professional backgrounds, career stages, institutional affiliations, and modes of participation. These categories exist solely to ensure appropriate engagement opportunities and services. They do not represent hierarchy, superiority, or privilege. Every NICRG member is equally valued, equally respected, and equally important in advancing the organization's mission of generating knowledge for sustainable national development.",

  callout:
    "Different membership pathways. Equal dignity. Shared purpose. Collective impact.",
};
/* ======================================================
   MEMBERSHIP CATEGORIES
====================================================== */

export const membershipCategories = {
  badge: "Membership Categories",

  title: "Membership Designed for Every Stage of Engagement",

  description:
    "NICRG offers multiple membership categories to reflect diverse backgrounds, experiences, and ways of contributing. Every category carries equal value within the organization.",

  groups: [
    {
      title: "Professional Membership",

      description:
        "For individuals and organizations actively engaged in research, education, policy, innovation, and professional practice.",

      options: [
        {
          title: "Professional Member",
          badge: "Professional",

          description:
            "Researchers, academics, educators, consultants, policymakers, healthcare professionals, development practitioners, industry experts, and other professionals.",

          benefits: [
            "Research collaboration",
            "Professional networking",
            "Leadership opportunities",
            "Conference participation",
            "Publications and dissemination",
          ],

          href: "/membership/apply",
        },

        {
          title: "Institutional Member",
          badge: "Institution",

          description:
            "Universities, research institutes, NGOs, government agencies, private organizations, and development partners.",

          benefits: [
            "Institutional partnerships",
            "Joint research",
            "Capacity building",
            "Collaborative projects",
            "Strategic engagement",
          ],

          href: "/membership/apply",
        },

        {
          title: "International Member",
          badge: "Global",

          description:
            "Scholars, professionals, institutions, and partners outside Nigeria seeking international collaboration.",

          benefits: [
            "Global networking",
            "Cross-border partnerships",
            "International research",
            "Knowledge exchange",
            "Collaborative programmes",
          ],

          href: "/membership/apply",
        },
      ],
    },

    {
      title: "Non-Professional Membership",

      description:
        "For individuals interested in learning, supporting research, volunteering, or contributing to sustainable development regardless of professional background.",

      options: [
        {
          title: "Student Member",
          badge: "Student",

          description:
            "Undergraduate and postgraduate students seeking mentorship and research experience.",

          benefits: [
            "Research mentoring",
            "Student workshops",
            "Networking",
            "Leadership development",
            "Research opportunities",
          ],

          href: "/membership/apply",
        },

        {
          title: "Community Member",
          badge: "Community",

          description:
            "Individuals passionate about research, education, innovation, and community development.",

          benefits: [
            "Volunteer participation",
            "Community engagement",
            "Learning opportunities",
            "Knowledge sharing",
            "Events",
          ],

          href: "/membership/apply",
        },
      ],
    },
  ],
};

/* ======================================================
   BENEFITS
====================================================== */

export const membershipBenefits = {
  badge: "Member Benefits",

  title: "Why Become a NICRG Member?",

  description:
    "Membership provides opportunities for learning, collaboration, leadership, and meaningful contribution to society.",

  benefits: [
    {
      title: "Research Collaboration",
      description:
        "Connect with researchers and professionals across disciplines.",
      icon: "network",
    },

    {
      title: "Knowledge Resources",
      description:
        "Access publications, seminars, workshops, and research resources.",
      icon: "book",
    },

    {
      title: "Professional Recognition",
      description:
        "Strengthen your professional profile through active engagement.",
      icon: "award",
    },

    {
      title: "Innovation",
      description:
        "Participate in projects that generate innovative solutions for society.",
      icon: "lightbulb",
    },

    {
      title: "Policy Engagement",
      description:
        "Support evidence-informed decision-making and national development.",
      icon: "landmark",
    },

    {
      title: "Publications",
      description:
        "Contribute to publications, policy briefs, and research dissemination.",
      icon: "file",
    },
  ],
};

/* ======================================================
   APPLICATION JOURNEY
====================================================== */

export const membershipJourney = {
  badge: "Application Journey",

  title: "Joining NICRG",

  description:
    "Our membership process is straightforward, transparent, and designed to help every applicant find the membership pathway that best reflects their interests and background.",

  steps: [
    {
      step: 1,
      title: "Submit Application",
      description:
        "Complete the online membership application form.",
    },

    {
      step: 2,
      title: "Membership Review",
      description:
        "Applications are reviewed to recommend the most appropriate membership category.",
    },

    {
      step: 3,
      title: "Confirmation",
      description:
        "Receive your membership confirmation and onboarding information.",
    },

    {
      step: 4,
      title: "Engage & Contribute",
      description:
        "Participate in research, events, publications, and collaborative initiatives.",
    },
  ],
};

/* ======================================================
   STATISTICS
====================================================== */

export const membershipStatistics = [
  {
    value: "Open",
    label: "Membership Status",
  },
  {
    value: "5",
    label: "Membership Categories",
  },
  {
    value: "National",
    label: "Coverage",
  },
  {
    value: "Global",
    label: "Collaboration",
  },
];

/* ======================================================
   QUOTE
====================================================== */

export const membershipQuote = {
  quote:
    "Research flourishes when diverse minds collaborate with mutual respect, shared purpose, and equal opportunity.",

  author: "National Interdisciplinary Collaborative Research Group",

  title: "Membership Philosophy",
};

/* ======================================================
   CALLOUT
====================================================== */

export const membershipCallout = {
  badge: "Join NICRG",

  title: "Become Part of the Movement",

  description:
    "Whether you are a student, researcher, policymaker, professional, institution, or citizen passionate about evidence-informed development, there is a place for you in NICRG.",
};
export const membershipApplication = {
  badge: "Application",

  title: "Ready to Join NICRG?",

  description:
    "Applications are open to individuals and institutions that share NICRG's commitment to interdisciplinary collaboration, research excellence, innovation, and sustainable national development.",

  status: "Open",

  processingTime: "5–10 Working Days",

  requirements: [
    "Complete the online application form",
    "Select the most appropriate membership category",
    "Agree to the NICRG Membership Principles",
    "Accept the Code of Ethics",
  ],

  primaryButton: "Apply for Membership",

  secondaryButton: "Download Membership Guide",
};