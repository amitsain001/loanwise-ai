const WinnerCard = ({ winner }) => {
  if (!winner) return null;

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      mb-8
      border
      border-green-500
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        text-green-400
        "
      >
        🏆 Recommended Loan
      </h2>

      <p className="mt-3 text-gray-300">
        This loan has the lowest
        overall interest cost.
      </p>

      <div className="mt-4">
        <p>
          Loan {winner.id}
        </p>

        <p>
          EMI :
          ₹{winner.emi.toFixed(0)}
        </p>

        <p>
          Total Interest :
          ₹
          {winner.totalInterest.toFixed(
            0
          )}
        </p>

        <p>
          Total Payment :
          ₹
          {winner.totalPayment.toFixed(
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default WinnerCard;