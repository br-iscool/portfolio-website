import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "motion/react-client";

interface HeroButtonProps {
    icon: IconDefinition;
    className?: string;
    href?: string;
}

export default function HeroButton({ icon, className, href }: HeroButtonProps) {
    return (
        <a href={href} target="_blank">
            <motion.button
                className={`bg-black w-12 h-12 cursor-pointer border-[#7982ef] border-2 rounded-[50%] ${className}`}
                whileHover={{ scale: 1.05, rotate: -15 }}
                transition={{ duration: 0.2 }}
            >
                <FontAwesomeIcon icon={icon} className="" />
            </motion.button>
        </a>
    );
}