import Image from "next/image";

export default function Hero() {
	return (
		<section className="home box-shadow flex min-h-screen items-center justify-center gap-32 p-20">
            <div>
                <div>
                    <div>

                    </div>
                    <div>
                        <Image src="/favicon.ico" alt="Headshot" width={500} height={500} />
                    </div>
                </div>
            </div>
		</section>
	);
}
