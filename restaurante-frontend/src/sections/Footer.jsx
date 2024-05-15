import React from "react";
import { Image, Link, Divider } from "@nextui-org/react";
import logo from "../assets/img/logoRojo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col mx-10 md:mx-32 justify-center items-center p-10">
            <div className="flex flex-col w-2/3 gap-10">
                <div className="flex gap-20 justify-between">
                    <div className="flex gap-1">
                        <Image
                            alt="Logo"
                            src={logo}
                            width={64}
                            height={64}
                        />
                        <h2 className="text-5xl font-macondo font-thin text-red-500">Rest<span className="font-base">con</span></h2>
                    </div>
                    <div className="flex gap-32">
                        <div className="flex flex-col gap-5">
                            <h3 className="font-bold">Información</h3>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="font-bold">Menu</h3>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                            <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer">Facebook</Link>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="flex justify-between w-full">
                    <p>© {currentYear} Restcon. All rights reserved.</p>
                    <div className="flex gap-2">
                        <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer"><FaFacebook /></Link>
                        <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer"><FaInstagram /></Link>
                        <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer"><FaXTwitter /></Link>
                        <Link href="https://www.facebook.com" target="_blank" className="text-neutral-600" rel="noopener noreferrer"><FaWhatsapp /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}