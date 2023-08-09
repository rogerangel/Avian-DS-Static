"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import IMG_0097_center from "../../public/IMG_0097_center.png";
import IMG_0097_left from "../../public/IMG_0097_left.png";
import IMG_0097_right from "../../public/IMG_0097_right.png";

function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  //get the height of the image so the div can be the same height
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  //get the top and left of the image so the div can be the same height
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  //   const onImageLoad = ({ target: img }) => {
  //     setHeight(img.height);
  //     setWidth(img.Width);
  //     setTop(img.top);
  //     setLeft(img.left);
  //   };

  useEffect(() => {
    const img = document.getElementById("center");
    setHeight(img.height);
    setWidth(img.Width);
    setTop(img.top);
    setLeft(img.left);
  }, []);

  // how do i auto adjust the height of the div to the height of the image?

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative"
    >
      <Image
        src={IMG_0097_center}
        alt="Avian Driving School Front Image"
        width="auto"
        height="auto"
        id="center"
        // onLoad={onImageLoad}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`absolute top-[0] left-[0] h-[${height}]`}
        // className={`absolute top-[${top}] left-[${left}]`}
      >
        <Image
          src={IMG_0097_left}
          alt="Avian Driving School Front Image"
          width="auto"
          height={height}
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{
          duration: 0.8,
          delay: 1.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        // cover the right side of the image
        className={`absolute top-[0] right-[0]`}
        // className={`absolute top-[${top}] left-[${left}]`}
      >
        <Image
          src={IMG_0097_right}
          alt="Avian Driving School Front Image"
          width="auto"
          height={height}
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
