import React from "react";
import MySkills from "./myskills";

function Skills() {
    return(
        <div className="w-full md:w-[85%] my-16 md:grid md:grid-cols-2 md:gap-8 p-8 m-auto leading-normal">
            {MySkills.map((item, index) => (
                <div className="p-8 break-words bg-white shadow-xl mb-8 rounded-lg hover:scale-105 transition-all">
                    <h1 className="text-accent-purple text-center py-4 md:text-6xl text-4xl font-bold">{item.skill}</h1>
                    <p className="text-xl">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Skills;