import React, { useEffect } from "react";

// import react intersection observer to detect when the component is in view
import { useInView } from "react-intersection-observer";

// import framer motion for animations
import { motion, useAnimation } from "framer-motion";

const Service = () => {
  // get the ref and inView from useInView
  const { ref, inView } = useInView();

  // create a variable for the animation
  const firstBtn = useAnimation();
  const secondBtn = useAnimation();
  const thirdBtn = useAnimation();
  const fourthBtn = useAnimation();

  // use useffect for the animation
  useEffect(() => {
    // if inView is true, start the animation
    if (inView) {
      firstBtn.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          delay: 0.4,
        },
      });

      secondBtn.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.8,
        },
      });

      thirdBtn.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.2,
          delay: 1.2,
        },
      });

      fourthBtn.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.6,
          delay: 1.6,
        },
      });
    }
    // if inView is false, start the animation
    if (!inView) {
      firstBtn.start({
        opacity: 0,
        x: "-100vw",
      });

      secondBtn.start({
        opacity: 0,
        x: "-200vw",
      });

      thirdBtn.start({
        opacity: 0,
        x: "-300vw",
      });

      fourthBtn.start({
        opacity: 0,
        x: "-400vw",
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center flex-col gap-6 mb-8">
      <motion.button animate={firstBtn} className="btn">
        Web Development
      </motion.button>
      <motion.button animate={secondBtn} className="btn">
        Designing
      </motion.button>
      <motion.button animate={thirdBtn} className="btn">
        Backend
      </motion.button>
      <motion.button animate={fourthBtn} className="btn">
        Figma
      </motion.button>
    </div>
  );
};

export default Service;
