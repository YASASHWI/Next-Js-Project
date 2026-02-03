import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
    icon?: LucideIcon;
    label?: string;
    rotation?: string; // e.g. "rotate-12" or "rotate-[12deg]"
    colorClass?: string;
    className?: string;
    textClassName?: string;
    iconClassName?: string;
    children?: React.ReactNode;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
    icon: Icon,
    label,
    rotation = "rotate-0",
    colorClass = "bg-white",
    className = "",
    textClassName = "text-white text-lg",
    iconClassName = "text-white",
    children,
}) => {
    return (
        <div
            className={`
        absolute flex items-center gap-3 px-6 py-4 rounded-full shadow-xl 
        transition-transform hover:scale-105 duration-300 ease-out cursor-default
        ${rotation} ${colorClass} ${className}
      `}
        >
            {Icon && <Icon className={`w-7 h-7 ${iconClassName}`} />}
            {label && <span className={`font-medium ${textClassName}`}>{label}</span>}
            {children}
        </div>
    );
};
