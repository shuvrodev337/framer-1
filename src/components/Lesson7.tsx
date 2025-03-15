import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
const Lesson7 = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({
      x: 90,
      transition: { duration: 1, delay: i * 1 },
    }));
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20">
        <motion.div
          animate={controls}
          custom={0}
          className="bg-purple-800 size-34 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
        <motion.div
          animate={controls}
          custom={1}
          className="bg-purple-800 size-34 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
        <motion.div
          animate={controls}
          custom={2}
          className="bg-purple-800 size-34 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson7;
