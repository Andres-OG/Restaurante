import React from "react";
import { Tabss } from "../components/Tabss"
import { FaFilter } from "react-icons/fa";
import { useMediaQuery } from '@react-hook/media-query';
import menu from "../utilities/foods.json";


export function Menu({ handleFilter }) {
    const matches = useMediaQuery('only screen and (max-width: 768px)');    
    return (
        <div className="flex flex-col gap-2 bg-white w-full">
            <div className="flex flex-row w-full justify-between items-end">
                <div>
                    <h2 className="text-5xl md:text-6xl font-bold text-red-500">Menú</h2>
                    <h3 className="text-2xl text-black  ">Explora nuestro menú</h3>
                </div>
                {matches && <a href="" onClick={handleFilter} className="flex"><FaFilter /> Filtrar</a>}
            </div>
            <Tabss content={menu}/>
        </div>
    );
}
