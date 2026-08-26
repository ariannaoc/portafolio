import React, { useState } from "react";
import {SquareArrowOutUpRight } from "lucide-react";

export default function ProjectModal({ project }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    const openModal = () => {
        setActiveIdx(0);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 bg-jade-600 hover:bg-jade-700 text-white dark:bg-jade-500 dark:hover:bg-jade-600 transition-colors duration-200 shadow-md"
            >
                <SquareArrowOutUpRight />
                Ver más
            </button>

            {isOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-bunker-950/80 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full max-w-4xl bg-white dark:bg-bunker-900 rounded-2xl p-6 shadow-2xl flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Cabecera del Modal */}
                        <div className="flex justify-between items-center pb-4 border-b border-bunker-200 dark:border-bunker-800">
                            <h3 className="font-bold text-lg text-jade-950 dark:text-bunker-100">
                                {project.title} — Capturas
                            </h3>
                            <button 
                                onClick={closeModal}
                                className="text-bunker-400 hover:text-bunker-600 dark:hover:text-bunker-200 p-1 font-semibold"
                                aria-label="Cerrar modal"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Visor de Imagen Principal */}
                        <div className="flex-grow flex items-center justify-center overflow-hidden py-4">
                            <img 
                                src={project.screenshots[activeIdx]} 
                                alt={`Captura ${activeIdx + 1}`}
                                className="max-h-[55vh] w-auto object-contain rounded-lg border border-bunker-200 dark:border-bunker-800 shadow-md"
                            />
                        </div>

                        {/* Tira de Miniaturas (sin barra de scroll visible) */}
                        <div className="flex gap-2 overflow-x-auto pt-2 justify-start sm:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            {project.screenshots.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIdx(i)}
                                    className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                        i === activeIdx 
                                            ? "border-jade-500 scale-105" 
                                            : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}