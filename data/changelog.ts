// Per-domain content changelog. Surfaced on the Domain detail page so users
// can see when content was meaningfully updated and what changed.

export type Change = {
 date: string;       // YYYY-MM
 note: string;
};

export const CHANGELOG: Record<string, Change[]> = {
 marketing: [
  { date: "2026-06", note: "Rewritten in warmer voice. First 3 concepts upgraded with definitions, beginner/expert views, concept quizzes, and basic/easy/advanced tasks. 4 subdomains added." }
 ],
 ai_ml: [
  { date: "2026-06", note: "Rewritten with chef-and-pupil analogy. First 2 concepts (training vs inference, tokens) upgraded with definitions, beginner/expert views, concept quizzes, and task ladder. 4 subdomains added." }
 ],
 personal_finance: [
  { date: "2026-06", note: "Rewritten with leaky-bucket framing. First 2 concepts (spend less than you earn, emergency fund) upgraded with all new fields. 4 subdomains added." }
 ],
 psychology:       [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 learning:         [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 communication:    [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 negotiation:      [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 investing:        [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 entrepreneurship: [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 tech:             [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 mental_models:    [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 health:           [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 nutrition:        [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 famous_laws:      [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }],
 law:              [{ date: "2026-06", note: "Voice humanized. 4 subdomains added." }]
};

export function getChangelog(domainId: string): Change[] {
 return CHANGELOG[domainId] ?? [];
}
