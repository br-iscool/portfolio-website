interface SkillsCardProps {
    icon: string;
    text: string;
}

export default function SkillsCard({ icon, text }: SkillsCardProps) {
    return (
        <div className="group items-center gap-5 p-3 flex w-full max-w-xs bg-(--bg-secondary) border-(--outline) border rounded-xl">
            <div className="w-16 p-4 bg-(--bg-tertiary) rounded-xl">
                <img src={icon} alt="Icon" />
            </div>
            <div>
                <p className="text-md">{text}</p>
            </div>
        </div>
    );
}
