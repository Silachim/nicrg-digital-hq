import Container from "@/components/common/Container";

import Button from "./Button";

type CTAButton = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type CTAProps = {
  title: string;
  description: string;

  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;

  className?: string;
};

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = "",
}: CTAProps) {
  return (
    <Container className={className}>
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-5xl font-extrabold text-white">
          {title}
        </h2>

        <p className="mt-8 text-xl leading-9 text-slate-200">
          {description}
        </p>

        {(primaryButton || secondaryButton) && (
          <div className="mt-12 flex flex-wrap justify-center gap-5">

            {primaryButton && (
              <Button
                href={primaryButton.href}
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </Button>
            )}

            {secondaryButton && (
              <Button
                variant="secondary"
                href={secondaryButton.href}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.label}
              </Button>
            )}

          </div>
        )}

      </div>
    </Container>
  );
}