import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: [
        "400",
        "500",
        "700"
    ]
});

const fonts = `${openSans.variable}`;

export default fonts;