"use client"

import React from "react";
import Layout from "./layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light sm:text-base
        "
        >
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    <span className="text-primary dark:text-primaryDark text-wxl px-1">Build With &#9825;</span>
                    <Link href="/" className="underline underline-offset-2">
                        BK
                    </Link>
                </div>
                <Link href="/" target={"_blank"} className="underline underline-offset-2">
                    Hihi
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
