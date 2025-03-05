import { useState } from "react";

export default function NavButton() {
    const [isShaderEnabled, setIsShaderEnabled] = useState(true);
    const [isBoxShadowEnabled, setIsBoxShadowEnabled] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

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
        setIsChecked(!isChecked);
    };

    return (
        <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleClick}
                className="sr-only"
            />
            <div className="block h-7 w-13 rounded-full bg-gray-400 opacity-25"></div>
            <div
                className={`dot absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition-transform ${
                    isChecked ? "" : "translate-x-6"
                }`}
            >
                {isChecked ? (
                    <svg
                        className="h-3 w-3 text-gray-800 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>  
                ) : (
                    <svg
                        className="h-3 w-3 text-gray-800 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                )}
            </div>
        </div>
        </label>
    );
}
