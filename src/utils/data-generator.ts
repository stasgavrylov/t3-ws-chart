// Generate a stream of values in specified range changing
// by no more than `step` per iteration.
export function* getRandomRange(range: [number, number], step: number) {
  const [start, end] = range;
  let nextValue = Math.floor((end - start) / 2);

  while (true) {
    const nextStep = Math.random() > 0.5 ? step : -1 * step;
    nextValue = Math.max(start, Math.min(nextValue + nextStep, end));
    yield nextValue.toFixed(1);
  }
}
