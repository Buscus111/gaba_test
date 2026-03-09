import { t, interpolate } from '../locales';

export function useLocale() {
  return { t, interpolate } as const;
}
