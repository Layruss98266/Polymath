// FSRS scheduler , wraps ts-fsrs. Maps our compact CardSR <-> ts-fsrs Card.
import { createEmptyCard, fsrs, generatorParameters, Rating, State, type Card, type Grade as FsrsGrade } from "ts-fsrs";
import type { CardSR } from "./types";

const f = fsrs(generatorParameters({ enable_fuzz: true }));

export type Grade = "again" | "hard" | "good" | "easy";

const RATING: Record<Grade, FsrsGrade> = {
 again: Rating.Again as FsrsGrade,
 hard: Rating.Hard as FsrsGrade,
 good: Rating.Good as FsrsGrade,
 easy: Rating.Easy as FsrsGrade
};

export function newCard(cardKey: string, domainId: string): CardSR {
 const c = createEmptyCard(new Date());
 return toCardSR(cardKey, domainId, c);
}

function toCardSR(cardKey: string, domainId: string, c: Card): CardSR {
 return {
  cardKey, domainId,
  due: c.due.getTime(),
  stability: c.stability,
  difficulty: c.difficulty,
  elapsedDays: c.elapsed_days,
  scheduledDays: c.scheduled_days,
  reps: c.reps,
  lapses: c.lapses,
  state: c.state as 0 | 1 | 2 | 3,
  lastReview: c.last_review ? c.last_review.getTime() : undefined
 };
}

function toCard(s: CardSR): Card {
 return {
  due: new Date(s.due),
  stability: s.stability,
  difficulty: s.difficulty,
  elapsed_days: s.elapsedDays,
  scheduled_days: s.scheduledDays,
  reps: s.reps,
  lapses: s.lapses,
  state: s.state as State,
  last_review: s.lastReview ? new Date(s.lastReview) : undefined
 } as Card;
}

export function grade(card: CardSR, g: Grade, now = new Date()): CardSR {
 const c = toCard(card);
 const result = f.next(c, now, RATING[g]);
 return toCardSR(card.cardKey, card.domainId, result.card);
}

export function dueNow(cards: CardSR[], now = Date.now()): CardSR[] {
 return cards.filter((c) => c.due <= now).sort((a, b) => a.due - b.due);
}
