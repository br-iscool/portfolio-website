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
                    <Link className="font-semibold hover:underline" href="" target="_blank">
                        here
                    </Link>
                    {" "} for my resume.
                </>,
                <>
                    High school junior with over six years of computer science experience and two years in web development. Always looking for new opportunities to learn and improve.
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


