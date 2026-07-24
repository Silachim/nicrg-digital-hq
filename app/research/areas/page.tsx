import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  GraduationCap,
  Landmark,
  Briefcase,
  HeartPulse,
  Leaf,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";

const researchAreas = [
  {
    title: "Education and Human Development",
    icon: GraduationCap,
    description:
      "Advancing curriculum innovation, teacher education, educational technology, learning sciences, educational leadership, assessment, and evidence-informed education policy to improve learning outcomes across all levels.",
    keywords: [
      "Curriculum",
      "Teacher Education",
      "Learning Sciences",
      "Educational Technology",
    ],
  },
  {
    title: "Governance and Public Policy",
    icon: Landmark,
    description:
      "Strengthening democratic institutions through research on governance, accountability, transparency, leadership, public administration, institutional reform, and policy implementation.",
    keywords: [
      "Governance",
      "Public Policy",
      "Leadership",
      "Institutional Reform",
    ],
  },
  {
    title: "Economy and Sustainable Development",
    icon: Briefcase,
    description:
      "Supporting inclusive economic growth through research on entrepreneurship, labour markets, financial inclusion, rural development, industrial transformation, and sustainable livelihoods.",
    keywords: [
      "Entrepreneurship",
      "Economy",
      "Development",
      "Innovation",
    ],
  },
  {
    title: "Health and Well-being",
    icon: HeartPulse,
    description:
      "Generating evidence to improve health systems, public health interventions, maternal and child health, mental health, disease prevention, and healthcare policy.",
    keywords: [
      "Public Health",
      "Health Systems",
      "Mental Health",
      "Healthcare Policy",
    ],
  },
  {
    title: "Climate, Environment and Sustainability",
    icon: Leaf,
    description:
      "Developing interdisciplinary research addressing climate resilience, renewable energy, environmental governance, biodiversity, and sustainable resource management.",
    keywords: [
      "Climate",
      "Environment",
      "Renewable Energy",
      "Sustainability",
    ],
  },
  {
    title: "Artificial Intelligence and Digital Transformation",
    icon: Cpu,
    description:
      "Investigating responsible AI adoption, digital governance, data science, cybersecurity, digital innovation, and emerging technologies that shape future societies.",
    keywords: [
      "Artificial Intelligence",
      "Data Science",
      "Digital Transformation",
      "Cybersecurity",
    ],
  },
];

export default function ResearchAreasPage() {
  return (
    <>
      {/* Hero */}

      <Section background="emerald">
        <SectionHeader
          badge="Research Excellence"
          title="Research Areas"
          description="NICRG advances interdisciplinary research that addresses Nigeria's most pressing societal challenges through evidence generation, innovation, policy engagement, and collaborative scholarship. Our research portfolio spans multiple disciplines while remaining united by a commitment to sustainable development and national transformation."
        />
      </Section>

      {/* Overview */}

      <Section background="white">
        <SectionHeader
          badge="Overview"
          title="Interdisciplinary Research for National Development"
          description="The Nigerian Interdisciplinary Critical Research Group (NICRG) conducts high-impact research across strategic thematic areas that contribute to evidence-informed policymaking, innovation, institutional strengthening, and sustainable development. Our research ecosystem integrates expertise from education, governance, economics, technology, public health, environmental studies, and emerging disciplines to generate practical solutions to complex societal challenges."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Card key={area.title} className="h-full">
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {area.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {area.keywords.map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="primary"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Research Philosophy */}

      <Section background="slate">
        <SectionHeader
          badge="Research Philosophy"
          title="Evidence. Collaboration. Impact."
          description="NICRG believes that today's societal challenges cannot be solved through isolated disciplinary approaches. We therefore promote collaborative, interdisciplinary, and evidence-driven research that integrates multiple perspectives to generate innovative and sustainable solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card>
            <Users className="h-10 w-10 text-emerald-700" />

            <h3 className="mt-6 text-xl font-bold">
              Collaboration
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Bringing together scholars, practitioners, policymakers,
              industry leaders, and communities to co-create impactful
              knowledge.
            </p>
          </Card>

          <Card>
            <Cpu className="h-10 w-10 text-emerald-700" />

            <h3 className="mt-6 text-xl font-bold">
              Innovation
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Leveraging emerging technologies, data-driven research,
              and interdisciplinary methodologies to address national
              priorities.
            </p>
          </Card>

          <Card>
            <Landmark className="h-10 w-10 text-emerald-700" />

            <h3 className="mt-6 text-xl font-bold">
              Policy Impact
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Translating rigorous academic research into practical
              recommendations that strengthen governance, institutions,
              and sustainable development.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}

      <Section background="white">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary">
            Collaborate With NICRG
          </Badge>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Partner with Our Research Community
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            NICRG welcomes collaboration with universities, government
            institutions, industry, development organisations, civil
            society, and independent researchers committed to advancing
            evidence-informed solutions for Nigeria, Africa, and the
            global community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button href="/research/projects">
              Explore Research Projects
            </Button>

            <Button
              href="/contact"
              variant="secondary"
            >
              Contact Our Research Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}