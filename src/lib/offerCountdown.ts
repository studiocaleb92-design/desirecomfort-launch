export const OFFER_COUNTDOWN_MS = 30 * 60 * 1000;

const STORAGE_KEY = "dc-offer-deadline";

/** Deadline for the current visit — resets when the browser session starts. */
export function getOfferDeadline(): number {
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    const deadline = Number(stored);
    if (!Number.isNaN(deadline) && deadline > Date.now()) {
      return deadline;
    }
  }

  const deadline = Date.now() + OFFER_COUNTDOWN_MS;
  sessionStorage.setItem(STORAGE_KEY, String(deadline));
  return deadline;
}

export function getOfferRemainingMs(): number {
  return Math.max(0, getOfferDeadline() - Date.now());
}

export function formatOfferCountdown(remainingMs: number): string {
  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
