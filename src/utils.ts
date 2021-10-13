export function between(test: number, min: number, max: number) {
  if (test < min) return min;
  if (test > max) return max;
  return test;
}
