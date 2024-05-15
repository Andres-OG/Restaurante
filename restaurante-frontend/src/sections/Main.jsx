import React from "react";
import { Banner } from "./Banner";
import { CouponsSection } from "./CouponsSection";
import { MenuSection } from "./MenuSection";
import { Noticed } from "./Noticed";
import { Divider } from "@nextui-org/react";
import { Footer } from "./Footer";
import { Header } from "./Header";


export function Main() {
    return (
        <div className="w-full h-full font-league">
            <Header />
            <main className=" flex flex-col gap-5 md:gap-10">
                <Banner />
                <div className="flex flex-col px-10 md:px-32 gap-10">
                    <CouponsSection />
                    <Divider className="my-4" />
                    <MenuSection />
                </div>
                <Noticed />
            </main>
            <Footer />
        </div>
    );
}