import AnimatedCounter from "/src/components/UI/AnimatedCounter";

const Stats = () => {

  const stats = [
    {
      value: 50000,
      title:
        "Users"
    },

    {
      value: 100000000,
      title:
        "Loans Compared"
    },

    {
      value: 99,
      title:
        "Accuracy %"
    },

    {
      value: 24,
      title:
        "Banks"
    },
  ];

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
        grid
        md:grid-cols-4
        gap-8
        "
      >
        {stats.map(
          (
            stat,
            index
          ) => (
            <AnimatedCounter
              key={index}
              value={
                stat.value
              }
              title={
                stat.title
              }
            />
          )
        )}
      </div>
    </section>
  );
};

export default Stats;