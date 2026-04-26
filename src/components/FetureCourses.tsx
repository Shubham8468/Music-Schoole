
'use client'  // this page serv only client side 
import React from "react";
import courseData from "@/data/music_courses.json"
import Link from "next/link";
import { Button } from "./ul/moving-border";
import { BackgroundLines } from "./ul/background-lines";
import { BackgroundGradient } from "./ul/background-gradient"
import { cn } from "@/utils/cn";
import {BackgroundBeams} from "./ul/background-beams"

const FeatureCourse = () => {


    interface Course { // here we crete a custome variables 
        id: number;
        title: string;
        slug: string;
        description: string;
        price: number;
        instructor: string;
        isFeatured: boolean;
    }

    const featuredCoures = courseData.courses.filter((course: Course) => course.isFeatured);

    return (
        <div className="h-full w-full mt-10 px-10 ">
             
            <div className="w-full mt-0">
                <div className="text-center px-4">
                    <h2 className="text-sm md:text-base text-yellow-100 font-semibold  
                 tracking-wide uppercase font-bold ">FEATURED COURSES</h2>
                    <p className="text-2xl mt-4 sm:text-3xl md:text-4xl font-bold text-neutral-100">Learn With the Best</p>
                </div>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
                <BackgroundBeams />
                {
                    featuredCoures.map((course: Course) => (
                        <div key={course.id} className="flex justify-center mt-10">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-5 bg-zinc-900">
                                <p className="text-base sm:text-xl text-neutral-200 mt-4 mb-2">
                                    {course.title}
                                </p>


                                <p className="text-sm text-neutral-400">

                                    {course.description}
                                </p>
                                <p className="text-base sm:text-sm text-neutral-200 mt-4 mb-2">
                                    Course Instructor
                                </p>
                                <p className="text-sm text-neutral-400 mt-1 px-2">
                                    {course.instructor}
                                </p>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold">
                                    <span>Price </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        ₹ {course.price}
                                    </span>
                                </button>
                                <Link href={`/courses/${course.slug}`}>
                                    <p className="text-blue-100 front-bold mt-5 px-2 text-center text-sm"> Learn More</p>
                                </Link>
                            </BackgroundGradient>

                        </div>

                    ))
                    
                }
              
            </div>
            <div className="w-full mt-8 text-center px-4 pb-10 mt-20">
                <Link href={"/courses"} className="inline-block">
                    <Button
                        as="div"
                        borderRadius="1.80rem"
                        className="bg-black text-white font-bold rounded-md border-slate-800"
                    >
                        View All course
                    </Button>
                </Link>
            </div>
            
        
           
        </div>
    )
}

export default FeatureCourse;