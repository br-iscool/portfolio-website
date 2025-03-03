import Image from "next/image";
import HeroButton from "@/components/ui/HeroButton";
import { inter } from "@/utils/fonts";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
	return (
		<section className={`home box-shadow flex min-h-screen items-center justify-center gap-20 p-12 ${inter.className}`}>
			<div className="w-full relative flex flex-row gap-40 justify-center items-center">
				<div className="w-2xl h-full flex flex-col justify-center gap-4 text-white">
					<p className="text-lg font-light">Hi, I'm</p>
					<h1 className="text-8xl font-extrabold">Brian Deng</h1>
					<p className="text-xl font-extralight">Full stack developer based in Canada.</p>

                    <div className="flex flex-row gap-4 pt-4">
                        <HeroButton icon={faLinkedin} href="https://www.linkedin.com" />
                        <HeroButton icon={faGithub} href="https://github.com/br-iscool" />
                        <HeroButton icon={faEnvelope} href="mailto:" />
                    </div>
				</div>

				<div className="">
					<Image src="/favicon.ico" alt="Headshot" width={250} height={250} className="rounded-full border-2 border-white shadow-lg" loading="eager" />
				</div>
			</div>
		</section>
	);
}
