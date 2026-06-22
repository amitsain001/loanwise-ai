import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="glass rounded-3xl p-6 text-center">
      <h2 className="text-4xl font-bold text-cyan-400">
        {count.toLocaleString()}
      </h2>

      <p className="mt-2 text-gray-300">
        {title}
      </p>
    </div>
  );
};

export default AnimatedCounter;