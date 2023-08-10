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

  const refImageToCopy = useRef(null);
  const refImageLeft = useRef(null);
  const refImageRight = useRef(null);
  const [dimensions, setDimensions] = useState({ width: "auto", height: 0 });
  // //   const onImageLoad = ({ target: img }) => {
  // //     setHeight(img.height);
  // //     setWidth(img.Width);
  // //     setTop(img.top);
  // //     setLeft(img.left);
  // //   };

  useEffect(() => {
    const img = document.getElementById("center");
    setHeight(img.height);
  }, [height]);

  useEffect(() => {
    const updateSize = () => {
      if (refImageToCopy.current) {
        setDimensions({
          // width: refImageToCopy.current.offsetWidth,
          height: refImageToCopy.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (refImageLeft.current && refImageRight.current && dimensions) {
      refImageLeft.current.style.width =
        dimensions.width === "auto" ? "auto" : `${dimensions.width}px`;
      refImageLeft.current.style.height = `${dimensions.height}px`;
      refImageRight.current.style.width =
        dimensions.width === "auto" ? "auto" : `${dimensions.width}px`;
      refImageRight.current.style.height = `${dimensions.height}px`;
    }
  }, [dimensions]);

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
        ref={refImageToCopy}
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
          delay: 1.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`absolute top-[0] left-[0]`}
        // className={`absolute top-[0] left-[0] h-[${height}]`}
      >
        <Image
          ref={refImageLeft}
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
          delay: 2.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        // cover the right side of the image
        className={`absolute top-[0] right-[0]`}
        // className={`absolute top-[${top}] left-[${left}]`}
      >
        <Image
          ref={refImageRight}
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
