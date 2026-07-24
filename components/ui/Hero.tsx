import { ReactNode } from "react";

import Container from "@/components/common/Container";

import Badge from "./Badge";
import Button from "./Button";

type HeroButton = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type HeroProps = {
  badge?: ReactNode;

  title: ReactNode;

  description?: ReactNode;

  primaryButton?: HeroButton;

  secondaryButton?: HeroButton;

  align?: "left" | "center";

  background?:
    | "white"
    | "slate"
    | "gradient"
    | "emerald";

  children?: ReactNode;

  className?: string;
};

export default function Hero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  align = "left",
  background = "white",
  children,
  className = "",
}: HeroProps) {
  const backgrounds = {
    white:
      "bg-white text-slate-900",

    slate:
      "bg-slate-950 text-white",

    emerald:
      "bg-emerald-700 text-white",

    gradient:
      "bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white",
  };

  const descriptionColor =
    background === "white"
      ? "text-slate-600"
      : "text-slate-300";

  const alignment =
    align === "center"
      ? "mx-auto max-w-4xl text-center"
      : "max-w-5xl";

  return (
    <section
      className={`relative overflow-hidden py-32 ${backgrounds[background]} ${className}`}
    >
      {background === "gradient" && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        </div>
      )}

      <Container className="relative z-10">
        <div className={alignment}>
          {badge && (
            <Badge variant="primary">
              {badge}
            </Badge>
          )}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            {title}
          </h1>

          {description && (
            <p
              className={`mt-8 max-w-3xl text-xl leading-9 ${descriptionColor} ${
                align === "center"
                  ? "mx-auto"
                  : ""
              }`}
            >
              {description}
            </p>
          )}

          {(primaryButton ||
            secondaryButton) && (
            <div
              className={`mt-12 flex flex-wrap gap-5 ${
                align === "center"
                  ? "justify-center"
                  : ""
              }`}
            >
              {primaryButton && (
                <Button
                  href={primaryButton.href}
                  onClick={
                    primaryButton.onClick
                  }
                >
                  {primaryButton.label}
                </Button>
              )}

              {secondaryButton && (
                <Button
                  href={
                    secondaryButton.href
                  }
                  onClick={
                    secondaryButton.onClick
                  }
                  variant="secondary"
                >
                  {secondaryButton.label}
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}