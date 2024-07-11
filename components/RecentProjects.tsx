"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";

const RecentProjects = () => {
    return (
        <div className="py-20 flex flex-col justify-center">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-40 p-4 mt-20">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[41rem] w-[80vw]"
                        key={id}
                    >
                        <PinContainer
                            title={link}
                            href={link}
                        >
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[40vh]  mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    {/* <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p> */}
                                     <Link href={link} passHref legacyBehavior>
                                        <a target="_blank" className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                        </a>
                                    </Link>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;