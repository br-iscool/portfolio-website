import SkillsCard from "./ui/SkillsCard";

export default function Skills() {
    return (
        <section className="relative bg-black flex min-h-screen flex-col justify-center pb-6" id="skills">
            <div className="pb-14">
                <h1 className="text-3xl text-white text-center font-bold">Skills</h1>
            </div>
            <div className="mx-auto max-w-screen-xl px-24 w-full">
                <div className="grid w-full sm:grid-cols-4 xl:grid-cols-5 gap-6">
                    <SkillsCard icon="/icons/html5-icon.svg" />
                    <SkillsCard icon="/icons/css3-icon.svg" />
                    <SkillsCard icon="/icons/js-icon.svg" />
                    <SkillsCard icon="/icons/ts-icon.svg" />
                    <SkillsCard icon="/icons/python-icon.svg" />
                    <SkillsCard icon="/icons/next-icon.svg" />
                    <SkillsCard icon="/icons/react-icon.svg" />
                    <SkillsCard icon="/icons/tailwind-icon.svg" />
                    <SkillsCard icon="/icons/git-icon.svg" />
                    <SkillsCard icon="/icons/nodejs-icon.svg" />
                </div>
            </div>
        </section>
    );
}
