// Concept-count snapshot. Refreshed manually when content grows substantially.
// Kept as a static constant so it can be referenced from server components
// (HomeStats, opengraph-image) without a synchronous loadDomain fan-out.
//
// To refresh: `grep -cE '^   t: "' data/domains/*.ts | awk -F: '{s+=$2} END {print s}'`
export const CONCEPT_COUNT_TOTAL = 200;
