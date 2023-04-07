"use client";

import Link from "next/link";
import React, { FC } from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

interface Props {
    href: string;
    title: string;
    className: string;
}

const CustomLink = ({ href, title, className = "" }: Props) => {
    const pathName = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
                h-[1px] inline-block bg-dark 
                absolute left-0 bottom-0 
                group-hover:w-full transition-[width] ease duration-300
                ${pathName === href ? "w-full" : "w-0"}
                dark:bg-light `}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:bg-dark dark:text-light">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/articles" title="Articles" className="ml-4" />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="#"
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a
                    href="#"
                    target={"_blank"}
                    className="w-6 mx-3"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href="#"
                    target={"_blank"}
                    className="w-6 mx-3"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href="#"
                    target={"_blank"}
                    className="w-6 mx-3"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <PinterestIcon />
                </motion.a>
                <motion.a
                    href="#"
                    target={"_blank"}
                    className="w-6 ml-3"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <DribbbleIcon />
                </motion.a>

                <button
                    onClick={() => {
                        if (typeof setMode === "function") {
                            setMode(mode === "light" ? "dark" : "light");
                        }
                    }}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                    }`}
                >
                    {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
                </button>
            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
