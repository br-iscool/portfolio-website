interface ProjectsCardProps {
    icon?: string;
    text?: string;
}

export default function ProjectsCard({ icon, text }: ProjectsCardProps) {
    return (
        <div className="group items-center gap-5 p-3 flex w-full max-w-xs bg-[var(--bg-secondary)] border-[var(--outline)] border-1 rounded-xl">
            <div className="w-16 p-4 bg-[var(--bg-tertiary)] rounded-xl">
                <img src={icon} alt="Icon" />
            </div>
            <div>
                <p className="text-md">{text}</p>
            </div>
        </div>
    );
}
