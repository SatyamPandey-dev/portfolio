import { motion } from "framer-motion";

export default function Hero() {
  const sentence = "Building modern, animated, and responsive websites.";

  // Container for typing animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1, // start AFTER "I am Web Developer" finishes
        staggerChildren: 0.04, // typing speed
      },
    },
  };

  // Each letter animation
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-screen flex justify-center items-center  bg-[#020211] px-6 md:py-28 ">
      <motion.section
        whileHover={{
          rotateX: -6,
          rotateY: 6,
          scale: 1.04,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:h-[75%] py-5 px-1 md:px-4 min-w-[325px]  max-w-full  heroneu flex flex-col justify-center items-center text-center"
      >
        {/* First heading animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-6xl lg:text-8xl font-extrabold text-sky-400 drop-shadow-[0_0_20px_#38bdf8]"
        >
          I am Web Developer
        </motion.h1>

        {/* Typing effect animation */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300 flex flex-wrap justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          duration={2}
          viewport={{ once: false, amount: 0.2 }}
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
        <a href="#about">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            href="#about"
            className="mt-6 px-6 py-3 bg-[#05193852] text-white rounded-md shadow-md hover:bg-[#0d4cfa] hover:text-black hover:cursor-pointer transition btani border-[1px] border-sky-600"
          >
            About me
          </motion.button>
        </a>
      </motion.section>
    </section>
  );
}
