import React from "react";
import MySkills from "./myskills";

function Skills() {
    return(
        <>
            <h1 className="text-6xl font-bold text-center text-accent-purple my-8" id="skills">My Skills</h1>
            <div className="w-full md:w-[65%] md:grid lg:grid-cols-2 md:grid-cols-2 md:gap-8 p-4 m-auto leading-normal">
                {MySkills.map((item, index) => (
                    <div 
                        className="p-8 break-words shadow-xl mb-8 rounded-lg hover:scale-105 transition-all bg-accent-purple bg-opacity-15" 
                        key={index} 
                    >
                        <h1 className="text-accent-purple text-center py-4 lg:text-6xl text-5xl font-bold">{item.skill}</h1>
                        <p className="text-xl text-white">{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Skills;