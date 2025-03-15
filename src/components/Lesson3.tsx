import { motion } from "framer-motion";

const Lesson3 = () => {
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
      scale: 1,
      rotate: 45,
    },
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log("Hover start")}
        onHoverEnd={() => console.log("Hover end")}
        className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
      ></motion.div>
    </div>
  );
};

export default Lesson3;
