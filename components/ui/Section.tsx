import { ReactNode } from "react";
import Container from "@/components/common/Container";

type SectionProps = {
  children: ReactNode;
  background?: "white" | "slate" | "emerald" | "gradient";
  className?: string;
  decoration?: ReactNode;
};

export default function Section({
  children,
  background = "white",
  className = "",
  decoration,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    slate: "bg-slate-50",
    emerald: "bg-emerald-50",
    gradient:
      "bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white",
  };

  return (
    <section
      className={`relative overflow-hidden py-24 ${backgrounds[background]} ${className}`}
    >
      {decoration}

      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  );
}