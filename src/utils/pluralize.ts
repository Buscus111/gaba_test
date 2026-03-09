export function pluralizeAge(n: number): string {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;

  if (abs >= 11 && abs <= 19) return `${n} лет`;
  if (last === 1) return `${n} год`;
  if (last >= 2 && last <= 4) return `${n} года`;
  return `${n} лет`;
}
