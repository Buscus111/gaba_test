import ru from './ru.json';

export const t = ru;

export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}
