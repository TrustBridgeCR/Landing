"use client"
import Link from "next/link";
import { dataHeader } from "./Header.data";
import { RiMenu3Line } from 'react-icons/ri'
import { useState } from "react";
import Image from "next/image";
import { MotionTransition } from "../MotionTransition";

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8">
                <Link href="/" className="flex items-center text-3xl font-extrabold text-white">
                    TrustBridge
                </Link>
                <RiMenu3Line className="block text-3xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className='px-4 transition-all duration-500 ease-in-out'>
                                <Link href={idLink} className="text-lg hover:text-secondary">{name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </MotionTransition>
    )
}
