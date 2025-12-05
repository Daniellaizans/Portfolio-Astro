import { useState, useEffect } from "react";

const ProyectosInfo = ({ info, close }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm overflow-y-auto">
            <div
                className="relative w-full bg-[#0a0a0a] overflow-hidden shadow-2xl flex flex-col h-[100vh] my-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Global Glow Effects - Now spanning the entire modal */}
                <div
                    className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20 blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3"
                    style={{ backgroundColor: info.colortext }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15 blur-[100px] pointer-events-none rounded-full -translate-x-1/3 translate-y-1/3"
                    style={{ backgroundColor: info.colortext }}
                />

                <button
                    onClick={close}
                    className="absolute top-8 right-8 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                {/* Top: Header Area (Dark with Glow) */}
                <div className="w-full p-4 shrink-0 relative z-10">
                    <div
                        className="w-full h-80 min-h-[450px] rounded-[32px] flex flex-col justify-center items-center relative overflow-hidden border border-white/5 bg-white/[0.02]"
                        style={{ backgroundColor: info.colortext || "#3b82f6" }}
                    >
                        {/* Decorative Elements - subtle now */}
                        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full border-[20px] border-white/5 blur-sm"></div>

                        <div className="relative z-10 text-center px-4">
                            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-sm">
                                {info.empresa || info.title}
                            </h1>
                            <span
                                className="text-xl font-light tracking-[0.2em] uppercase"
                                style={{ color: "#FFFFFF" }}
                            >
                                {info.type}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom: Content Area */}
                <div className="relative flex-1 overflow-hidden z-10">
                    {/* Content Grid */}
                    <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-12 h-full">

                        {/* Left Column: Title & Details */}
                        <div className="md:col-span-1 flex flex-col gap-8">
                            <div>
                                <h2
                                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                                    style={{ color: info.colortext }}
                                >
                                    {info.title}
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-[#555a7a] text-xs font-bold uppercase tracking-wider mb-2">CATEGORÍA</h3>
                                        <p className="text-gray-200 font-medium text-lg">{info.type}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[#555a7a] text-xs font-bold uppercase tracking-wider mb-2">AÑO</h3>
                                        <p className="text-gray-200 font-medium text-lg">{info.año}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-[#555a7a] text-xs font-bold uppercase tracking-wider mb-3">STACK</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {info.tags && info.tags.map((tag, index) => (
                                                <span key={index} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-4">
                                <button
                                    className="w-full md:w-auto px-8 py-4 rounded-full font-bold text-white transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 text-lg"
                                    style={{ backgroundColor: info.colortext || "#3b82f6" }}
                                >
                                    Acceder al sitio
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Description */}
                        <div className="md:col-span-2 flex flex-col justify-start">
                            <div className="prose prose-invert prose-lg max-w-none text-gray-400 leading-relaxed text-pretty">
                                <p className="text-xl leading-8">{info.textdes}</p>
                                {info.testdes && <p className="mt-6 text-xl leading-8">{info.testdes}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProyectosInfo;