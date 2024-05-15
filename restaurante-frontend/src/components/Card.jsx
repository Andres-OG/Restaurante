import React from "react";
import { Card, CardHeader, CardBody, Image, Button, Divider, useDisclosure } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";

export function CardFood({ name, src, price, description, onPress }) {

    return (
        <Card className="flex flex-row w-full shadow-none hover:drop-shadow-xl" isPressable onPress={onPress}>
            <CardHeader className="bg-white w-1/2 flex-col items-start justify-between">
                <div className="w-full flex flex-col">
                    <h4 className="text-black text-left font-medium m-0 text-2xl truncate text-ellipsis overflow-hidden">{name}</h4>
                    <Divider className="my-1" />
                    <p className="text-red-500 text-left m-0 text-lg font-bold text-ellipsis overflow-hidden">${price}</p>
                    <div className="overflow-hidden h-12">
                        <p className="text-sm text-left text-neutral-500 text-ellipsis overflow-hidden ">{description}</p>
                    </div>
                </div>
                <Button isIconOnly={true} className="bg-red-500 text-white rounded-full top-0 w-0 h-max p-1"><FaPlus /></Button>
            </CardHeader>
            <CardBody className="w-1/2">
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="w-full h-36 object-cover"
                    isZoomed
                    src={src}
                />
            </CardBody>
        </Card>
    );
}
