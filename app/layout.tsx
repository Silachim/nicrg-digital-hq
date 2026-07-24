import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Nigerian Interdisciplinary Critical Research Group",
  alternateName: "NICRG",
  url: "https://nicrg.org",
  logo: "https://nicrg.org/branding/nicrg-logo-primary.png",
  description:
    "An independent interdisciplinary research institute advancing evidence-informed policymaking, innovation, and sustainable development.",
  foundingLocation: {
    "@type": "Country",
    name: "Nigeria",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nicrg.org"),

  title: {
    default:
      "NICRG | Nigerian Interdisciplinary Critical Research Group",
    template: "%s | NICRG",
  },

  description:
    "The Nigerian Interdisciplinary Critical Research Group (NICRG) is an independent, non-partisan research institute advancing interdisciplinary scholarship, evidence-informed policymaking, innovation, and sustainable development.",

  applicationName: "NICRG",

  keywords: [
    "NICRG",
    "Nigeria Research",
    "Think Tank",
    "Research Institute",
    "Policy",
    "Education",
    "Artificial Intelligence",
    "Innovation",
    "Sustainable Development",
    "Governance",
    "Climate",
    "Publications",
    "Evidence-Based Policy",
    "Interdisciplinary Research",
  ],

  authors: [
    {
      name: "Nigerian Interdisciplinary Critical Research Group",
      url: "https://nicrg.org",
    },
  ],

  creator: "NICRG",

  publisher:
    "Nigerian Interdisciplinary Critical Research Group",

  category: "Research",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nicrg.org",
    siteName: "NICRG",

    title:
      "Nigerian Interdisciplinary Critical Research Group",

    description:
      "Advancing Evidence. Shaping Policies. Transforming Nigeria.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NICRG",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Nigerian Interdisciplinary Critical Research Group",

    description:
      "Advancing Evidence. Shaping Policies. Transforming Nigeria.",

    images: ["/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#16324F",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}