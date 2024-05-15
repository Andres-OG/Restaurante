import React from "react";
import { Image } from "../components/Image";
import Logo from "../assets/img/logoRojo.png";

export function Banner() {
    return (
        <div className="py-16 
                        md:py-24
                        px-10 lg:px-32
                        bg-[url('/Users/andresog/Documents/Restaurante/restaurante-frontend/src/assets/img/fondoOscuro.jpg')]
                        bg-cover
                        bg-no-repeat
                        ">
            <div className="flex flex-col items-center md:justify-center gap-16 md:w-full py-10 xl:h-96">
                <div className="flex flex-col gap-2">
                    <div className="flex font-league flex-col md:flex-row items-center text-white gap-5">
                        <div className="flex flex-col items-center md:items-start">
                            <h1 className="text-center text-5xl font-macondo md:text-6xl lg:text-7xl xl:text-8xl font-thin">
                                Welcome to <span className="text-red-600 font-bold font-macondo">Restcon</span>
                            </h1>
                            <p className="text-lg font-macondo md:text-4xl font-thin"> The best food in the city </p>
                        </div>
                        <Image src={Logo} classN="w-40 md:rotate-90 md:order-first" />
                    </div>
                </div>
            </div>
        </div>
    );
}