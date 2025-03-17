import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Lesson14 = () => {
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (e) => {
    console.log(e);
  });

  useMotionValueEvent(scrollYProgress, "change", (e) => {
    console.log(e);
  });
  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-purple-800 w-full rounded-md h-10  fixed top-0"
      ></motion.div>
      <div className="bg-red-500 h-screen mt-20"></div>
    </div>
  );
};

export default Lesson14;
