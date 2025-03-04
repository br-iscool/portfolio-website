import { inter } from "@/utils/fonts";
import Link from "next/link";

export default function About() {
    return (
        <>
            <section className={`bg-black h-full py-36 text-white ${inter.className}`} id="about">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center justify-center p-10 bg-[#262626] rounded-xl">
						<div className="w-full text-left">
							<h1 className="text-3xl font-semibold mb-8">
								About
							</h1>
						</div>
                        <div className="w-full font-light">
                            <p className="text-lg mb-6">
                                Hi, I'm Brian Deng, a passionate Full Stack Developer based in Canada. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </p>
                            <p className="text-lg mb-6">
								Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                            </p>
                            <p className="text-lg">
								Currently living in <Link className="font-semibold hover:underline" href={"https://www.google.ca/maps?q=,+Edmonton,+AB,+,+ca"} target="_blank">Edmonton, Canada.</Link>
							</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


