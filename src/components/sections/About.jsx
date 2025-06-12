import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendSkills = [
        "React",
        "TailwindCSS",
        "HTML",
        "CSS"
    ];
    const backendSkills = [
        "Java",
        "Spring",
        "MySQL",
        "C++",
        "Vert.x"
    ];
    return <section id="about" className="scroll-mt-10 min-h-screen flex items-center justify-center py-10">
        <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-2">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-200 mb-6">
                        I'm a software developer and computer science student driven by a passion for building efficient, modern solutions that solve real business problems.
                        With a focus on clean code and practical outcomes, I aim to deliver software that brings value and impact.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            🏫 Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Currently earning a B.S. in Informatics and Minor: Business management and entrepreneurship</strong> - New Bulgarian University
                                (2021-2025)
                            </li>
                            <li>
                                <span className="text-gray-400 font-bold">Relevant coursework:</span> Data Structure and algorithms, Web Development, Operation systems and DevOps ...
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            💼 Work Experience
                        </h3>
                        <div className="space-y-4 text-gray">
                            <div>
                                <h4 className="font-semibold">
                                    Software developer at Eurobank Bulgaria (2023 - present)
                                </h4>
                                <p>
                                    I build and maintain integrations for seamless system communication and data flow.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">
                                    IT Intern at Eurobank Bulgaria (2023 - present)
                                </h4>
                                <p>
                                    Assisted in developing and testing backend microservices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}