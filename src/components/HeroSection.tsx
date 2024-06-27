import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="bg-black h-auto md:h-screen w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master The Art of Music
        </h1>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 "
          fill="blue"
        />
        <p className="md:pt-6 mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Learn music & dance at your own pace through a personalized adaptive
          learning model that favors your interest and growth. Get a trusted
          result-oriented curriculum created by industry experts to accelerate
          your learning. You will also get multiple performance opportunities to
          boost your confidence and improve your technical skills.
        </p>
        <div className="mt-4 md:pt-8">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Borders are cool
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
