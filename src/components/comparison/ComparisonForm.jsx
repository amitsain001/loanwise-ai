import { useState } from "react";
import { calculateEMI } from "../../utils/emiCalculator";
import ComparisonTable from "./ComparisonTable";
import WinnerCard from "./WinnerCard";
import { findBestLoan } from "../../utils/compareLoans";
import toast from "react-hot-toast";

const defaultLoan = {
  amount: 1000000,
  rate: 8.5,
  years: 10,
};

const ComparisonForm = () => {
  const [loan1, setLoan1] = useState(defaultLoan);

  const [loan2, setLoan2] = useState({
    amount: 1000000,
    rate: 9.2,
    years: 10,
  });

  const [loan3, setLoan3] = useState({
    amount: 1000000,
    rate: 10.5,
    years: 10,
  });

  const buildLoan = (loan, id) => {
    const result = calculateEMI(
      loan.amount,
      loan.rate,
      loan.years
    );

    return {
      id,
      ...loan,
      ...result,
    };
  };

  const loans = [
    buildLoan(loan1, 1),
    buildLoan(loan2, 2),
    buildLoan(loan3, 3),
  ];

  const winner = findBestLoan(loans);

    const saveComparison = () => {
      const existing =
        JSON.parse(
          localStorage.getItem(
            "loanComparisons"
          )
        ) || [];

      existing.push({
        date: new Date().toLocaleString(),
        loans,
      });

      localStorage.setItem(
        "loanComparisons",
        JSON.stringify(existing)
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      toast.success(
        "Comparison Saved Successfully!"
      );
    };

    const loanStates = [
      [loan1, setLoan1],
      [loan2, setLoan2],
      [loan3, setLoan3],
    ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="
          text-5xl
          font-bold
          text-center
          mb-10
        "
        >
          Compare Loans
        </h2>

        <WinnerCard winner={winner} />

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mb-10
          "
        >
          {loanStates.map(
            ([loan, setLoan], index) => (
              <div
                key={index}
                className="
                glass
                rounded-3xl
                p-6
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  mb-5
                  "
                >
                  Loan {index + 1}
                </h3>

                <label className="block mb-2 text-sm text-gray-400">
                  Loan Amount (₹)
                </label>

                <input
                  type="number"
                  value={loan.amount}
                  onChange={(e) =>
                    setLoan({
                      ...loan,
                      amount: Number(
                        e.target.value
                      ),
                    })
                  }
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  mb-4
                  "
                />

                <label className="block mb-2 text-sm text-gray-400">
                  Interest Rate (%)
                </label>

                <input
                  type="number"
                  step="0.1"
                  value={loan.rate}
                  onChange={(e) =>
                    setLoan({
                      ...loan,
                      rate: Number(
                        e.target.value
                      ),
                    })
                  }
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  mb-4
                  "
                />

                <label className="block mb-2 text-sm text-gray-400">
                  Tenure (Years)
                </label>

                <input
                  type="number"
                  value={loan.years}
                  onChange={(e) =>
                    setLoan({
                      ...loan,
                      years: Number(
                        e.target.value
                      ),
                    })
                  }
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  "
                />
              </div>
            )
          )}
        </div>

        <ComparisonTable loans={loans} />

        <div className="text-center mt-8">
          <button
            onClick={saveComparison}
            className="
            px-8
            py-4
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            transition
            "
          >
            Save Comparison
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonForm;