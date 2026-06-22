import { getAffordabilityStatus } from "../../utils/affordability";

const AffordabilityIndicator = ({
  income,
  emi,
}) => {
  const status =
    getAffordabilityStatus(
      income,
      emi
    );

  return (
    <div
      className="
      glass
      p-6
      rounded-3xl
      mt-6
      "
    >
      <h3
        className="
        text-xl
        font-semibold
        mb-3
        "
      >
        Loan Affordability
      </h3>

      <p
        className={`
          text-2xl
          font-bold
          ${status.color}
        `}
      >
        {status.text}
      </p>
    </div>
  );
};

export default AffordabilityIndicator;