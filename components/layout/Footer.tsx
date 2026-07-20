import Link from "next/link";

import Container from "@/components/common/Container";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Frameworks", href: "/frameworks" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

const researchAreas = [
  "Education",
  "Health",
  "Governance",
  "Economy",
  "Environment",
  "Artificial Intelligence",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-2 xl:grid-cols-4">

          {/* NICRG */}
          <div>
            <h2 className="text-2xl font-bold">
              NICRG
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Nigerian Interdisciplinary Critical Research Group is committed to
              advancing evidence-informed research, innovation, policy, and
              sustainable national development through interdisciplinary
              collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold">
              Research Areas
            </h3>

            <ul className="mt-6 space-y-4">
              {researchAreas.map((area) => (
                <li
                  key={area}
                  className="text-slate-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <Mail size={18} />
                <span className="text-slate-300">
                  info@nicrg.org
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} />
                <span className="text-slate-300">
                  +234 XXX XXX XXXX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span className="text-slate-300">
                  Nigeria
                </span>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <Facebook
                className="cursor-pointer transition hover:text-emerald-400"
                size={20}
              />

              <Linkedin
                className="cursor-pointer transition hover:text-emerald-400"
                size={20}
              />

              <Twitter
                className="cursor-pointer transition hover:text-emerald-400"
                size={20}
              />

              <Youtube
                className="cursor-pointer transition hover:text-emerald-400"
                size={20}
              />

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nigerian Interdisciplinary Critical
          Research Group (NICRG). All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}