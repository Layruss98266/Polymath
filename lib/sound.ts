// Tiny Web Audio tones, no asset files. Respects the user's mute flag and
// prefers-reduced-motion (treated as a proxy for "do not surprise me").

let _ctx: AudioContext | null = null;

function ctx(): AudioContext | null {
 if (typeof window === "undefined") return null;
 const AC = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext | undefined;
 if (!AC) return null;
 if (!_ctx) _ctx = new AC();
 return _ctx;
}

function quietGain(c: AudioContext, peak: number, decay: number) {
 const g = c.createGain();
 const t = c.currentTime;
 g.gain.setValueAtTime(0, t);
 g.gain.linearRampToValueAtTime(peak, t + 0.01);
 g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
 return g;
}

function tone(freq: number, peak: number, decay: number, type: OscillatorType = "sine") {
 const c = ctx();
 if (!c) return;
 const o = c.createOscillator();
 const g = quietGain(c, peak, decay);
 o.type = type;
 o.frequency.value = freq;
 o.connect(g).connect(c.destination);
 o.start();
 o.stop(c.currentTime + decay + 0.05);
}

function shouldPlay(mute: boolean): boolean {
 if (mute) return false;
 if (typeof window === "undefined") return false;
 if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
 return true;
}

export const Sound = {
 xp(mute: boolean) {
  if (!shouldPlay(mute)) return;
  tone(880, 0.05, 0.18);
 },
 levelUp(mute: boolean) {
  if (!shouldPlay(mute)) return;
  tone(523.25, 0.07, 0.25);
  setTimeout(() => tone(659.25, 0.07, 0.25), 110);
  setTimeout(() => tone(783.99, 0.07, 0.35), 220);
 },
 correct(mute: boolean) {
  if (!shouldPlay(mute)) return;
  tone(660, 0.04, 0.15);
 },
 wrong(mute: boolean) {
  if (!shouldPlay(mute)) return;
  tone(220, 0.05, 0.22, "triangle");
 }
};
