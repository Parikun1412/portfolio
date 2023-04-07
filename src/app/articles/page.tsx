"use client";

import React, { useRef } from "react";
import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import article1 from "../../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../../public/images/articles/pagination component in reactjs.jpg";
import article5 from "../../../public/images/articles/todo list app built using react redux and framer motion.png";
import TransitionEffect from "../components/transition-effect";

const FramerImage = motion(Image);

interface Props {
    img: StaticImageData;
    title: string;
    time?: string;
    summary?: string;
    link: string;
    date?: string;
}

const MovingImg = ({ title, img, link }: Props) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouse = (event: any) => {
        if (imgRef.current) {
            imgRef.current.style.display = "inline-block";
            x.set(event.pageX);
            y.set(-10);
        }
    };

    const handleMouseLeave = (event: any) => {
        if (imgRef.current) {
            imgRef.current.style.display = "none";
            x.set(0);
            y.set(0);
        }
    };

    return (
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                ref={imgRef}
                src={img}
                alt={title}
                className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
            />
        </Link>
    );
};

const Article = ({ img, title, date, link }: Props) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
        >
            <MovingImg img={img} title={title} link={link} />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
                {date}
            </span>
        </motion.li>
    );
};

const FeaturedArticle = ({ img, title, time, summary, link }: Props) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
            <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    );
};

const Articles = () => {
    return (
        <>
        <TransitionEffect />
            <main className="w-full pb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Words Can Change The World!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Lean how to build a custom pagination component in ReactJS from scractch. Follow this step-by-step guide to integrate Oagination component in your ReactJS project"
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Lean how to build a custom pagination component in ReactJS from scractch. Follow this step-by-step guide to integrate Oagination component in your ReactJS project"
                            time="9 min read"
                            link="/"
                            img={article2}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                    <ul>
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22, 2023"
                            link="/"
                            img={article5}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default Articles;
