import React from "react";
import { Receipt, Gavel, ListTodo, FileText, ListChecks } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-[#f0f4fc] overflow-hidden pt-20 pb-20 lg:pt-0 lg:pb-0">

            {/* --- Background Decorative Elements (Re-positioned for visibility) --- */}

            {/* Right Side Bars (Decreased Size & Moved Down) */}
            <div className="absolute right-[-80px] top-[25%] w-[300px] h-[70px] bg-[#dde6f8] rounded-full rotate-[3deg] pointer-events-none z-0 mix-blend-multiply opacity-60" />
            <div className="absolute right-[-40px] top-[38%] w-[400px] h-[70px] bg-[#dde6f8] rounded-full rotate-[0deg] pointer-events-none z-0 mix-blend-multiply opacity-60" />
            <div className="absolute right-[-20px] top-[50%] w-[300px] h-[70px] bg-[#dde6f8] rounded-full rotate-[-2deg] pointer-events-none z-0 mix-blend-multiply opacity-60" />

            {/* Left Side Bars (Moved Down) */}
            <div className="absolute left-[-150px] top-[60%] w-[250px] h-[65px] bg-[#dde6f8] rounded-full rotate-[-6deg] pointer-events-none z-0 mix-blend-multiply opacity-60" />
            <div className="absolute left-[-100px] top-[70%] w-[300px] h-[65px] bg-[#dde6f8] rounded-full rotate-[0deg] pointer-events-none z-0 mix-blend-multiply opacity-60" />
            <div className="absolute left-[-120px] top-[80%] w-[400px] h-[65px] bg-[#dde6f8] rounded-full rotate-[2deg] pointer-events-none z-0 mix-blend-multiply opacity-60" />

            {/* Soft Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none z-0" />


            <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-4 items-center relative z-10 h-full">
                {/* Left Content (Moved Up) */}
                <div className="mt-24 lg:-mt-[300px] px-4 lg:px-0 lg:ml-12 relative z-20">
                    <h1 className="text-4xl lg:text-5xl text-gray-500 leading-tight font-normal">
                        A single platform to <br />
                        <span className="font-semibold">manage</span> every part of <br />
                        your <span className="font-semibold">legal work</span>
                    </h1>

                    <p className="mt-[25px] lg:mt-[40px] text-blue-600 max-w-md text-base lg:text-lg">
                        Track matters, coordinate schedules, manage <br />
                        clients, centralize documents, and handle <br />
                        communication — all in one system.
                    </p>
                </div>

                {/* Right Content - Floating Cards */}
                <div className="relative h-[500px] lg:h-[700px] w-full block perspective-[1000px] scale-[0.45] sm:scale-[0.6] lg:scale-[0.85] origin-top lg:origin-right translate-y-[-10%] lg:translate-y-[5%] translate-x-[-5%] lg:-translate-x-[50%]">

                    {/* Billing - Big Blue */}
                    <FloatingCard
                        icon={Receipt}
                        label="Billing"
                        colorClass="bg-[oklch(42.4%_0.199_265.638)]"
                        rotation="rotate-[12deg]"
                        className="top-[25%] right-[15%] w-[420px] py-8 text-2xl z-20 !rounded-[3rem]"
                        iconClassName="text-white/90"
                        textClassName="text-white text-2xl"
                    >
                        <div className="absolute inset-0 bg-white/10 rounded-[3rem]" />
                    </FloatingCard>

                    {/* Matters - Orange */}
                    <FloatingCard
                        icon={Gavel}
                        label="Matters"
                        colorClass="bg-[#e77d22]"
                        rotation="-rotate-[8deg]"
                        className="top-[55%] left-[-10%] w-[340px] py-7 text-xl z-20 !rounded-[3rem]"
                        iconClassName="text-white/90"
                        textClassName="text-white text-2xl"
                    />

                    {/* John Doe - Card */}
                    <div className="absolute top-[52%] right-[12%] w-[380px] bg-[#a8b1ea] rounded-[3rem] py-2 px-3 flex items-center shadow-xl transform rotate-[3deg] z-30 hover:scale-105 transition-transform duration-300">
                        <div className="w-1.5 h-14 bg-[#ff6b00] rounded-full ml-4 mr-4" />
                        <div className="relative w-12 h-12 mr-4 shrink-0">
                            <div className="w-12 h-12 bg-[#2a2a2a] rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20">
                                {/* Emoji representation of avatar */}
                                <span className="text-2xl pt-1">👨🏾‍⚖️</span>
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden pr-4 py-1">
                            <div className="flex justify-between items-center mb-0.5">
                                <span className="font-bold text-slate-800 text-xl">John Doe - Portal</span>
                            </div>
                            <p className="text-base text-slate-700/80 truncate font-medium">Hey! Could you please review...</p>
                            <p className="text-sm text-slate-600 mt-1">MAT-2233 - 2 h ago</p>
                        </div>
                    </div>

                    {/* Tasks - Dark Bottom Center */}
                    <FloatingCard
                        icon={ListChecks}
                        label="Tasks"
                        colorClass="bg-[#342f49]"
                        rotation="rotate-[0deg]"
                        className="bottom-[12%] left-[25%] w-[280px] py-6 text-xl z-40 !rounded-[3rem]"
                        iconClassName="text-orange-400"
                        textClassName="text-orange-400 text-2xl"
                    />

                    {/* Documents - Dark Right */}
                    <FloatingCard
                        icon={FileText}
                        label="Documents"
                        colorClass="bg-[#30263c]"
                        rotation="-rotate-[8deg]"
                        className="bottom-[13%] right-[-15%] w-[360px] py-7 text-xl z-20 !rounded-[3rem]"
                        iconClassName="text-orange-400"
                        textClassName="text-orange-400 text-2xl"
                    />

                </div>

            </div>
        </section>
    );
};
