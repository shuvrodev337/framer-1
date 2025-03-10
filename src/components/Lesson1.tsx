import { motion } from "framer-motion";

const Lesson1 = () => {
  const initial = { rotate: 0 };
  const animate = { rotate: 360 };
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={initial} // intial stage of animation
        animate={animate} // last stage of animation
        transition={{ duration: 2, type: "spring" }}
        className="bg-purple-800 size-36"
      ></motion.div>
    </div>
  );
};

export default Lesson1;
