import { motion } from "framer-motion";

const ResultCard = ({
  title,
  value,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
      glass
      rounded-3xl
      p-6
      text-center
      "
    >
      <p
        className="
        text-gray-400
        mb-2
        "
      >
        {title}
      </p>

      <h3
        className="
          text-2xl
          font-bold
          text-cyan-400
        "
      >
        ₹{value}
      </h3>
    </motion.div>
  );
};

export default ResultCard;