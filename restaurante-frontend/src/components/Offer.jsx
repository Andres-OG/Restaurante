import React from "react";
import { Button } from "./Button";

export function Offer({ classN, food, type, text }) {
    return (
        <div className={`${classN}`}>
            <div className="flex flex-col text-center">
                <h3 className="text-xl font-bold">
                    {food}
                </h3>
                <p className="font-normal">
                    {type}
                </p>
                <p className="font-sans text-sm font-thin">{text}</p>
            </div>
            
            <Button classN="bg-red-600 button">Order Now</Button>
        </div>
    );
}
