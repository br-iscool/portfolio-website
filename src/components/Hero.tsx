import Image from "next/image";
import { inter } from "@/utils/fonts";

export default function Hero() {
    return (
        <section className={`home box-shadow flex min-h-screen items-center justify-center gap-20 p-12 ${inter.className}`}>
            <div className="w-full relative flex flex-row gap-15 justify-center items-center px-5">
                <div className="w-[50%] h-full flex flex-col justify-center gap-4 text-white">
                    <p className="text-lg font-light">
                        Hi, I'm
                    </p>
                    <h1 className="text-6xl font-extrabold">
                        Brian Deng
                    </h1>
                    <p className="text-2xl font-thin">
                        Full Stack Developer
                    </p>
                    <p className="text-md font-light mt-4">
                        Lorem Ipsum Description
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 z-50">
                        Contact Me
                    </button>
                </div>
                <div className="">
                    <Image src="/favicon.ico" alt="Headshot" width={250} height={250} className="rounded-full border-2 border-white shadow-lg" loading="eager" />
                </div>
            </div>
        </section>
    );  
}