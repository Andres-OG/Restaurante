import React from "react";
import { Tabs, Tab, Divider } from "@nextui-org/react";
import { PiBowlFood } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { LuDessert } from "react-icons/lu";
import { ModalO } from "./Modal";


export function Tabss({ content }) {
  const menu = Object.keys(content);
  const iconMenu = [
    <PiBowlFood />,
    <BiDrink />,
    <LuDessert />
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" variant="ligth"
        classNames={{
          cursor: "bg-red-500",
          tabContent: "group-data-[selected=true]:text-white"
        }}>
        {menu.map((item, index) => (
          <Tab
            key={index}
            title={
              <div className="flex items-center space-x-2">
                {iconMenu[index]}
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </div>
            }
          >
            <div className="flex flex-col gap-5">
            <Divider className="my-1" />
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 w-full h-1/5">
              {content[item].map((itemP, index) => (
                <div key={index}>
                  <ModalO name={itemP.name} src={itemP.src} price={itemP.price} description={itemP.description} content={item.content}/>
                </div>
              ))
              }
            </div>
            </div>
          </Tab>
        ))
        }
      </Tabs>
    </div>
  );
}
