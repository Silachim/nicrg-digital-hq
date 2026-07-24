"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Search,
  HeartHandshake,
} from "lucide-react";

import NavigationMenu from "@/components/navigation/NavigationMenu";
import MobileMenu from "@/components/navigation/MobileMenu";
import MenuButton from "@/components/navigation/MenuButton";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* ===========================================
          Utility Bar
      ============================================ */}

      <div className="hidden border-b border-slate-200 bg-slate-950 text-white lg:block">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg: px-8 text-sm">

          <div className="flex items-center gap-6">

            <span>
              info@nicrg.org
            </span>

            <span>
              Abuja, Nigeria
            </span>

          </div>

          <div className="flex items-center gap-6">

            <Link href="/news">
              News
            </Link>

            <Link href="/events">
              Events
            </Link>

            <Link href="/careers">
              Careers
            </Link>

          </div>

        </div>

      </div>

      {/* ===========================================
          Main Navigation
      ============================================ */}

      <header
        className={`
          sticky
          top-0
          z-50
          border-b
          border-slate-200
          bg-white/95
          backdrop-blur-md
          transition-all
          duration-300

          ${
            scrolled
              ? "shadow-lg"
              : "shadow-sm"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-8

            ${
              scrolled
                ? "h-16"
                : "h-20"
            }
          `}
        >

          {/* Logo */}

          <Link
  href="/"
  className="
    flex
    items-center
    flex-shrink-0
    overflow-hidden
  "
>
  <Image
    src="/branding/nicrg-logo-primary.png"
    alt="Nigerian Interdisciplinary Critical Research Group"
    width={180}
    height={48}
    priority
    className="
      block
      h-12
      w-auto
      object-contain
      lg:h-12
      xl:h-12
    "
  />
</Link>
          {/* Desktop Navigation */}

          <NavigationMenu currentPath={pathname} />

          {/* Right Side */}

          <div className="flex items-center gap-3">

            {/* Search */}

            <button
              className="
                hidden
                lg:flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-300
                transition
                hover:border-emerald-700
                hover:text-emerald-700
              "
            >
              <Search size={20} />
            </button>

            {/* Contact */}

            <Link
              href="/contact"
              className="
                hidden
                lg:inline-flex
                rounded-xl
                border
                border-slate-300
                px-5
                py-3
                text-sm
                font-semibold
                transition
                hover:border-emerald-700
                hover:text-emerald-700
              "
            >
              Contact
            </Link>

            {/* Member */}

            <Link
              href="/membership"
              className="
                hidden
                xl:inline-flex
                rounded-xl
                bg-emerald-700
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-emerald-800
              "
            >
              Become a Member
            </Link>

            {/* Donate */}

            <Link
              href="/support"
              className="
                hidden
                xl:inline-flex
                items-center
                gap-2
                rounded-xl
                bg-slate-900
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-slate-800
              "
            >
              <HeartHandshake size={16} />

              Support
            </Link>

            {/* Mobile */}

            <MenuButton
              open={mobileOpen}
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            />

          </div>

        </div>
      </header>

      <MobileMenu
  open={mobileOpen}
  onClose={() => setMobileOpen(false)}
/>

    </>
  );
}