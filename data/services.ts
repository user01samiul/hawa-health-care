export type ServiceContent = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  whoFor: string[];
  included: string[];
  image: string;
  focus?: boolean;
};

export const SERVICES: ServiceContent[] = [
  {
    slug: "daily-living-assistance",
    name: "Daily Living Assistance",
    blurb: "Hands-on help with everyday routines so days run smoothly.",
    description:
      "Practical day-to-day support that fits around your routine. From morning preparation to evening wind-downs, our support workers help you move through the day with confidence — without taking over the parts you want to do yourself.",
    whoFor: [
      "Participants who need practical help to maintain a daily routine",
      "People returning home after hospital or rehab",
      "Families looking for consistent, named support workers",
    ],
    included: [
      "Personalised support plans tailored to your goals",
      "Help with meal preparation, household tasks and errands",
      "Medication prompts and appointment reminders",
      "Skill-building toward greater independence",
      "Regular check-ins with your support coordinator",
    ],
    image: "/senior-father-wheelchair-young-son-walk.jpg",
  },
  {
    slug: "community-participation",
    name: "Social & Community Participation",
    blurb: "Get out, stay social, and build the connections that matter.",
    description:
      "One of our focus services. We help you take part in the activities, groups and outings that make life feel full — from coffee catch-ups to regular community programs. Support is built around what you actually want to do, not a generic timetable.",
    whoFor: [
      "Participants wanting to build social confidence",
      "People seeking to access local events, classes or groups",
      "Anyone working towards a community-based NDIS goal",
    ],
    included: [
      "1:1 community access with a matched support worker",
      "Help finding and joining groups, classes and clubs",
      "Transport coordination to and from activities",
      "Skill-building around social interactions and routines",
      "Goal tracking shared with your support coordinator",
    ],
    image: "/senior-father-wheelchair-young-son-walk.jpg",
    focus: true,
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    blurb: "Respectful, dignified support for showering, dressing and grooming.",
    description:
      "Personal care delivered with the dignity and respect it deserves. We match workers carefully — same-gender preferences, language, cultural fit — so personal support feels safe and predictable from day one.",
    whoFor: [
      "Participants who need help with bathing, dressing or grooming",
      "People with mobility, sensory or cognitive support needs",
      "Anyone wanting consistent, respectful personal support",
    ],
    included: [
      "Showering, bathing and personal hygiene",
      "Dressing, grooming and continence support",
      "Mobility assistance, transfers and positioning",
      "Workers trained in safe handling and infection control",
      "Care plans reviewed with you and your coordinator",
    ],
    image: "/senior-father-wheelchair-young-son-walk.jpg",
  },
  {
    slug: "domestic-assistance",
    name: "Domestic Assistance",
    blurb: "Cleaning, laundry, meal prep — a calm, well-kept home.",
    description:
      "We help keep the home running so you can focus on the parts of life you enjoy. From regular cleaning to laundry and meal prep, support is steady, reliable, and shaped to how you like things done.",
    whoFor: [
      "Participants who need help maintaining their home",
      "Families balancing care with work or other responsibilities",
      "Anyone with NDIS funding for domestic supports",
    ],
    included: [
      "Regular or ad-hoc household cleaning",
      "Laundry, ironing and linen changes",
      "Grocery shopping and meal preparation",
      "Light gardening and outdoor tidying",
      "Workers matched to your preferences and routine",
    ],
    image: "/senior-father-wheelchair-young-son-walk.jpg",
  },
  {
    slug: "transport-assistance",
    name: "Transport Assistance",
    blurb: "Reliable rides to appointments, work, study and outings.",
    description:
      "Reliable transport that doesn't make you wait. We coordinate trips to medical appointments, work, study, family visits and community activities — with the same support worker wherever possible, so the journey is part of the support.",
    whoFor: [
      "Participants needing transport to appointments and activities",
      "People who require door-to-door or supervised travel",
      "Families looking for safe, consistent transport help",
    ],
    included: [
      "Door-to-door pick-up and drop-off",
      "Transport to medical, allied health and NDIS appointments",
      "Trips to work, study, social and community activities",
      "Insured, well-maintained vehicles",
      "Workers trained in safe travel and accessibility support",
    ],
    image: "/senior-father-wheelchair-young-son-walk.jpg",
  },
  {
    slug: "respite-support",
    name: "Respite Support",
    blurb: "Trusted short-term care that lets families and carers recharge.",
    description:
      "One of our focus services. Trusted short-term care for participants while their primary carer takes time to rest, work, or attend to other things. Whether it's a few hours or a few days, we step in confidently — and step out cleanly when you're ready.",
    whoFor: [
      "Families and carers needing planned or urgent respite",
      "Participants comfortable with short-term substitute support",
      "Coordinators arranging emergency or scheduled cover",
    ],
    included: [
      "In-home and community-based respite",
      "Short-notice and planned respite blocks",
      "Continuity of care via detailed handover notes",
      "Workers matched to the participant's usual routine",
      "Emergency respite available where capacity allows",
    ],
    image: "/senior-father-wheelchair-young-son-walk.jpg",
    focus: true,
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
