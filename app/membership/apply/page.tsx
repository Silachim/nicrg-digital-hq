import FormLayout from "@/components/forms/FormLayout";

export default function MembershipApplicationPage() {
  return (
    <FormLayout
      badge="Membership"
      title="Membership Application"
      description="Become part of Nigeria's premier interdisciplinary research network. Complete the application below to begin your membership journey."
    >
      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Membership Application
          </h2>

          <p className="mt-3 text-slate-600 leading-8">
            The digital membership application portal is currently under
            development. The full application system, document upload,
            application tracking, and automated review workflow will be
            available in the next platform release.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-xl font-semibold">
            Information You Will Be Asked To Provide
          </h3>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
            <li>Personal Information</li>
            <li>Institution / Organization</li>
            <li>Professional Position</li>
            <li>Research Interests</li>
            <li>Membership Category</li>
            <li>Professional Biography</li>
            <li>Curriculum Vitae (CV)</li>
            <li>Supporting Documents</li>
          </ul>
        </div>

      </div>
    </FormLayout>
  );
}