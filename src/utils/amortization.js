export const generateSchedule = (
  principal,
  annualRate,
  years
) => {

  const schedule = [];

  const monthlyRate =
    annualRate / 12 / 100;

  const months =
    years * 12;

  const emi =
    (
      principal *
      monthlyRate *
      Math.pow(
        1 + monthlyRate,
        months
      )
    ) /
    (
      Math.pow(
        1 + monthlyRate,
        months
      ) - 1
    );

  let balance =
    principal;

  for (
    let month = 1;
    month <= months;
    month++
  ) {

    const interest =
      balance *
      monthlyRate;

    const principalPaid =
      emi - interest;

    balance -=
      principalPaid;

    schedule.push({
      month,
      emi:
        emi.toFixed(2),

      interest:
        interest.toFixed(2),

      principal:
        principalPaid.toFixed(2),

      balance:
        Math.max(
          balance,
          0
        ).toFixed(2),
    });
  }

  return schedule;
};