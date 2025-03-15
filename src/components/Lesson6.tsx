import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
const Lesson6 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    /*
** why  setToggle(!toggle) will fail to update the correct state of toggle as expected ?

State updates in React are asynchronous. When we call setToggle(!toggle), the value of toggle inside handleToggle
is still the old value at the time the function was called.

This means:

Initially, toggle is false.
When we click the button, handleToggle executes.
setToggle(!toggle) schedules the update, but toggle is still false inside handleToggle.
if (toggle) check still sees false (the old value), so it executes the else block.

Instead of relying on toggle, use the functional form of setState, which provides the most recent value.

*/

    setToggle((prevToggle) => {
      const newToggle = !prevToggle; // Get the updated value

      if (newToggle) {
        controls.start({
          x: 200,
          transition: { duration: 1 },
        });
      } else {
        controls.start({
          x: -200,
          transition: { duration: 1 },
        });
      }

      return newToggle; // Update state
    });
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen ">
      <button
        onClick={handleToggle}
        className="bg-green-700 px-6 py-2 text-white rounded-xl"
      >
        Move
      </button>
      <div className="border border-blue-600 p-20">
        <motion.div
          animate={controls}
          className="bg-purple-800 size-64 rounded-md flex flex-wrap gap-4 p-4 justify-center items-center"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson6;
