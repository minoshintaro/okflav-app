export function isTruthy(value: unknown): boolean {
  if (typeof value === "string") {
    return value.trim() !== "";
  }
  return !!value;
}
