import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Offer } from "./Offer";

export function CarouselC() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-4 bg-white" : "w-2 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
    >
      <div className="bg-[url('/Users/andresog/Documents/Restaurante/restaurante-frontend/src/assets/img/fondoPizza.jpg')] bg-cover bg-center">
        <Offer classN="offer rounded-xl w-full" food="Pizza" type="2x1" text="Only on Mondays!" />
      </div>
      <div className="bg-[url('/Users/andresog/Documents/Restaurante/restaurante-frontend/src/assets/img/fondoHamburguesa.jpg')] bg-cover bg-center">
        <Offer classN="offer rounded-xl w-full" food="Hamburguer" type="2x1" text="Only on Tuesdays!" />
      </div>
      <div className="bg-[url('/Users/andresog/Documents/Restaurante/restaurante-frontend/src/assets/img/fondoHD.jpg')] bg-cover bg-center">
        <Offer classN="offer rounded-xl w-full" food="Hot Dog" type="2x1" text="Only on Wednesdays!" />
      </div>
    </Carousel>
  );
}