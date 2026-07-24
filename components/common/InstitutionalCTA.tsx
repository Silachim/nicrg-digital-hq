/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Common Component
 * Component: InstitutionalCTA
 * Version: 1.0.0
 *
 * Purpose:
 * Displays the institutional call-to-action
 * before the footer across the NICRG Digital
 * Headquarters.
 *
 * Used On:
 * • Every major page
 *
 * --------------------------------------------------------
 */

import Link from "next/link";

import {
  ArrowRight,
  Users,
  Handshake,
} from "lucide-react";

type InstitutionalCTAProps = {
  title?: string;

  description?: string;

  className?: string;
};

export default function InstitutionalCTA({
  title = "Join the NICRG Community",

  description = "Collaborate with researchers, policymakers, educators, development partners, and innovators committed to advancing evidence-informed solutions for Nigeria and Africa.",

  className = "",
}: InstitutionalCTAProps) {
  return (
    <section
      className={`
        bg-gradient-to-r
        from-[#16324F]
        via-[#1D4568]
        to-[#0C8A5A]
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
            <Users className="h-10 w-10 text-white" />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            {description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/membership/apply"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-[#16324F]
                transition
                hover:scale-105
              "
            >
              Become a Member

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/collaborate"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/40
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              Collaborate

              <Handshake size={18} />
            </Link>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div>
              <h3 className="text-3xl font-bold text-white">
                20+
              </h3>

              <p className="mt-2 text-white/80">
                Research Programmes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                National
              </h3>

              <p className="mt-2 text-white/80">
                Policy Engagement
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Global
              </h3>

              <p className="mt-2 text-white/80">
                Research Collaboration
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}