import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyProjects from "./myprojects";

function Projects() {
    return(
        <div className="w-full md:w-[85%] my-16 md:p-8 p-4 m-auto leading-normal">
            {MyProjects.map((item, index) => (
                <div key={index} className="md:w-[85%] mb-8 m-auto bg-white rounded-lg shadow-xl p-8">
                    <div>
                        <h3 className="text-xl font-bold">{item.Date}</h3>
                        <h1 className="text-accent-purple text-6xl font-bold">{item.Title}</h1>
                        <h3 className="text-xl text-accent-purple">{item.Descriptor}</h3>
                        {item.Information.map((item, index) => (
                            <p key="index" className="text-xl pt-4">{item}</p>
                        ))}
                        <p className="text-xl font-bold pt-4">
                            Skills I have used in this project: <meta charSet="U+0020 SPACE" /> 
                            {item.Skills.map((skill, index) => (
                                <span key={index} className="text-accent-purple font-normal">
                                    {skill.skill}
                                    {index < item.Skills.length - 1 ? (
                                        <span className="text-slate-950 font-normal">, </span>
                                    ) : (
                                        <span className="text-slate-950 font-normal">.</span>
                                    )}
                                </span>
                            ))}
                        </p>
                        <div className="flex justify-left gap-8 my-4">
                            {item.Website !== null && item.Website !== undefined && item.Website !== "" && (
                                /* Only display website button if the Website property is not null, undefined, or an empty string */
                                <Link href={item.Website} target="_blank" className="border border-solid border-black border-2 hover:scale-105 transition-all text-xl px-4 py-2">Website</Link>
                            )}
                            {item.Repo !== null && item.Repo !== undefined && item.Repo !== "" && (
                                <Link href={item.Repo} target="_blank" className="border border-solid border-black border-2 hover:scale-105 transition-all text-xl px-4 py-2">GitHub Repository</Link>
                            )}
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-center items-center">
                        {item.Pictures.map((item, index) => (
                            <Image
                                key={index}
                                src={item}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={item.Title}
                                className="rounded-lg w-full shadow-lg mb-4"
                            />
                        ))}
                    </div>
                </div>
            ))}
   </div>
    );
}

export default Projects;