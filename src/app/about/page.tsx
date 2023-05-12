"use client";

import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/animated-text";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../../../public/images/profile/code.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Education from "../components/education";
import TransitionEffect from "../components/transition-effect";

interface Props {
    value: number;
}

const AnimatedNumbers = ({ value }: Props) => {
    const ref = useRef<HTMLElement>(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const About = () => {
    return (
        <>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout>
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I&apos;m Vu Ba Kiet, a passionate web development student who is eager to learn and
                                create exciting web experiences. With a strong foundation in HTML, CSS, and JavaScript.
                                I constantly exploring new technologies and best practices, and has experience working
                                on a variety of projects both individually and in a team environment.
                            </p>
                            <p className="my-4 font-medium">
                                I constantly exploring new technologies and best practices, and has experience working
                                on a variety of projects both individually and in a team environment.
                            </p>
                            <p className="font-medium">
                                I&apos;m committed to delivering high-quality, user-friendly websites and is always
                                seeking opportunities to enhance my skills and knowledge.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
                            <Image
                                src={profilePic}
                                alt="BK"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xl:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xl:text-sm">
                                    projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xl:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default About;
