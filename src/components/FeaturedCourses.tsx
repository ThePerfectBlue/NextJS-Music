"use client";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="min-h-screen bg-gray-900 pb-0 pt-12 md:pt-36">
      <div>
        <div className="text-center">
          <h2 className="text-base text-cyan-400 font-extrabold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {featuredCourses.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var w-5/6 ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="500"
                  width="500"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/course/${course.slug}`}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Preview →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="mt-10 pb-10 md:mt-20 text-center">
        <Link href={"/courses"}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Show All Courses
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
