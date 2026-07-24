"use client";

import Link from "next/link";

import MegaMenu from "./MegaMenu";
import { navigation } from "./navigation";

type NavigationMenuProps = {
  currentPath: string;
};

export default function NavigationMenu({
  currentPath,
}: NavigationMenuProps) {
  return (
    <nav className="hidden items-center gap-10 xl:flex">
      {navigation.map((menu) => {
        const active =
          currentPath === menu.href ||
          (menu.href !== "/" &&
            currentPath.startsWith(menu.href));

        return (
          <div
            key={menu.title}
            className="group relative"
          >
            <Link
              href={menu.href}
              className={`
                relative
                text-[15px]
                font-semibold
                transition-all
                duration-200

                ${
                  active
                    ? "text-emerald-700"
                    : "text-slate-700 hover:text-emerald-700"
                }

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:bg-emerald-700
                after:transition-all
                after:duration-300

                ${
                  active
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              {menu.title}
            </Link>

            <MegaMenu
              items={menu.items}
            />
          </div>
        );
      })}
    </nav>
  );
}