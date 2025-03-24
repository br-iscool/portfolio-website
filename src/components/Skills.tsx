import SkillsCard from "./ui/SkillsCard";

export default function Skills() {
    return (
        <section className="relative bg-[var(--bg-primary)] flex align-center justify-center p-32" id="skills">
            <div className="flex flex-col align-center text-center max-w-5xl mx-auto">
                <div className="pb-12 text-center">
                    <h1 className="font-bold text-4xl">Skills</h1>
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                    <SkillsCard icon="/icons/js-icon.svg" text="JavaScript"/>
                    <SkillsCard icon="/icons/ts-icon.svg" text="TypeScript"/>
                    <SkillsCard icon="/icons/python-icon.svg" text="Python"/>
                    <SkillsCard icon="/icons/next-icon.svg" text="Next.js"/>
                    <SkillsCard icon="/icons/react-icon.svg" text="React.js"/>
                    <SkillsCard icon="/icons/tailwind-icon.svg" text="Tailwind CSS"/>
                    <SkillsCard icon="/icons/nodejs-icon.svg" text="Node.js"/>
                    <SkillsCard icon="/icons/nodejs-icon.svg" text="Express.js"/>
                    <SkillsCard icon="/icons/git-icon.svg" text="Git"/>
                </div>
            </div>
        </section>
    );
}
