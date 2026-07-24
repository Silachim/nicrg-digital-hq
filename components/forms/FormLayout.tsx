/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Forms
 * Component: FormLayout
 * Version: 1.0.0
 *
 * Purpose:
 * Shared layout for all NICRG application
 * portals including:
 *
 * • Membership
 * • Volunteer
 * • Donate
 * • Collaborate
 * • Fellowships
 * • Event Registration
 *
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

type FormLayoutProps = {
  badge: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function FormLayout({
  badge,
  title,
  description,
  children,
}: FormLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#16324F] via-[#1D4568] to-[#0C8A5A]">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            {badge}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            {description}
          </p>

        </div>

      </section>

      {/* Form */}

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl bg-white p-10 shadow-lg">

          {children}

        </div>

      </section>

    </main>
  );
}