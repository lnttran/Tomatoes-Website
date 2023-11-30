"use client";
import React, { useState } from "react";
import './styles.css';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";


export function NavbarDefault() {
    //this would be the list of items in the nav bar 
    //TO DO: Landing page nav bar would be different from log in 
    const [openNav, setOpenNav] = useState(false);

    const menuItems = [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Recipe", href: "#" },
    ];

    const navList = (
        // <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-48">
        <ul className="nav-list">
            {menuItems.map((item, index) => (
                <Typography
                    key={index}
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href={item.href} className="flex items-center">
                        {item.label}
                    </a>
                </Typography>
            ))}
        </ul>
    )

    return (
        <div className="-m-6 max-h-[768px] w-[100%]">
            <Navbar className="sticky top-0 z-0 backdrop-blur-lg bg-transparent h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 text-[1.7rem] font-logo"
                    >
                        Tomatoes
                    </Typography>
                    <div className="flex items-center gap-8">
                        <div className="mr-8 hidden lg:block">{navList}</div>
                    </div>
                    <div className="flex items-center gap-x-1 justify-end">
                        <Button
                            variant="text"
                            size="sm"
                            className="hidden lg:inline-block nav-list"
                        >
                            <span>Log In</span>
                        </Button>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block nav-list"
                        >
                            <span>Sign in</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>

                </div>
            </Navbar >
        </div >
    )

}