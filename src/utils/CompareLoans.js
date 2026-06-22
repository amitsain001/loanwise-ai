export const findBestLoan = (loans) => {
  if (!loans.length) return null;

  return [...loans].sort(
    (a, b) =>
      a.totalInterest - b.totalInterest
  )[0];
};