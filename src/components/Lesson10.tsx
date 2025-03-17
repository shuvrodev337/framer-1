import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Lesson10 = () => {
  const viewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewRef, { once: true });
  return (
    <>
      <div className="bg-emerald-400 h-screen "></div>
      <div className="flex flex-col gap-6 justify-center items-center h-screen ">
        <div className="border border-blue-600 p-20">
          <motion.div
            ref={viewRef}
            animate={
              inView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                      ease: "easeIn",
                      duration: 0.3,
                    },
                  }
                : { x: -500, opacity: 0 }
            }
            className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Lesson10;
