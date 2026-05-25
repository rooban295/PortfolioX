export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const revealTransition = {
  duration: 0.9,
  ease: easeOutExpo,
} as const;

export const viewportReveal = {
  once: true,
  margin: "0px 0px -60px 0px",
  amount: 0.15,
} as const;
