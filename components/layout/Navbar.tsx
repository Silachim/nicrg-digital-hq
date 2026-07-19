import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Frameworks", href: "/frameworks" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#112B45] text-white font-bold">
            N
          </div>

          <div>
            <h1 className="text-lg font-bold text-[#112B45]">
              NICRG
            </h1>
            <p className="text-xs text-slate-500">
              Nigerian Interdisciplinary Critical Research Group
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#0C8A5A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/join"
          className="rounded-lg bg-[#0C8A5A] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#096E49]"
        >
          Join Network
        </Link>
      </div>
    </header>
  );
}