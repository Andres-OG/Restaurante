import React from "react";
import { Menu } from "../components/Menu";
import { Bar } from "../components/Bar";
import { useMediaQuery } from '@react-hook/media-query';
import { useState } from "react";

export function MenuSection() {
    const [filter, setFilter] = useState(false);

    const handleFilter = (e) => {
        e.preventDefault();
        setFilter(!filter);
    };

    const matches = useMediaQuery('only screen and (max-width: 768px)');
    return (
        <div className="flex flex-col md:flex-row gap-16">
  {!matches ? (
    <div className="w-3/12">
      <div className="sticky top-32">
        <Bar />
      </div>
    </div>
  ) : (
    filter && (
      <div className="w-full">
        <Bar />
      </div>
    )
  )}
  <div className="w-full xl:w-8/12 2xl:w-10/12">
    <Menu handleFilter={handleFilter} />
  </div>
</div>

    );
}
