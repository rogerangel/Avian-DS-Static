"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function PackageCards({ banner, price, features, featureIcons }) {
  // Animation
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className="overflow-visible relative m-10 max-w-[348px] h-[402px] w-full rounded-3xl bg-white p-4 text-center shadow-2xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex flex-row justify-end">
        <div className="absolute mt-2 -left-10 md:w-full max-w-[220px] w-2/3">
          {" "}
          {/* Adjust the max-w value as needed */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 220 80"
            className="w-full"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(254, 144, 76)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(253, 185, 90)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 0 0 H 220 V 80 0 Q 220 0, 180 80 H 30 Q 0 80, 0 50 Z"
              fill="url(#grad1)"
            />
            <text
              x="38%"
              y="50%"
              dy=".3em"
              textAnchor="middle"
              fill="white"
              fontFamily="Verdana"
              fontSize="30"
            >
              {banner}
            </text>
            <line
              x1="200"
              y1="-5"
              x2="140"
              y2="115"
              stroke="white"
              strokeWidth="7"
            />
          </svg>
        </div>

        {/* <div className="absolute mt-2 -left-10">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(254, 144, 76)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(253, 185, 90)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M 0 0 H 220 V 80 0 Q 220 0, 180 80 H 30 Q 0 80, 0 50 Z"
            // fill="rgb(254, 144, 76)"
            fill="url(#grad1)"
          />
          <text
            x="84"
            y="50"
            textAnchor="middle"
            fill="white"
            fontFamily="Verdana"
            fontSize="30"
          >
            {banner}
          </text>
          <line
            x1="200"
            y1="-5"
            x2="140"
            y2="115"
            stroke="white"
            strokeWidth="7"
          />
        </svg>
      </div> */}
        <div className="text-5xl md:text-6xl mt-5 flex flex-col items-end">
          <h1 className="font-bold text-gray-700">{`$${price}`}</h1>
        </div>
      </div>
      <div className="mt-10 ps-5 flex flex-col items-start">
        {features.map((feature, key) => (
          <div
            key={key}
            className="inline-flex items-center py-2 gap-2 text-xl md:text-2xl"
          >
            <div className="text-blue-900">{featureIcons}</div>
            <p className="text-gray-500">{feature}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PackageCards;
