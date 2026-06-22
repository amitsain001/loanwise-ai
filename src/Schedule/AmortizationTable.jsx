import { useState } from "react";

const AmortizationTable = ({ schedule }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedRows = showAll
    ? schedule
    : schedule.slice(0, 10);

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      overflow-auto
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-5
        "
      >
        Amortization Schedule
      </h2>

      <table
        className="
        w-full
        text-left
        "
      >
        <thead>
          <tr>
            <th>Month</th>
            <th>EMI</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Balance</th>
          </tr>
        </thead>

        <tbody>
          {displayedRows.map((row) => (
            <tr
              key={row.month}
              className="
              border-b
              border-slate-700
              "
            >
              <td>{row.month}</td>
              <td>₹{row.emi}</td>
              <td>₹{row.interest}</td>
              <td>₹{row.principal}</td>
              <td>₹{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {schedule.length > 10 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              setShowAll(!showAll)
            }
            className="
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            transition-all
            duration-300
            font-semibold
            "
          >
            {showAll
              ? "Show Less"
              : `Show More (${schedule.length - 10} Remaining Records)`}
          </button>
        </div>
      )}
    </div>
  );
};

export default AmortizationTable;