import React from "react";
import { Accordion, AccordionItem, Slider, CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";

export function Bar({ type }) {
    const [groupSelected, setGroupSelected] = React.useState([]);

    // Precios para cuaqluier tipo de comida, bebida o postre
    const prices = [100, 200, 300, 400, 500];

    // Categorias para cualquier tipo de comida
    const categoryFood = ['Vegetarian', 'Vegan', 'Meat', 'Fish', 'Chicken'];
    const typeFood = ['Mexican', 'Italian', 'Japanese', 'Chinese', 'American'];

    // Categorias para cualquier tipo de bebida
    const categoryDrinks = ['Soda', 'Juice', 'Beer', 'Wine', 'Cocktail'];

    // Categorias para cualquier tipo de postre
    const catgoryDesserts = ['Ice Cream', 'Cake', 'Pie', 'Cupcake', 'Donut'];

    return (
        <div>
            <div>
                <h2 className="text-5xl md:text-6xl font-bold text-red-500">Filtro</h2>
                <h3 className="text-xl text-black"> Decide que ver según tus preferencias </h3>
            </div>
            <Accordion defaultExpandedKeys={["1"]} >
                <AccordionItem key="1" aria-label="Price" subtitle="Press to expand" title="Price">
                    <Slider
                        label=" "
                        step={50}
                        minValue={0}
                        maxValue={prices[prices.length - 1]}
                        defaultValue={[0, 500]}
                        formatOptions={{ style: "currency", currency: "MXM" }}
                        className="max-w-md"
                        classNames={{
                            filler: "bg-red-500",
                            track: "bg-red-200",
                            thumb: "bg-red-500",
                        }}
                    />
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Category"
                    subtitle={
                        <span>
                            Press to expand <strong>key 2</strong>
                        </span>
                    }
                    title="Category"
                >
                    <div className="flex flex-col gap-1 w-full">
                        <CheckboxGroup
                            className="gap-1"
                            label="Select amenities"
                            orientation="horizontal"
                            value={groupSelected}
                            onChange={setGroupSelected}
                        >
                            <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
                            <CustomCheckbox value="tv">TV</CustomCheckbox>
                            <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
                            <CustomCheckbox value="parking">Parking</CustomCheckbox>
                            <CustomCheckbox value="pool">Pool</CustomCheckbox>
                            <CustomCheckbox value="gym">Gym</CustomCheckbox>
                        </CheckboxGroup>
                        <p className="mt-4 ml-1 text-default-500">
                            Selected: {groupSelected.join(", ")}
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Type" subtitle="Press to expand" title="Type">
                </AccordionItem>
            </Accordion>
        </div>
    );
}
