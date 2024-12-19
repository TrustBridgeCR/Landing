"use client";
import Link from "next/link";
import Image from "next/image";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import { Reveal } from "../Reveal";

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="features">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue bg-blueLight">You make the connections</span>
                            we manage <br />
                            the trust
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">With the right tools, you can empower your financial journey by building trust, fostering connections, and achieving your goals with transparency and security.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Choose your plan</Link>
                        </div>
                    </Reveal>
                </div>
                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.png`} alt={title} width="40" height="40" />
                                <div>
                                    <h4 className="text-primary ">{title}</h4>
                                    <p className="text-primaryDark">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
