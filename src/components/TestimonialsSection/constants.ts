import type { Testimonial } from "./types";

export const TESTIMONIALS_EYEBROW = "Built Right";

export const TESTIMONIALS_HEADING = "Backed By Our Customers";

export const TESTIMONIALS_SUBHEAD =
  "Property owners and crews across the Front Range trust us for field repairs, custom fab, and finishes that match the spec.";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "t1",
    quote:
      "They mobilized to our ranch gate the same week, diagnosed a bad weld on the hinge assembly, and rebuilt it so it tracks straight. No callbacks.",
    name: "Jordan M.",
    detail: "Ranch property · Weld County",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We needed a stainless frame for a wash-down area—tight tolerances and clean corners. IronRiver delivered on schedule and the fit-up was spot on.",
    name: "Elena R.",
    detail: "Operations lead · Food processing",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Clear communication on scope and pricing, and the repair outlasted the original work. That is what we want on every job site.",
    name: "Marcus T.",
    detail: "General contractor · Northern Colorado",
    rating: 5,
  },
];
