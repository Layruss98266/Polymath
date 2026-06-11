// Curated multi-domain Paths (§11B). Each pulls from several domains.
// Once those domains exist in DOMAIN_INDEX, the path is "live."

export type Path = {
  id: string;
  name: string;
  hue: string;
  tagline: string;
  domains: string[];   // domain ids in suggested order
  capstone: string;
};

export const PATHS: Path[] = [
  {
    id: "hard_to_manipulate",
    name: "Become hard to manipulate",
    hue: "#a78bfa",
    tagline: "Spot the levers before they're pulled on you.",
    domains: ["psychology", "marketing", "negotiation", "communication"],
    capstone: "Catch yourself almost-buying something in the next 7 days. Document which lever (scarcity, social proof, anchoring, etc.) almost worked. Bonus: explain it to a friend who fell for the same one."
  },
  {
    id: "money_from_zero",
    name: "Money from zero",
    hue: "#facc15",
    tagline: "Build a sane financial life from the ground up.",
    domains: ["personal_finance", "investing", "mental_models"],
    capstone: "Ship a one-page personal financial plan. Income, fixed costs, savings rate, current buffer, top 3 goals + horizons + automated mechanisms for each."
  },
  {
    id: "build_and_sell",
    name: "Build and sell a product",
    hue: "#ff6b5e",
    tagline: "Find a real problem, make a thing, get it bought.",
    domains: ["entrepreneurship", "marketing", "communication"],
    capstone: "Ship one public piece of marketing for something real, run it for 7 days, report what you'd change next."
  },
  {
    id: "think_clearly",
    name: "Think clearly",
    hue: "#34d399",
    tagline: "Better tools for noticing how you're wrong.",
    domains: ["mental_models", "learning", "famous_laws"],
    capstone: "Pick one decision you're about to make. Run it through 3 mental models (e.g. inversion, opportunity cost, second-order effects). Write the result."
  }
];
