import GlassCard from "../UI/GlassCard";

const features = [
  "EMI Calculator",
  "Compare 3 Loans",
  "Amortization Schedule",
  "Pie Charts",
  "Timeline Charts",
  "PDF Export",
  "Dark Mode",
  "Responsive UI",
];

const Features = () => {
  return (
    <section
      className="
      py-20
      px-6
      "
    >
      <h2
        className="
        text-5xl
        font-bold
        text-center
        mb-16
        "
      >
        Features
      </h2>

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-4
        gap-6
        "
      >
        {features.map(
          (feature, index) => (
            <GlassCard
              key={index}
            >
              <h3
                className="
                text-lg
                font-semibold
                "
              >
                {feature}
              </h3>
            </GlassCard>
          )
        )}
      </div>
    </section>
  );
};

export default Features;