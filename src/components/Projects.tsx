import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MyProjects, ArchivedProjects } from "./myprojects";
import { useState } from "react";

const Archived = () => {
    return(
        <>
         <div className="relative min-h-screen md:w-[65%] m-auto">
            <div className="absolute md:left-8 left-2 top-24 bottom-0 w-[4px] bg-accent-purple"></div>
            {ArchivedProjects.map((item, index) => (
                <div key={index} className="md:w-[85%] mb-8 m-auto rounded-lg p-8">
                    <div>
                        <h3 className="text-xl font-bold text-white">{item.Date}</h3>
                        <div
                            className="absolute left-0 md:mx-[34px] mx-[10px] md:my-5 my-3 h-4 w-4  bg-accent-purple rounded-full -translate-x-1/2"
                        ></div>
                        <div className="my-2 flex justify-between items-center">
                            <h1 className="text-accent-purple lg:text-6xl md:text-5xl text-4xl break-words font-bold">{item.Title}</h1>
                            {item.new == true && (
                                <span className="float-right bg-accent-purple text-white font-bold text-xl py-2 my-2 px-4 rounded-full w-[fit-content]">New!</span>
                            )}
                        </div>
                        <h3 className="text-xl text-accent-purple">{item.Descriptor}</h3>
                        {item.Information.map((item, index) => (
                            <p key={index} className="text-xl pt-4 text-white">{item}</p>
                        ))}
                        <p className="text-xl font-bold pt-4 text-white">
                            Skills I have used in this project: <meta charSet="U+0020 SPACE" /> 
                            {item.Skills.map((skill, index) => (
                                <span key={index} className="text-accent-purple font-normal">
                                    {skill.skill}
                                    {index < item.Skills.length - 1 ? (
                                        <span className="text-white font-normal">, </span>
                                    ) : (
                                        <span className="text-white font-normal">.</span>
                                    )}
                                </span>
                            ))}
                        </p>
                        <div className="flex justify-left gap-8 my-4">
                            {item.Website !== null && item.Website !== undefined && item.Website !== "" && (
                                <Link href={item.Website} target="_blank" className="border-solid border-white text-white border-2 hover:scale-105 transition-all text-xl px-4 py-2">Website</Link>
                            )}
                            {item.Repo !== null && item.Repo !== undefined && item.Repo !== "" && (
                                <Link href={item.Repo} target="_blank" className="border-solid border-white text-white border-2 hover:scale-105 transition-all text-xl px-4 py-2">GitHub Repository</Link>
                            )}
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-center items-center py-4">
                        {item.Pictures.map((picture, index) => (
                            <Image
                                key={index}
                                src={picture}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={item.Title}
                                className="rounded-lg w-full my-4 shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

function Projects() {
    // Show/hide archived projects
    const [state, setState] = useState(0);

    const stateHandler = () => {
        if (state == 0) {
            setState(1);
        } else {
            setState(0);
        }
    }

    return(
        <>
        <div className="relative min-h-screen md:w-[65%] m-auto" id="projects">
            <h1 className="text-6xl font-bold text-center text-accent-purple my-8">My Projects</h1>
            <div className="absolute md:left-8 left-2 top-24 bottom-0 w-[4px] bg-accent-purple"></div>
            {MyProjects.map((item, index) => (
                <div key={index} className="md:w-[85%] mb-8 m-auto rounded-lg p-8">
                    <div>
                        <h3 className="text-xl font-bold text-white">{item.Date}</h3>
                        <div
                            className="absolute left-0 md:mx-[34px] mx-[10px] md:my-5 my-3 h-4 w-4  bg-accent-purple rounded-full -translate-x-1/2"
                        ></div>
                        <div className="my-2 flex justify-between items-center">
                            <h1 className="text-accent-purple lg:text-6xl md:text-5xl text-4xl break-words font-bold">{item.Title}</h1>
                            {item.new == true && (
                                <span className="float-right bg-accent-purple text-white font-bold text-xl py-2 my-2 px-4 rounded-full w-[fit-content]">New!</span>
                            )}
                        </div>
                        <h3 className="text-xl text-accent-purple">{item.Descriptor}</h3>
                        {item.Information.map((item, index) => (
                            <p key={index} className="text-xl pt-4 text-white">{item}</p>
                        ))}
                        <p className="text-xl font-bold pt-4 text-white">
                            Skills I have used in this project: <meta charSet="U+0020 SPACE" /> 
                            {item.Skills.map((skill, index) => (
                                <span key={index} className="text-accent-purple font-normal">
                                    {skill.skill}
                                    {index < item.Skills.length - 1 ? (
                                        <span className="text-white font-normal">, </span>
                                    ) : (
                                        <span className="text-white font-normal">.</span>
                                    )}
                                </span>
                            ))}
                        </p>
                        <div className="flex justify-left gap-8 my-4">
                            {item.Website !== null && item.Website !== undefined && item.Website !== "" && (
                                <Link href={item.Website} target="_blank" className="border-solid border-white text-white border-2 hover:scale-105 transition-all text-xl px-4 py-2">Website</Link>
                            )}
                            {item.Repo !== null && item.Repo !== undefined && item.Repo !== "" && (
                                <Link href={item.Repo} target="_blank" className="border-solid border-white text-white border-2 hover:scale-105 transition-all text-xl px-4 py-2">GitHub Repository</Link>
                            )}
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-center items-center py-4">
                        {item.Pictures.map((picture, index) => (
                            <Image
                                key={index}
                                src={picture}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={item.Title}
                                className="rounded-lg w-full my-4 shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
            <h2 className="text-5xl text-center text-accent-purple my-8">Project Archive</h2>
            <button className="border-solid border-white block mx-auto mb-8 text-white border-2 hover:scale-105 transition-all text-xl px-4 py-2" onClick={stateHandler}>View Archive</button>
            {state === 1 ? <Archived /> : null}
        </>
    );
}

export default Projects;