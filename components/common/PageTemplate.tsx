import { ReactNode } from "react";

import Breadcrumb from "@/components/common/Breadcrumb";
import PageNavigation from "@/components/common/PageNavigation";
import InstitutionalCTA from "@/components/common/InstitutionalCTA";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type NavigationItem = {
  title: string;
  href: string;
};

type PageTemplateProps = {
  breadcrumbs?: BreadcrumbItem[];

  previous?: NavigationItem;

  next?: NavigationItem;

  related?: NavigationItem[];

  children: ReactNode;

  showBreadcrumb?: boolean;

  showCTA?: boolean;

  showPageNavigation?: boolean;
};

export default function PageTemplate({
  breadcrumbs = [],
  previous,
  next,
  related = [],
  children,
  showBreadcrumb = true,
  showCTA = true,
  showPageNavigation = true,
}: PageTemplateProps) {
  return (
    <>
      {showBreadcrumb && breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} />
      )}

      <main>{children}</main>

      {showPageNavigation && (
        <PageNavigation
          previous={previous}
          next={next}
          related={related}
        />
      )}

      {showCTA && <InstitutionalCTA />}
    </>
  );
}