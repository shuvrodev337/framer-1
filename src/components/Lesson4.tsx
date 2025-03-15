import { motion } from "framer-motion";
import { useRef } from "react";

const Lesson4 = () => {
  const parent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 3,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
    tap: {
      boxShadow: "0px 10px 10px #000",
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
          whileTap="tap"
          drag
          dragSnapToOrigin
          dragConstraints={parentRef}
          dragElastic={0.2}
          //  dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson4;
