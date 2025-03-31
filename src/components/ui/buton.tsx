import React from "react";

interface ButtonProps {
    nameButton: string;
    href?: string;
    onClick?: () => void;
}

export default function Button({ nameButton, href, onClick }: ButtonProps) {
    return (
        <button
            className="inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-none"
            onClick={onClick}
        >
            <span className="text-sm font-medium"> {nameButton} </span>

            <svg
                className="size-5 shadow-sm rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </button>
    );
}
