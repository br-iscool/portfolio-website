interface SkillsCardProps {
    icon: string;
}

export default function SkillsCard({ icon }: SkillsCardProps) {
    return (
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <div className="relative flex justify-center items-center h-48 bg-[#262626]">
                <img src={icon} alt="Icon" className="w-20" />
            </div>
        </div>
    );
}
