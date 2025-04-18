import { Inter, Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
    weight: ["400", "700"],
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default `${openSans.variable} ${inter.variable}`;