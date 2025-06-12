import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="scroll-mt-10 min-h-screen flex items-center justify-center py-10">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Console Modular Arithmetic program</h3>
                        <p className="text-gray-400 mb-4">
                            A console-based program that performs modular arithmetic
                            operations such as addition, subtraction, multiplication, and exponentiation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C++", "XCode"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/ts16hristov/Modular-aritmetic.git"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> Structura Barbershop Reservation app</h3>
                        <p className="text-gray-400 mb-4">
                            A mobile app for booking barbershop appointments, checking availability,
                            and managing reservations with a simple and user-friendly interface.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java", "AndoridSDK", "Android Studio"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/ts16hristov/StructuraReservationApp.git"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2"> WebPortfolio vol.1</h3>
                        <p className="text-gray-400 mb-4">
                            A personal web portfolio showcasing my projects, skills,
                            and experience as a developer, built with modern web technologies.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "SCSS", "JS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/ts16hristov/PortfolioProject_vol.1.0.git"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}