import React from "react";
import { motion } from "framer-motion";

interface Props {
    name: string;
    x: string;
    y: string;
}

const Skill = ({ name, x, y }: Props) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{once: true}}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <Skill name="HTML" x="-23vw" y="2vw" />
                <Skill name="CSS" x="-6vw" y="-8vw" />
                <Skill name="Javascript" x="20vw" y="6vw" />
                <Skill name="ReactJS" x="0vw" y="13.5vw" />
                <Skill name="NextJS" x="-18vw" y="-15vw" />
                <Skill name="NodeJS" x="14vw" y="-11vw" />
                <Skill name="NestJS" x="30vw" y="-5vw" />
                <Skill name="Tailwind CSS" x="0vw" y="-22vw" />
                <Skill name="Github" x="-22vw" y="18vw" />
                <Skill name="SQL" x="22vw" y="18vw" />
            </div>
        </>
    );
};

export default Skills;
