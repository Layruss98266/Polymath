// Minimal keyboard focus trap for modal-style overlays. Attach via the hook
// below. On unmount, focus returns to the element that was active when the
// modal opened.

import { useEffect } from "react";

const FOCUSABLE = [
 "a[href]",
 "button:not([disabled])",
 "input:not([disabled])",
 "textarea:not([disabled])",
 "select:not([disabled])",
 "[tabindex]:not([tabindex='-1'])"
].join(",");

export function useFocusTrap(active: boolean, ref: React.RefObject<HTMLElement | null>) {
 useEffect(() => {
  if (!active || !ref.current) return;
  const root = ref.current;
  const prev = document.activeElement as HTMLElement | null;

  const focusables = () => Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
  const first = focusables()[0];
  first?.focus();

  const onKey = (e: KeyboardEvent) => {
   if (e.key !== "Tab") return;
   const list = focusables();
   if (list.length === 0) return;
   const head = list[0];
   const tail = list[list.length - 1];
   const cur = document.activeElement as HTMLElement | null;
   if (e.shiftKey && cur === head) { e.preventDefault(); tail.focus(); }
   else if (!e.shiftKey && cur === tail) { e.preventDefault(); head.focus(); }
  };

  document.addEventListener("keydown", onKey);
  return () => {
   document.removeEventListener("keydown", onKey);
   // Restore focus to the trigger element so keyboard users do not get
   // dropped at the top of the page.
   prev?.focus?.();
  };
 }, [active, ref]);
}
