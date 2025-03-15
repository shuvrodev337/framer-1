import { motion } from "framer-motion";
import { useRef } from "react";
const Lesson5 = () => {
  const parent = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      rotate: [0, 300, -300, 0],
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 3,
        repeat: Infinity,
        opacity: {
          duration: 0.5,
        },
      },
    },
  };
  const parentRef = useRef(null);
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20" ref={parentRef}>
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson5;
