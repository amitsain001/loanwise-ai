import {
  useState,
} from "react";

import {
  calculateEMI,
} from "../../utils/emiCalculator";

import ResultCard from "./ResultCard";
import AffordabilityIndicator from "./AffordabilityIndicator";

import {
  motion,
} from "framer-motion";

import PieChartSection from "/src/Charts/PieChartSection";

import TimelineChart from "/src/Charts/TimelineChart";

import AmortizationTable from "/src/Schedule/AmortizationTable";

import {
 generateSchedule
} from "../../utils/amortization";


const LoanForm = () => {
  const [loanAmount,
    setLoanAmount] =
    useState(1000000);

  const [interestRate,
    setInterestRate] =
    useState(8.5);

  const [tenure,
    setTenure] =
    useState(10);

  const [income,
    setIncome] =
    useState(100000);

  const result =
    calculateEMI(
      loanAmount,
      interestRate,
      tenure
    );

    const schedule =
        generateSchedule(
        loanAmount,
        interestRate,
        tenure
    );

  return (
    <section
      className="
      py-20
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        "
      >
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="
          text-5xl
          font-bold
          text-center
          mb-14
          "
        >
          EMI Calculator
        </motion.h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          "
        >
          <div
            className="
            glass
            rounded-3xl
            p-8
            "
          >
            {/* Loan Amount */}

            <label>
              Loan Amount
            </label>

            <input
              type="range"
              min="100000"
              max="10000000"
              step="50000"
              value={loanAmount}
              onChange={(e) =>
                setLoanAmount(
                  Number(
                    e.target.value
                  )
                )
              }
              className="
              w-full
              mt-2
              "
            />

            <p className="mb-6">
              ₹
              {loanAmount.toLocaleString()}
            </p>

            {/* Interest */}

            <label>
              Interest Rate
            </label>

            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(
                  Number(
                    e.target.value
                  )
                )
              }
              className="
              w-full
              mt-2
              "
            />

            <p className="mb-6">
              {interestRate}%
            </p>

            {/* Tenure */}

            <label>
              Tenure
            </label>

            <input
              type="range"
              min="1"
              max="30"
              value={tenure}
              onChange={(e) =>
                setTenure(
                  Number(
                    e.target.value
                  )
                )
              }
              className="
              w-full
              mt-2
              "
            />

            <p className="mb-6">
              {tenure} Years
            </p>

            {/* Income */}

            <label>
              Monthly Income
            </label>

            <input
              type="number"
              value={income}
              onChange={(e) =>
                setIncome(
                  Number(
                    e.target.value
                  )
                )
              }
              className="
              w-full
              mt-2
              p-3
              rounded-xl
              bg-slate-800
              "
            />
          </div>

          <div
            className="
            grid
            gap-6
            "
          >
            <ResultCard
              title="Monthly EMI"
              value={result.emi.toFixed(
                0
              )}
            />

            <ResultCard
              title="Total Payment"
              value={result.totalPayment.toFixed(
                0
              )}
            />

            <ResultCard
              title="Total Interest"
              value={result.totalInterest.toFixed(
                0
              )}
            />

            <AffordabilityIndicator
              income={income}
              emi={result.emi}
            />

            <h2
                className="
                text-4xl
                font-bold
                text-center
                "
            >
                Loan Analytics
            </h2>

            <div
                className="
                mt-14
                grid
                lg:grid-cols-2
                gap-8
                items-stretch
                "
            >

                <PieChartSection
                    principal={loanAmount}
                    interest={
                        result.totalInterest
                    }
                />

                <TimelineChart
                    schedule={schedule}
                />
            </div>

            <div className="mt-14">
                <AmortizationTable
                    schedule={schedule}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanForm;