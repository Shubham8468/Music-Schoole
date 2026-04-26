'use client'

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ul/3d-card";
import couresData from "@/data/music_courses.json"

const Page = () => {
    return (
        <div className="min-h-sceen bg-black py-2 w-full pt-36">
            <h1 className="ext-neutral-300 sm:text-6xl font-bold text-center text-2xl">All course ({couresData.courses.length})</h1>
            <div className="flex flex-wrap  justify-center">
                {
                    couresData.courses.map((course) => (
                        <CardContainer className="inter-var sm:mr-20 sm:ml-20 mr-4 ml-4">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-300 dark:text-white"
                                >
                                    {course.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {course.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={course.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        as="a"
                                        href="https://www.linkedin.com/in/shubh386a"
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Try now →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        href="https://github.com/Shubham8468/Music-Schoole"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Buy now
                                    </CardItem>                                    git add .
                                    git commit -m "Prepare for Vercel deployment"
                                    git push origin main
                                </div>
                            </CardBody>
                        </CardContainer>

                    ))
                }
            </div>
        </div>
    )
}

export default Page;