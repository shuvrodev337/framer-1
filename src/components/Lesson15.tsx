import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson15 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: { opacity: 0, scale: 0.8 },

    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      //  y: 200,
      scale: 0.8, //  scale to 0.8 to match the hidden state.
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20 size-[600px] flex flex-col justify-center items-center ">
        <motion.button
          layout
          onClick={() => setVisible(!visible)}
          className="button"
        >
          Toggle
        </motion.button>
        <AnimatePresence>
          {visible && (
            <motion.div
              variants={box}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Lesson15;
