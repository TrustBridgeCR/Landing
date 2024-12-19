"use client";
import Image from "next/image";
import Link from "next/link";
import { MotionTransition } from "../MotionTransition";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Reveal } from "../Reveal";

export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Welcome to
                            <span className="block degradedBlue bg-blueLight">TrustBridge</span>
                            connected trust
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Discover our P2P microloan platform, designed to securely and transparently connect lenders and borrowers, empowering global communities.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#features" className="px-4 py-3 rounded-md bg-blueRadial">Learn more</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/cards-block.png" alt="TrustBridge" width="450" height="450" className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    );
}
