import { ReactNode } from "react";

type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "feature"
  | "metric"
  | "executive"
  | "glass"
  | "interactive";

type Padding =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

type Shadow =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

type Rounded =
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

type CardProps = {
  children: ReactNode;

  className?: string;

  variant?: CardVariant;

  padding?: Padding;

  shadow?: Shadow;

  rounded?: Rounded;

  hover?: boolean;

  bordered?: boolean;
};

export default function Card({
  children,

  className = "",

  variant = "default",

  padding = "lg",

  shadow = "sm",

  rounded = "3xl",

  hover = true,

  bordered = true,
}: CardProps) {
  const variants = {
    default:
      "bg-white",

    outlined:
      "bg-white",

    elevated:
      "bg-white",

    feature:
      "bg-white",

    metric:
      "bg-gradient-to-br from-white to-slate-50",

    executive:
      "bg-slate-900 text-white",

    glass:
      "bg-white/70 backdrop-blur-xl",

    interactive:
      "bg-white cursor-pointer",
  };

  const paddingMap = {
    none: "p-0",

    sm: "p-4",

    md: "p-6",

    lg: "p-8",

    xl: "p-10",
  };

  const shadowMap = {
    none: "",

    sm: "shadow-sm",

    md: "shadow-md",

    lg: "shadow-lg",

    xl: "shadow-2xl",
  };

  const roundedMap = {
    lg: "rounded-lg",

    xl: "rounded-xl",

    "2xl": "rounded-2xl",

    "3xl": "rounded-3xl",
  };

  return (
    <div
      className={[
        variants[variant],

        paddingMap[padding],

        shadowMap[shadow],

        roundedMap[rounded],

        bordered
          ? "border border-slate-200"
          : "",

        hover
          ? "transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          : "",

        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}