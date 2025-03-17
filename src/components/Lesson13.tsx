import { motion, useMotionValue, useTransform } from "framer-motion";
const Lesson13 = () => {
  const x = useMotionValue(0);
  // const opacity = useTransform(x, [0, 500], [1, 0]);
  const scale = useTransform(x, [-200, 200], [0.5, 1.3]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20">
        <motion.div
          style={{ x, scale, rotate }}
          drag="x"
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson13;
