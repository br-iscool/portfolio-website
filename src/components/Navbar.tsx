"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { openSans } from "@/utils/fonts";
import { useState } from "react";
import Link from "next/link";
import NavButton from "./ui/NavButton";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 75);
    });

    return (
        <motion.header
            className={`fixed inset-0 top-7 z-50 mx-auto flex h-[50px] max-w-4xl rounded-full p-3 px-2 font-medium shadow-md ring-2 ring-[var(--purple)] backdrop-blur-3xl ${openSans.className}`}
            initial={{ y: 0 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div
                className="flex items-center justify-center pl-5"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3}}
            >
                <Link href={"/"} className="py-4 text-xs font-bold duration-75">{"Home"}</Link>
            </motion.div>
            <ul className="w-full flex-col justify-center gap-10 max-sm:gap-5 max-sm:pt-10 sm:flex sm:flex-row">
                <li>
                    <Link href={"#about"} className="py-4 text-[12.5px] transition duration-500 hover:text-[var(--purple)]">{"About"}</Link>
                </li>
                <li>
                    <Link href={"#skills"} className="py-4 text-[12.5px] transition duration-500 hover:text-[var(--purple)]">{"Skills"}</Link>
                </li>
                <li>
                    <Link href={"#projects"} className="py-4 text-[12.5px] transition duration-500 hover:text-[var(--purple)]">{"Projects"}</Link>
                </li>
            </ul>

            <div className="flex items-center justify-center">
                <NavButton />
            </div>
        </motion.header>
    );
}
