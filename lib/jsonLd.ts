// Safe JSON-LD stringifier. JSON.stringify does not escape the literal
// `</script>` sequence, so a concept title or description containing it
// would break out of the inline <script> tag and open an injection vector.
// This helper escapes that sequence (and a couple of other commonly
// recommended ones) so dangerouslySetInnerHTML stays safe even when
// content is authored loosely.
const LS = " ";
const PS = " ";
export function safeJsonLd(value: unknown): string {
 return JSON.stringify(value)
  .replace(/<\/(script)/gi, "<\\/$1")
  .replace(/<!--/g, "<\\!--")
  .split(LS).join("\\u2028")
  .split(PS).join("\\u2029");
}
