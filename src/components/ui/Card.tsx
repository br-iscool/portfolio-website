import { ReactNode } from "react";

interface CardProps {
    title: string;
    id: string;
    description: ReactNode[];
}

// Separate each description with a fragment (<>, </>) when using this component
export default function Card({ title, description, id }: CardProps) {
    return (
        <section className="bg-[var(--bg-primary)] h-full pt-36 text-white" id={id}>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center p-10 bg-[var(--bg-tertiary)] rounded-xl">
                    <div className="w-full text-left">
                        <h1 className="text-4xl font-semibold mb-8">
                            {title}
                        </h1>
                    </div>
                    <div className="w-full font-light gap-6 flex flex-col">
                        {description.map((descriptions, index) => (
                            <p key={index} className="text-lg">
                                {descriptions}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}