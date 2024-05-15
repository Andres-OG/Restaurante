import React from "react";
import { CardFood } from "./Card";
import {Input} from "@nextui-org/react";
import { ListBoxComponent } from "./ListBox";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Image, Button, useDisclosure } from "@nextui-org/react";

export function ModalO({ name, src, price, description, content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CardFood name={name} src={src} price={price} description={description} onPress={onOpen} />
      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row w-full gap-10 justify-beetwen">
                  <div>
                    <Image src={src} alt="food" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="text-3xl font-bold">
                      <h2>{name}</h2>
                      <p>MX${price}</p>
                    </div>
                    <h2 className="text-2xl font-league">Ingredientes</h2>
                    <p>Elige los ingredientes de tu {name}</p>
                    <ListBoxComponent />
                    <Input
                      type="number"
                      placeholder="1"
                      labelPlacement="outside"
                      className="w-1/4"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="danger" onPress={onClose}>
                  Ordenar | MX${price}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
