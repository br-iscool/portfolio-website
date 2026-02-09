import Link from "next/link";
import Card from "./ui/Card";

export default function About() {
    return (
        <Card
            title="About"
            id="about"
            description={[
                <>
                    Hey 👋, I'm Brian Deng, a freelance full stack developer based in Canada. Click {" "}
                    <Link className="font-bold hover:underline" href="" target="_blank">
                        here
                    </Link>
                    {" "} for my resume.
                </>,
                <>
                    High school senior with over six years of combined experience in full-stack development, SaaS, JS / TS and Python technologies.
                    My work emphasizes the importance of creating high quality applications. Always looking for new opportunities to learn and improve.
                </>,
                <>
                    Stack: Next.js & React, TypeScript, Express, MongoDB, Redux
                </>,
                <>
                    Currently living in {""}
                    <Link className="hover:underline" href={"https://www.google.ca/maps?q=,+Edmonton,+AB,+,+ca"} target="_blank">
                        Edmonton, Canada.
                    </Link>
                </>
            ]}
        />
    );
}


