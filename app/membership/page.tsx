import {
  MembershipHero,
  MembershipOverview,
  MembershipCategories,
  MembershipBenefits,
  MembershipJourney,
  MembershipApplication,
  MembershipQuote,
  MembershipCallout,
} from "@/components/membership";

import {
  membershipHero,
  membershipOverview,
  membershipCategories,
  membershipBenefits,
  membershipJourney,
  membershipApplication,
  membershipQuote,
  membershipCallout,
} from "@/content";

export default function MembershipPage() {
  return (
    <>
      <MembershipHero {...membershipHero} />

      <MembershipOverview {...membershipOverview} />

      <MembershipCategories {...membershipCategories} />

      <MembershipBenefits {...membershipBenefits} />

      <MembershipJourney {...membershipJourney} />

      <MembershipApplication {...membershipApplication} />

      <MembershipQuote {...membershipQuote} />

      <MembershipCallout {...membershipCallout} />
    </>
  );
}