'use client';

interface DropdownLink {
    href: string;
    name: string;
    dropdown: { [key: string]: string };
}

import { useState } from "react";
import { Button } from "@/components/ui/button";

import data from "@/data/dataNavLink.json";
import Image from "next/image";
import LogoCedup from "@/public/img/img-logo.svg"
import Link from "next/link";

export default function MenuMobileCustom() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex">
            <Button
                className="bg-transparent hover:bg-transparent absolute top-7 right-3 z-50 shadow-none"
                onClick={toggleMenu}
            >
                <div className={`relative w-8 h-6 flex flex-col justify-between items-end cursor-pointer transition-all duration-300 ease-in-out  ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
                    <span className={`w-full h-1 bg-white transition-all duration-300 ease-in-out transform rounded-xl ${isOpen ? '-rotate-45 translate-y-[10px] !bg-primary-color' : ''}`}></span>
                    <span className={`h-1 bg-white transition-all duration-300 ease-in-out rounded-xl ${isOpen ? 'opacity-0 w-full' : 'w-3/4'}`}></span>
                    <span className={`h-1 bg-white transition-all duration-300 ease-in-out transform rounded-xl  ${isOpen ? 'rotate-45 translate-y-[-10px] w-full !bg-primary-color' : 'w-2/4 '}`}></span>
                </div>
            </Button>

            <div className={`absolute top-0 right-0 ${isOpen ? 'bg-zinc-600/80 w-full h-screen' : ''}`}
                onClick={() => setIsOpen(false)}
            >
                <div className={`absolute top-0 right-0 !bg-[#171616]/95 p-6 shadow-lg rounded-md z-40 h-screen transition-all duration-500 ${isOpen ? 'menu menuOpen' : 'menu menuClosed'}`}
                    onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col gap-2">
                        <Link href="/">
                            <Image
                                src={LogoCedup}
                                alt="Logo Cedup"
                                className="w-4/5 pb-16"
                            />
                        </Link>
                        {/* Mapeando os links sem dropdown */}
                        {data.navLink.map((link, index) => (
                            link.dropdown ? null : (
                                <a key={index} href={link.href} className="py-2 px-4 text-lg text-white">
                                    {link.name}
                                </a>
                            )
                        ))}

                        {/* Mapeando os links com dropdown por último */}
                        {data.navLink.map((link, index) => (
                            link.dropdown ? (
                                <DropdownMenu key={index} link={link} />
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componente de Dropdown
function DropdownMenu({ link }: { link: DropdownLink }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            <a href={link.href} className="py-2 px-4 text-lg text-white flex justify-start items-center" onClick={toggleDropdown}>
                {link.name}
                {/* Icone de seta, rotaciona quando o dropdown estiver aberto */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ms-2 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M7 10L12 15L17 10H7Z" fill="white" />
                </svg>
            </a>
            {/* Dropdown com animação de deslizamento e opacidade */}
            <div className={`absolute left-0 top-full w-full mt-2 transition-all duration-500 ease-in-out overflow-hidden ${isDropdownOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}>
                <ul>
                    {Object.entries(link.dropdown).map(([key, value]) => (
                        <li key={key} className="my-2">
                            <a href={`/${value}`} className="px-4 text-sm text-white uppercase">{key}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
