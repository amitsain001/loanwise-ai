export const getAffordabilityStatus =
  (monthlyIncome, emi) => {

    const ratio =
      (emi / monthlyIncome) *
      100;

    if (ratio <= 30)
      return {
        text: "Excellent",
        color: "text-green-400",
      };

    if (ratio <= 40)
      return {
        text: "Good",
        color: "text-cyan-400",
      };

    if (ratio <= 50)
      return {
        text: "Risky",
        color: "text-yellow-400",
      };

    return {
      text: "Not Recommended",
      color: "text-red-400",
    };
  };