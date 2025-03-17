import { useAnimate } from "framer-motion";
import { useEffect } from "react";
const Lesson11 = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    // animate(scope.current, { rotate: 45  });
    animate([
      [scope.current, { rotate: 0 }],
      [scope.current, { rotate: 45, opacity: 0 }],
      [scope.current, { rotate: 90, opacity: 1 }],
      [scope.current, { rotate: 0 }],
      [scope.current, { rotate: 45, opacity: 0 }],
      [scope.current, { rotate: 0, opacity: 1 }],
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <div className="border border-blue-600 p-20">
        <div
          ref={scope}
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></div>
      </div>
    </div>
  );
};

export default Lesson11;
