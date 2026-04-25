import type { Testimonial } from "./types";

export const TESTIMONIALS_EYEBROW = "Built Right";

export const TESTIMONIALS_HEADING = "Backed By Our Customers";

export const TESTIMONIALS_SUBHEAD =
  "Property owners and crews across the Front Range trust us for field repairs, custom fab, and finishes that match the spec.";

/** Keep every `quote` the same length so cards stay even height (±0 chars here). */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "t0",
    quote:
      "IronRiver is our first pick for welding and fabrication on the Front Range. Honest estimates and schedules, work that fits the first time, steady attention on a field repair or a full custom build.",
    name: "Front Range crew",
    detail: "Commercial & industrial partner",
    rating: 5,
  },
  {
    id: "t1",
    quote:
      "If you need custom window well covers, talk to Reece Gazdik at IronRiver Fabrication. Easy to work with, fast scheduling, and they installed the day after our first measurements with clear updates.",
    name: "Homeowner",
    detail: "Residential · Northern Colorado",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Shout out to Reece Gazdik and IronRiver Fabrication for custom fitted window well covers that fit right. If you need that work, we recommend them ten out of ten and would call them again next time.",
    name: "Morgan P.",
    detail: "Residential · Window wells",
    rating: 5,
  },
];
