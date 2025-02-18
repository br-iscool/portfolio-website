import { useState } from "react";
import Image from "next/image";

export default function Button() {
    const [isShaderEnabled, setIsShaderEnabled] = useState(true);
    const [isBoxShadowEnabled, setIsBoxShadowEnabled] = useState(true);

    const toggleShader = () => {
        if (isShaderEnabled) {
            document.querySelector("canvas")?.classList.add("hidden");
        } else {
            document.querySelector("canvas")?.classList.remove("hidden");
        }
        setIsShaderEnabled(!isShaderEnabled);
    };

    const toggleBoxShadow = () => {
        const heroSection = document.querySelector(".home");
        if (isBoxShadowEnabled) {
            heroSection?.classList.remove("box-shadow");
        } else {
            heroSection?.classList.add("box-shadow");
        }
        setIsBoxShadowEnabled(!isBoxShadowEnabled);
    };

    const handleClick = () => {
        toggleShader();
        toggleBoxShadow();
    };

    return (
        <button
            onClick={handleClick}
            className="cursor-pointer"
        >
            <Image src="/favicon.ico" alt="Toggle" width={40} height={40} />
        </button>
    );
}