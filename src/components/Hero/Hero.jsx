import { motion }
from "framer-motion";

const Hero = () => {
  return (

    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >

      {/* Existing Background */}
      <div className="hero-bg"></div>

      {/* Floating Glow Effect */}
      <div
        className="
        absolute
        inset-0
        overflow-hidden
        "
      >
        <div
          className="
          absolute
          top-0
          left-0
          w-96
          h-96
          bg-cyan-500/20
          rounded-full
          blur-3xl
          animate-pulse
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-purple-500/20
          rounded-full
          blur-3xl
          animate-pulse
          "
        />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        text-center
        relative
        z-10
        "
      >
        <h1 className="text-6xl font-bold mb-6">
          Calculate Smart.
          <br />
          Borrow Smarter.
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          AI Powered EMI & Loan Comparison Tool
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <button
            className="
            min-w-[220px]
            h-14
            rounded-full
            bg-cyan-500
            hover:bg-cyan-600
            hover:scale-105
            transition-all
            duration-300
            font-semibold
            "
          >
            Get Started
          </button>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="
            min-w-[220px]
            h-14
            rounded-full
            border-2
            border-cyan-500
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            hover:scale-105
            transition-all
            duration-300
            font-semibold
            "
          >
            Built for Digital Heroes
          </a>

        </div>
        
      </motion.div>

    </section>
  );
};

export default Hero;