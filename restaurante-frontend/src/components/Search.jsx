import React from "react";
import { Button } from "./Button";
import { FaSearch } from "react-icons/fa";

export function Search() {
    return (
        <div className="flex justify-between items-center px-3 py-1.5 md:py-2 bg-white rounded-full">
            <div className="flex">
                <input
                    className="bg-transparent text-xs"
                    type="text"
                    placeholder="Buscar..."
                />
            </div>
            <Button classN="button-icon text-neutral-700" >
                <FaSearch />
            </Button>
        </div>
    );
}