import React from "react";

export function Image({ src, classN }) {
  return (
    <div className={classN}>
      <img
        src={src}
        alt="imagen de la comida"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}
