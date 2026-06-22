const ComparisonTable = ({
  loans,
}) => {
  if (!loans.length)
    return null;

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      overflow-auto
      "
    >
      <table
        className="
        w-full
        text-left
        "
      >
        <thead>
          <tr>
            <th>Loan</th>
            <th>Amount</th>
            <th>Rate</th>
            <th>Years</th>
            <th>EMI</th>
            <th>Interest</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {loans.map(
            (loan) => (
              <tr
                key={loan.id}
                className="
                border-b
                border-slate-700
                "
              >
                <td>
                  Loan {loan.id}
                </td>

                <td>
                  ₹
                  {loan.amount.toLocaleString()}
                </td>

                <td>
                  {loan.rate}%
                </td>

                <td>
                  {loan.years}
                </td>

                <td>
                  ₹
                  {loan.emi.toFixed(
                    0
                  )}
                </td>

                <td>
                  ₹
                  {loan.totalInterest.toFixed(
                    0
                  )}
                </td>

                <td>
                  ₹
                  {loan.totalPayment.toFixed(
                    0
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;