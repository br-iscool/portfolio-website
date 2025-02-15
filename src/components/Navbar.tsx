"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  	const [hidden, setHidden] = useState(false);
  	const { scrollY } = useScroll();

  	useMotionValueEvent(scrollY, "change", (latest) => {
    	const previous = scrollY.getPrevious() ?? 0;
    	setHidden(latest > previous && latest > 150);
  	});

  return (
		<motion.nav
			className="fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-primary font-medium text-slate-50 flex max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-full font-mono h-14 p-5 shadow-lg"
			initial={{ y: 0 }}
			animate={{ y: hidden ? -80 : 0 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
      		<div className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center">
        		<Image src={"/favicon.ico"} alt="logo" width={44} height={44} />
      		</div>
      		<ul className="w-full flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-10 sm:flex">
        		<li>
          			<Link href={"#about"}>{"About"}</Link>
        		</li>
				<li>
					<Link href={"#skills"}>{"Skills"}</Link>
        		</li>
        		<li>
          			<Link href={"#projects"}>{"Projects"}</Link>
        		</li>
      		</ul>
    	</motion.nav>
  	);
}
