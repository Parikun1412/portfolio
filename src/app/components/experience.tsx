import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./li-icon";

interface Props {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

const Details = ({ position, company, companyLink, time, address, work }: Props) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, text: "spring" }}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl sx:text-lg">
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-meduium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Web Developer"
                        company="VUKIETFOOD"
                        companyLink="https://vukietfood.com/"
                        time="2022 - present"
                        address="135B Tay Lan, P.Binh Tri Dong A, Q. Binh Tan, TP.HCM"
                        work="Worked alone responsible for developing new features for VukietFood's 
                        website development with PHP language  for Ecommerce Store."
                    />
                    <Details
                        position="Web Developer"
                        company="MaleFashion"
                        companyLink="https://male-fashion-client-ui.vercel.app/"
                        time="3 months"
                        address="273 Đ. An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh"
                        work="Worked on a team responsible for developing new features for Male Fashion's 
                        website development with NextJS and NodeJS for Ecommerce Store."
                    />
                    <Details
                        position="Web Developer"
                        company="SGU-Community"
                        companyLink="https://sgu-community.vercel.app/"
                        time="2023 - present"
                        address="273 Đ. An D. Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh"
                        work="Worked on a team responsible for developing new features for SGU-Community's 
                        website development with NextJS and NestJS for Social Community"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
