import { motion } from "framer-motion";

const Lesson2 = () => {
  //   const parent = {
  //     first: { rotate: 0 },
  //     last: { rotate: 360 },
  //   };
  const parent = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const child = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1 },
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.2,
          //  repeat: Infinity,
          //  repeatType: "reverse",
        }}
        className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
      >
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-md "
        ></motion.div>
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-md "
        ></motion.div>
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-md "
        ></motion.div>
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-md "
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson2;
