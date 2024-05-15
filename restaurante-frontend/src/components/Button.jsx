import React from "react";

export function Button({ children, classN, onClick, type }) {
    return (
        <div className="flex justify-center md:justify-normal">
            <button
                className={`${classN}`}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}