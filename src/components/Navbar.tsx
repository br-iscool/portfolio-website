"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Button from "../components/ui/Button";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 75);
    });

    return (
        <motion.header
            className="fixed inset-0 top-8 z-50 mx-auto flex h-20 max-w-7xl items-center rounded-full p-5 px-3 font-medium shadow-md ring-2 ring-[#7982ef] backdrop-blur-3xl"
            initial={{ y: 0 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-center pl-8">
                <Link href={"/"} className="py-6 text-xl font-bold duration-75 hover:scale-110">{"Home"}</Link>
            </div>
            <ul className="w-full flex-col items-center justify-center gap-16 max-sm:gap-5 max-sm:pt-10 sm:flex sm:flex-row">
                <li>
                    <Link href={"#about"} className="py-6 text-xl">{"About"}</Link>
                </li>
                <li>
                    <Link href={"#skills"} className="py-6 text-xl">{"Skills"}</Link>
                </li>
                <li>
                    <Link href={"#projects"} className="py-6 text-xl">{"Projects"}</Link>
                </li>
            </ul>

            <div className="flex items-center justify-center">
                <Button />
            </div>
        </motion.header>
    );
}
