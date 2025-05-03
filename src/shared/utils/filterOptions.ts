import { normalizeText } from "./normalizeText";

export function filterOptions<T extends { id: number | null, name: string }>(options: T[], query: string): T[] {
  if (query === '') return options;

  const matched: T[] = [];
  const filtered: T[] = [];

  const normalizedQuery = normalizeText(query);

  for (const item of options) {
    const normalizedName = normalizeText(item.name);

    if (normalizedName === normalizedQuery) {
      matched.push(item);
    } else if (normalizedName.startsWith(normalizedQuery)) {
      filtered.push(item);
    }
  }

  return [...matched, ...filtered];
}
