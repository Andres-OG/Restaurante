import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";
import logo from "../assets/img/LogoOjoBlanco.svg"
import logoNegro from "../assets/img/LogoOjo.png"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export function Nav() {
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [boxShadow, setBoxShadow] = useState(false);
    const [icon, setIcon] = useState(logo);

    const handleScrollPositionChange = (scrollPosition) => {
        if (scrollPosition > 100) {
            setNavbarColor('white');
            setTextColor('black');
            setBoxShadow(true);
            setIcon(logoNegro);
        } else {
            setNavbarColor('transparent');
            setTextColor('white');
            setBoxShadow(false);
            setIcon(logo);
        }
    };

    return (
        <Navbar
            onScrollPositionChange={handleScrollPositionChange}
            isBlurred={false}
            className={`fixed bg-${navbarColor} transition-colors text-${textColor} ${boxShadow && 'shadow-lg'} duration-300 ease-in-out`}
        >
            <NavbarBrand className="flex gap-5">
                <Button className="text-2xl" variant="ligth"> <HiOutlineMenuAlt1 /> </Button>
                <Link className="gap-3 hidden md:flex" href="#">
                    <Image src={icon} width={42} height={42} alt="logo" />
                    <p className={`text-${textColor} font-macondo font-bold text-2xl`}>Restcon</p>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center" className="hidden sm:flex gap-4">
                <NavbarItem>
                    <Link className={`text-${textColor}`} href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link className={`text-${textColor}`} href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className={`text-${textColor}`} href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className={`text-${textColor} text-lg lg:flex`}>
                    <Link className={`text-${textColor}flex items-start gap-2`} href="#"> <FaShoppingCart /> <p>Cart</p></Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link className={`text-${textColor} flex items-start gap-2`} href="Login.jsx"> <FaUser/> <p>Log in</p> </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className={`text-white bg-red-500`} href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
