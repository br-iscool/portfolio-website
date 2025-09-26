const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React, Next.js, and Tailwind CSS",
        image: "icons/next-icon.svg",
        link: "",
        tags: [""],
    }
];

export default function Projects() {
    return (
        <section className="bg-[var(--bg-primary)] py-24" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-[var(--bg-secondary)] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            </a>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-[var(--text-secondary)] mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-[var(--bg-tertiary)] text-xs px-3 py-1 rounded-full text-[var(--text-primary)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-block text-[var(--accent)] font-semibold hover:underline"
                                >
                                    View Project &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}