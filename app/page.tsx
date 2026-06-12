import { DailyQuest } from "@/components/DailyQuest";
import { DailyQuote } from "@/components/DailyQuote";
import { SessionPicker } from "@/components/SessionPicker";
import { DomainGrid } from "@/components/DomainGrid";
import { FocusTimer } from "@/components/FocusTimer";
import { ContinueLearning } from "@/components/ContinueLearning";
import { ConceptOfTheDay } from "@/components/ConceptOfTheDay";
import { HomeHero } from "@/components/HomeHero";
import { HomeShell } from "@/components/HomeShell";

export default function HomePage() {
 return (
  <HomeShell
   hero={<HomeHero />}
   quote={<DailyQuote />}
   conceptOfDay={<ConceptOfTheDay />}
   continueLearning={<ContinueLearning />}
   dailyQuest={<DailyQuest />}
   sessionPicker={<SessionPicker />}
   focusTimer={<FocusTimer />}
   domainGrid={<DomainGrid />}
  />
 );
}
