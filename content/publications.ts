/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Content
 * Publications
 *
 * Purpose:
 * Central content configuration for the
 * Publications module.
 *
 * --------------------------------------------------------
 */

export const publications = {
  /* ======================================================
     HERO
  ====================================================== */

  hero: {
    badge: "Knowledge Repository",

    title: "Publications",

    description:
      "NICRG publishes high-quality scholarly, professional, and policy-oriented publications that advance interdisciplinary research, support evidence-informed decision-making, and contribute to sustainable national and global development.",

    primaryButton: {
      label: "Browse Repository",

      href: "/publications#library",
    },

    secondaryButton: {
      label: "Research Areas",

      href: "/research",
    },
  },

  /* ======================================================
     OVERVIEW
  ====================================================== */

  overview: {
    badge: "Research Outputs",

    title: "Knowledge That Creates Lasting Impact",

    description:
      "NICRG develops and disseminates credible knowledge resources that bridge research, policy, innovation, and professional practice across multiple disciplines.",

    categories: [
      {
        title: "Peer-reviewed Journals",

        description:
          "High-quality scholarly articles published in reputable national and international academic journals.",

        icon: "journal",
      },

      {
        title: "Books & Monographs",

        description:
          "Authoritative books, edited volumes, and monographs addressing emerging research and development priorities.",

        icon: "book",
      },

      {
        title: "Policy Briefs",

        description:
          "Evidence-informed policy recommendations supporting governments, institutions, and development partners.",

        icon: "policy",
      },

      {
        title: "Technical Reports",

        description:
          "Research reports, white papers, implementation studies, and institutional assessments.",

        icon: "report",
      },

      {
        title: "Conference Proceedings",

        description:
          "Conference papers, keynote presentations, abstracts, and scholarly proceedings.",

        icon: "conference",
      },

      {
        title: "Educational Resources",

        description:
          "Teaching resources, manuals, guides, toolkits, and learning materials for education and professional development.",

        icon: "resource",
      },
    ],
  },

  /* ======================================================
     FEATURED PUBLICATION
  ====================================================== */

  featured: {
    badge: "Featured Publication",

    title: "Highlight of the Month",

    description:
      "A selection of impactful research reflecting NICRG's commitment to interdisciplinary scholarship and evidence-informed development.",

    publication: {
      title:
        "Strengthening Evidence-Based Policymaking in Nigeria",

      authors:
        "NICRG Policy Research Unit",

      journal:
        "NICRG Policy Series",

      year: "2026",

      summary:
        "This publication provides practical recommendations for integrating interdisciplinary research evidence into public policy formulation, implementation, monitoring, and evaluation across Nigeria.",

      href:
        "/publications/evidence-based-policymaking",
    },
  },

  /* ======================================================
     SEARCH
  ====================================================== */

  search: {
    placeholder:
      "Search publications, authors, keywords, journals, books, reports or policy briefs...",
  },

  /* ======================================================
     FILTERS
  ====================================================== */

  filters: [
    {
      label: "All",

      value: "all",

      active: true,
    },

    {
      label: "Journal Articles",

      value: "journals",
    },

    {
      label: "Books",

      value: "books",
    },

    {
      label: "Policy Briefs",

      value: "policy",
    },

    {
      label: "Technical Reports",

      value: "reports",
    },

    {
      label: "Conference Papers",

      value: "conference",
    },

    {
      label: "Educational Resources",

      value: "resources",
    },
  ],

  /* ======================================================
     LIBRARY
  ====================================================== */

  library: {
    badge: "Institutional Repository",

    title: "NICRG Digital Publication Library",

    description:
      "Explore books, journal articles, technical reports, policy briefs, conference proceedings, educational resources, and other scholarly outputs produced by NICRG.",

    publications: [
      {
        title:
          "Strengthening Evidence-Based Policymaking in Nigeria",

        authors:
          "NICRG Policy Research Unit",

        type:
          "Policy Brief",

        journal:
          "NICRG Policy Series",

        year: "2026",

        researchArea:
          "Public Policy",

        href:
          "/publications/evidence-based-policymaking",
      },

      {
        title:
          "Artificial Intelligence for Sustainable Development",

        authors:
          "NICRG Emerging Technology Cluster",

        type:
          "Research Report",

        journal:
          "NICRG Research Reports",

        year: "2026",

        researchArea:
          "Artificial Intelligence",

        href:
          "/publications/artificial-intelligence-sustainable-development",
      },

      {
        title:
          "Community-Centered Research Framework",

        authors:
          "NICRG Research Team",

        type:
          "Working Paper",

        journal:
          "NICRG Working Papers",

        year: "2026",

        researchArea:
          "Research Methodology",

        href:
          "/publications/community-centered-research-framework",
        },
    ],
  },
    /* ======================================================
     PUBLICATION METRICS
  ====================================================== */

  metrics: {
    badge: "Research Metrics",

    title: "Publication Performance",

    description:
      "NICRG monitors research productivity, scholarly visibility, collaboration, and knowledge dissemination through institutional publication indicators.",

    metrics: [
      {
        value: "150+",

        label: "Publications",

        description:
          "Books, journal articles, reports, policy briefs, conference papers, and educational resources.",

        icon: "book",
      },

      {
        value: "35+",

        label: "Research Areas",

        description:
          "Interdisciplinary themes spanning education, technology, governance, sustainability, health, and social development.",

        icon: "research",
      },

      {
        value: "50+",

        label: "Collaborating Institutions",

        description:
          "Universities, government agencies, NGOs, professional associations, and international development organizations.",

        icon: "institution",
      },

      {
        value: "20+",

        label: "Countries Reached",

        description:
          "Knowledge resources accessed by researchers, practitioners, and policymakers across multiple regions.",

        icon: "globe",
      },
    ],
  },

  /* ======================================================
     FEATURED AUTHOR
  ====================================================== */

  author: {
    name:
      "NICRG Research Team",

    affiliation:
      "National Institute for Collaborative Research and Development Governance",

    role:
      "Institutional Research Collective",

    publications:
      "150+",

    biography:
      "NICRG publications are developed through interdisciplinary collaboration involving researchers, practitioners, educators, policymakers, and development professionals committed to producing rigorous, ethical, and impactful knowledge.",

    href:
      "/research",
  },

  /* ======================================================
     CITATION
  ====================================================== */

  citation: {
    apa:
      "National Institute for Collaborative Research and Development Governance. (2026). Strengthening Evidence-Based Policymaking in Nigeria. NICRG Policy Series.",

    mla:
      "National Institute for Collaborative Research and Development Governance. Strengthening Evidence-Based Policymaking in Nigeria. NICRG Policy Series, 2026.",

    chicago:
      "National Institute for Collaborative Research and Development Governance. 2026. Strengthening Evidence-Based Policymaking in Nigeria. NICRG Policy Series.",

    doi:
      "https://doi.org/10.0000/nicrg.policy.2026.001",
  },

  /* ======================================================
     DOWNLOADS
  ====================================================== */

  downloads: {
    files: [
      {
        title:
          "Full Research Article (PDF)",

        type:
          "PDF Document",

        size:
          "2.8 MB",

        href:
          "/downloads/early-childhood-mathematics.pdf",
      },

      {
        title:
          "Supplementary Materials",

        type:
          "ZIP Archive",

        size:
          "6.5 MB",

        href:
          "/downloads/early-childhood-mathematics-supplementary.zip",
      },

      {
        title:
          "Citation File",

        type:
          "BibTeX",

        size:
          "4 KB",

        href:
          "/downloads/early-childhood-mathematics.bib",
      },
    ],
  },

  /* ======================================================
     RESEARCH AREA
  ====================================================== */

  researchArea: {
    title:
      "Early Childhood Mathematics Education",

    description:
      "This publication contributes to NICRG's interdisciplinary research agenda by advancing curriculum innovation, mathematics education, teacher development, educational policy, classroom practice, and evidence-informed decision-making.",

    keywords: [
      "Early Childhood Education",
      "Mathematics Education",
      "Curriculum Studies",
      "Teacher Education",
      "Educational Research",
      "Assessment",
      "Educational Innovation",
      "Learning Sciences",
    ],
  },


  /* ======================================================
     RELATED PUBLICATIONS
  ====================================================== */

  related: {
    badge:
      "Related Publications",

    title:
      "Continue Exploring",

    description:
      "Readers interested in this publication may also explore related research outputs from the NICRG knowledge repository.",

    publications: [
      {
        title:
          "Real-Life Mathematics for Basic Education",

        authors:
          "Temitope F. Egbedeyi",

        journal:
          "NICRG Press",

        year:
          "2024",

        researchArea:
          "Mathematics Education",

        href:
          "/publications/real-life-mathematics",
      },

      {
        title:
          "Evidence-Based Educational Policy Development",

        authors:
          "NICRG Policy Research Unit",

        journal:
          "NICRG Policy Series",

        year:
          "2026",

        researchArea:
          "Educational Policy",

        href:
          "/publications/evidence-based-policy",
      },

      {
        title:
          "Innovative Teacher Professional Development Models",

        authors:
          "NICRG Professional Learning Unit",

        journal:
          "NICRG Working Papers",

        year:
          "2026",

        researchArea:
          "Teacher Education",

        href:
          "/publications/teacher-professional-development",
      },
    ],
  }, 
    /* ======================================================
     PUBLICATION STATISTICS
  ====================================================== */

  statistics: {
    badge: "Publication Statistics",

    title:
      "Research Performance at a Glance",

    description:
      "NICRG continuously monitors institutional research productivity, scholarly dissemination, knowledge accessibility, and academic visibility to evaluate research excellence and institutional growth.",

    statistics: [
      {
        value: "150+",

        label: "Publications",
      },

      {
        value: "35+",

        label: "Research Areas",
      },

      {
        value: "50+",

        label: "Collaborating Institutions",
      },

      {
        value: "20+",

        label: "Countries Reached",
      },
    ],
  },

  /* ======================================================
     PUBLICATION IMPACT
  ====================================================== */

  impact: {
    badge: "Research Impact",

    title:
      "Knowledge That Drives Change",

    description:
      "NICRG publications are designed to influence scholarship, strengthen educational systems, support evidence-informed policy, and promote sustainable development through high-quality research and open knowledge dissemination.",

    statistics: [
      {
        value: "National",

        label: "Policy Influence",
      },

      {
        value: "Interdisciplinary",

        label: "Research Collaboration",
      },

      {
        value: "Open",

        label: "Knowledge Access",
      },

      {
        value: "Global",

        label: "Academic Visibility",
      },
    ],
  },

  /* ======================================================
     PUBLICATION COLLECTIONS
  ====================================================== */

  collections: {
    badge: "Knowledge Collections",

    title:
      "Explore the NICRG Knowledge Repository",

    description:
      "Our institutional repository organizes publications into curated collections, making it easier for researchers, educators, policymakers, and development partners to discover high-quality knowledge resources.",

    collections: [
      {
        title: "Books & Monographs",

        description:
          "Scholarly books and monographs that provide comprehensive treatment of important educational, social, and development issues.",

        total: "12 Collections",

        icon: "books",

        href: "/publications/books",
      },

      {
        title: "Journal Articles",

        description:
          "Peer-reviewed scholarly articles published in reputable national and international academic journals.",

        total: "150+ Articles",

        icon: "journals",

        href: "/publications/journals",
      },

      {
        title: "Technical Reports",

        description:
          "Research reports, technical documentation, implementation studies, and institutional evidence supporting practice and policy.",

        total: "40 Reports",

        icon: "reports",

        href: "/publications/reports",
      },

      {
        title: "Policy Briefs",

        description:
          "Evidence summaries prepared to inform educational leaders, policymakers, governments, and development organizations.",

        total: "25 Briefs",

        icon: "policy",

        href: "/publications/policy-briefs",
      },

      {
        title: "Conference Proceedings",

        description:
          "Papers, presentations, and proceedings presented at national and international academic conferences.",

        total: "35 Proceedings",

        icon: "proceedings",

        href: "/publications/conferences",
      },

      {
        title: "Theses & Dissertations",

        description:
          "Graduate research outputs that contribute new knowledge to curriculum studies, education, and interdisciplinary scholarship.",

        total: "18 Studies",

        icon: "theses",

        href: "/publications/theses",
      },

      {
        title: "Educational Resources",

        description:
          "Open educational resources, teaching guides, curriculum materials, manuals, and learning toolkits.",

        total: "60 Resources",

        icon: "resources",

        href: "/publications/resources",
      },

      {
        title: "Magazine & Newsletter",

        description:
          "Institutional magazines, newsletters, research updates, and knowledge communication publications.",

        total: "20 Editions",

        icon: "magazines",

        href: "/publications/newsletter",
      },
    ],
  },

  /* ======================================================
     PUBLICATION TIMELINE
  ====================================================== */

  timeline: {
    badge: "Publication Journey",

    title:
      "From Research to Publication",

    description:
      "NICRG follows a rigorous publication process that ensures quality, integrity, scholarly excellence, and long-term accessibility of research outputs.",

    items: [
      {
        year: "01",

        title: "Research",

        description:
          "Evidence generation through interdisciplinary research and collaborative inquiry.",
      },

      {
        year: "02",

        title: "Peer Review",

        description:
          "Internal and external quality assurance through scholarly review and editorial assessment.",
      },

      {
        year: "03",

        title: "Publication",

        description:
          "Professional editing, production, indexing, and dissemination through the NICRG repository.",
      },

      {
        year: "04",

        title: "Impact",

        description:
          "Knowledge translation supporting policy, professional practice, innovation, and future research.",
      },
    ],
  },

  /* ======================================================
     CALL TO ACTION
  ====================================================== */

  cta: {
    title:
      "Share Knowledge. Inspire Innovation.",

    description:
      "Explore our growing repository of scholarly publications, discover evidence-based resources, and collaborate with NICRG to advance research, education, and sustainable development.",

    primaryButton: {
      label: "Browse Repository",

      href: "/publications#library",
    },

    secondaryButton: {
      label: "Become a Research Partner",

      href: "/membership",
     },
  },
};