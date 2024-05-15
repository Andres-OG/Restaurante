import React from "react";
import { Coupon } from "../components/Coupon"
import {Divider} from "@nextui-org/react";

export function CouponsSection() {
    return (
        <div className="flex w-full flex-col md:flex-row">
            <div className="flex flex-col xl:flex-row w-full gap-5 xl:gap-16 justify-between">
                <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
                    <h2 className="text-5xl md:text-6xl font-bold text-red-500">Cupones</h2>
                    <p>Usa ahora alguno de nuestros cupones</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <Coupon percentage='$100' description="Obtén $100 de descuento en tu próxima compra" start="27/03/2024" end="01/04/2024" color="bg-red-500" colorHover="bg-red-600" />
                    <Coupon percentage='30%' description="Obtén un 30% de descuento en tu próxima compra" start="27/03/2024" end="01/04/2024" color="bg-green-500" colorHover="bg-green-600" />
                </div>
            </div>
        </div>
    );
}