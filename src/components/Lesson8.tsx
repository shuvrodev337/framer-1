import { motion, useCycle } from "framer-motion";
const Lesson8 = () => {
  const [x, cycle] = useCycle(0, 100, 0, -100);

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20">
        <motion.div
          animate={{ x: x }}
          onTap={() => cycle()}
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson8;
