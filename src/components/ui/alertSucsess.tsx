import React from "react"

interface AlertSuccessProps {
    title: string;
    message: string;
    onClose: () => void;
}

export default function AlertSucsess({title,message,onClose}:AlertSuccessProps){
    return(
        <div role="alert" className="rounded-md border border-gray-300 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-green-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <div className="flex-1">
                    <strong className="font-medium text-gray-900"> {title} </strong>

                    <p className="mt-0.5 text-sm text-gray-700">{message}</p>
                </div>

                <button
                    className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
                    type="button"
                    onClick={onClose}
                    aria-label="Dismiss alert"
                >
                    <span className="sr-only">Dismiss popup</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}