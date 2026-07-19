import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="font-bold text-slate-900">
              Nigerian Interdisciplinary Critical Research Group
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Advancing evidence-informed research, policy, and innovation for
              sustainable national development.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} NICRG. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}