import { useDragControls, motion } from "framer-motion";
const Lesson12 = () => {
  const controls = useDragControls();

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20">
        <div
          onPointerDown={(e) => controls.start(e)}
          className="w-32 h-12 bg-fuchsia-700 rounded-xl m-2 mx-auto"
        ></div>
        <motion.div
          drag="x"
          dragControls={controls}
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson12;
