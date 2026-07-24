import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/Container";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

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

          {/* Organization */}
          <div>
            <Link
              href="/"
              className="inline-block"
            >
              <Image
                src="/branding/nicrg-logo-white.png"
                alt="Nigerian Interdisciplinary Critical Research Group"
                width={240}
                height={70}
                className="h-auto w-56"
              />
            </Link>

            <p className="mt-8 leading-8 text-slate-300">
              The Nigerian Interdisciplinary Critical Research Group (NICRG)
              is an independent, non-partisan research institute advancing
              interdisciplinary scholarship, evidence-informed policymaking,
              innovation, and sustainable development across Nigeria and beyond.
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
                    className="text-slate-300 transition hover:text-emerald-400"
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
                <Mail
                  size={18}
                  className="mt-1 text-emerald-400"
                />
                <span className="text-slate-300">
                  info@nicrg.org
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 text-emerald-400"
                />
                <span className="text-slate-300">
                  +234 XXX XXX XXXX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-emerald-400"
                />
                <span className="text-slate-300">
                  Nigeria
                </span>
              </div>

            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-5">

              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-300 transition hover:text-emerald-400"
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-300 transition hover:text-emerald-400"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                aria-label="X"
                className="text-slate-300 transition hover:text-emerald-400"
              >
                <FaXTwitter size={22} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="text-slate-300 transition hover:text-emerald-400"
              >
                <FaYoutube size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nigerian Interdisciplinary Critical Research Group (NICRG). All Rights Reserved.
        </div>

      </Container>
    </footer>
  );
}