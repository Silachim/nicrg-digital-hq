/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Common Component
 * Component: PageNavigation
 * Version: 1.0.0
 *
 * Purpose:
 * Displays previous, next, and related
 * navigation links at the bottom of
 * institutional pages.
 *
 * Used In:
 * • About
 * • Research
 * • Publications
 * • Programmes
 * • News
 * • Membership
 *
 * --------------------------------------------------------
 */

import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type NavigationLink = {
  title: string;

  href: string;
};

type PageNavigationProps = {
  previous?: NavigationLink;

  next?: NavigationLink;

  related?: NavigationLink[];

  className?: string;
};

export default function PageNavigation({
  previous,
  next,
  related = [],
  className = "",
}: PageNavigationProps) {
  return (
    <section
      className={`
        border-t
        border-slate-200
        bg-slate-50
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Previous / Next */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            {previous && (
              <Link
                href={previous.href}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition
                  hover:border-emerald-600
                  hover:shadow-md
                "
              >
                <ArrowLeft
                  className="
                    text-emerald-700
                    transition
                    group-hover:-translate-x-1
                  "
                  size={22}
                />

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Previous
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-900">
                    {previous.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>

          <div>
            {next && (
              <Link
                href={next.href}
                className="
                  group
                  flex
                  items-center
                  justify-end
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-right
                  transition
                  hover:border-emerald-600
                  hover:shadow-md
                "
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Next
                  </p>

                  <h3 className="mt-1 font-semibold text-slate-900">
                    {next.title}
                  </h3>
                </div>

                <ArrowRight
                  className="
                    text-emerald-700
                    transition
                    group-hover:translate-x-1
                  "
                  size={22}
                />
              </Link>
            )}
          </div>

        </div>

        {/* Continue Exploring */}

        {related.length > 0 && (
          <div className="mt-16">

            <h2 className="text-2xl font-bold text-slate-900">
              Continue Exploring
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Discover additional sections related to this topic.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    transition
                    hover:border-emerald-600
                    hover:shadow-md
                  "
                >
                  <div className="flex items-center justify-between">

                    <span className="font-semibold text-slate-800">
                      {item.title}
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-emerald-700"
                    />

                  </div>
                </Link>
              ))}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}