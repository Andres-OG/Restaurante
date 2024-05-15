import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Divider } from "@nextui-org/react";

export function Noticed() {
    return (
        <div className="bg-neutral-800 text-white flex justify-center items-center flex-col px-10 sm:px-32 gap-5 p-4">
            <div className="flex flex-col sm:flex-row gap-10 w-full">
                <div className="flex gap-3 sm:gap-5 sm:justify-center items-center">
                    <MdDeliveryDining className="text-[5rem] sm:text-[20rem] text-neutral-700" />
                    <Divider orientation="vertical" className="my-4 text-white bg-neutral-700 h-1/2" />
                    <div>
                        <h3 className=" text-2xl sm:text-5xl font-bold text-red-500/70">Pide a domicilio</h3>
                        <p className=" sm:text-2xl text-neutral-500 font-normal">Conoce nuestras promociones y disfruta de la mejor comida en casa</p>
                    </div>
                </div>
                <div className="flex gap-3 sm:gap-5 justify-center items-center">
                    <FaLocationDot className="text-[3rem] sm:text-[10rem] text-neutral-700" />
                    <Divider orientation="vertical" className="my-4 text-white bg-neutral-700 h-1/2" />
                    <div>
                        <h3 className="text-2xl sm:text-5xl font-bold text-red-500/70">Visítanos</h3>
                        <p className="sm:text-2xl text-neutral-500 font-normal">Disfruta de la mejor comida en nuestro restaurante</p>
                    </div>
                </div>
                <div className="flex gap-3 sm:gap-5 justify-center items-center">
                    <IoCalendarNumber className="text-[5rem] sm:text-[20rem] text-neutral-700" />
                    <Divider orientation="vertical" className="my-4 text-white bg-neutral-700 h-1/2" />
                    <div>
                        <h3 className="text-2xl sm:text-5xl font-bold text-red-500/70">Reserva</h3>
                        <p className="sm:text-2xl text-neutral-500 font-normal">Reserva tu lugar y disfruta de la mejor comida en nuestro restaurante</p>
                    </div>
                </div>
            </div>
        </div>
    );
}