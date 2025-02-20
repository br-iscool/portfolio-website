import Image from "next/image";
import { inter } from "@/utils/fonts";

export default function Hero() {
    return (
        <section className={`home box-shadow flex min-h-screen items-center justify-center gap-20 p-12 ${inter.className}`}>
            <div className="w-full relative flex flex-row gap-15 justify-center items-center px-5">
                <div className="w-[50%] h-full flex flex-col justify-center gap-2">
                    <p className="text-sm font-extralight flex flex-row gap-1">
                        Hi, I'm
                    </p>
                    <h1 className="text-6xl font-extrabold">
                        Brian Deng
                    </h1>
                    <p className="text-2xl font-thin">
                        Full Stack Developer
                    </p>
                </div>
                <div>
                    <Image src="/favicon.ico" alt="Headshot" width={250} height={250} loading="eager" />
                </div>
            </div>
        </section>
    );
}