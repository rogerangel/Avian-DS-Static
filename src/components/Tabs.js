"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tab } from "@headlessui/react";
import { BsCarFrontFill } from "react-icons/bs";
import Image from "next/image";
import card_driver from "../../public/card_driver.jpeg";
import motorbike from "../../public/motorbike.jpeg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ data, icon }) {
  let [categories] = useState(data);
  const packRef = useRef(null);
  const cardRef = useRef(null);
  const cardTltRef = useRef(null);
  const packInView = useInView(packRef, {
    once: true,
    //point of contact right before the element enters the viewport
    margin: "50%",
  });
  const cardInView = useInView(cardRef, {
    once: true,
  });
  const cardTltInView = useInView(cardRef, {
    once: true,
  });

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <div className="flex justify-center">
          <Tab.List className="max-w-3xl flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-screen rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category.replace("_", " ")}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          {Object.values(categories).map((pack, idx) => (
            <Tab.Panel key={idx}>
              <div className="flex flex-wrap justify-center mt-10">
                <div className="inline-flex justify-evenly w-full">
                  {pack.map((post, ids) => {
                    if (post.reference === "category") {
                      return (
                        <motion.div
                          key={ids}
                          ref={cardTltRef}
                          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{
                            opacity: cardTltInView ? 1 : 0,
                            scale: cardTltInView ? 1 : 0.5,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                        >
                          <Image
                            src={
                              post.type === "Driver" ? card_driver : motorbike
                            }
                            alt="Picture of driver"
                            className="object-cover w-full rounded-t-lg h-full md:w-72 md:rounded-none md:rounded-l-lg"
                          />

                          <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                              {post.type} {`(${post.name})`}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                              {post?.details}
                            </p>
                          </div>
                        </motion.div>
                      );
                    }
                  })}

                  {pack.map((post, ids) => {
                    if (post.reference === "services") {
                      return (
                        <motion.div
                          key={ids}
                          ref={cardRef}
                          className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{
                            opacity: cardInView ? 1 : 0,
                            scale: cardInView ? 1 : 0.5,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                          }}
                        >
                          <ul role="list" className="divide-y divide-gray-200">
                            {post.services.map((service, idx) => (
                              <li key={idx} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                    {<BsCarFrontFill />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                      {service[0]}
                                    </p>
                                    {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  email@windster.com
                                </p> */}
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    ${service[1]}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm mt-2">*{post?.details}</p>
                        </motion.div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex flex-row flex-wrap w-screen mt-10 justify-center gap-10 px-5">
                {pack.map((post, ids) => {
                  if (
                    post.reference != "services" &&
                    post.reference != "category"
                  ) {
                    return (
                      <motion.div
                        key={ids}
                        ref={packRef}
                        className="overflow-visible relative m-10 max-w-[348px] h-auto pb-6 w-full rounded-3xl bg-white p-4 text-center shadow-2xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: packInView ? 1 : 0,
                          scale: packInView ? 1 : 0.5,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <div className="absolute mt-2 -left-10">
                          <svg xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                id="grad1"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  style={{
                                    stopColor: "rgb(254, 144, 76)",
                                    stopOpacity: 1,
                                  }}
                                />
                                <stop
                                  offset="100%"
                                  style={{
                                    stopColor: "rgb(253, 185, 90)",
                                    stopOpacity: 1,
                                  }}
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
                              fontSizeAdjust="auto"
                            >
                              {`${post.type} ${post.reference}`}
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
                        <div className="mt-5 flex flex-col items-end">
                          <h1 className="text-6xl font-bold text-gray-700">
                            {`$${post.price}`}
                          </h1>
                        </div>
                        <div className="mt-10 ps-5 flex flex-col items-start">
                          {post.services.map((feature, key) => (
                            <div
                              key={key}
                              className="inline-flex items-center py-2 gap-2"
                            >
                              <div className="text-2xl text-blue-900">
                                {icon}
                              </div>
                              <p className="text-gray-500 text-2xl">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }
                })}
              </div>
              {/* check for services */}
              {/* <div className="flex justify-center">text</div> */}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
