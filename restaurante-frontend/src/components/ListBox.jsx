import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";

export function ListBoxComponent() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <div>
      <ListboxWrapper >
        <Listbox 
          aria-label="Multiple selection example"
          variant="light"
          disallowEmptySelection
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <ListboxItem showDivider key="text">Text</ListboxItem>
          <ListboxItem showDivider key="number">Number</ListboxItem>
          <ListboxItem showDivider key="date">Date</ListboxItem>
          <ListboxItem showDivider key="single_date">Single Date</ListboxItem>
          <ListboxItem key="iteration">Iteration</ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </div>
  );
}

export const ListboxWrapper = ({children}) => (
  <div className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
