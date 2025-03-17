import { motion, useCycle } from "framer-motion";
const Lesson9 = () => {
  const boxnimations = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100, opacity: 0.6 },
    { x: 0, y: 0, opacity: 0.4 },
    { x: -100, y: -100, opacity: 0 },
  ];
  const [animations, cycle] = useCycle(...boxnimations);

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20">
        <motion.div
          animate={animations}
          onTap={() => cycle()}
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson9;
