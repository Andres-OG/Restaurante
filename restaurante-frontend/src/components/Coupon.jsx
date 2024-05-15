import React from "react";
import { Button, Link } from "@nextui-org/react";


export function Coupon({ percentage, description, start, end, color }) {
    return (
        <div className="flex flex-row overflow-hidden h-full bg-white border-1 border-neutral-100 rounded-lg">
            <div className={`${color} w-1/3 rounded-r-full flex justify-center items-center`}>
                <h2 className="text-white text-xl xl:text-4xl 2xl:text-5xl lg:text-3xl sm:text-5xl font-bold">{percentage}</h2>
            </div>
            <div className="flex flex-col gap-2 p-8">
                <h3>{description}</h3>
                <p className="text-gray-600"> Válido del {start} al {end}</p>
                <Button as={Link} className={`text-white ${color}`} href="#" variant="flat">
                    Usar cupón
                </Button>
            </div>
        </div>
    );
}