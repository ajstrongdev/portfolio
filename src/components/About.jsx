import React from "react";
import Image from "next/image";
import Link from "next/link";

const Text = [
    "Hey, I'm Adam Salt, known online as AJStrong. I'm a software engineer, website developer and overall technology enthusiast. I began to learn website development in my early teens through school, and have subsequently fallen in love with Software Engineering and development.",
    "Eventually I made the switch to Linux. I ended up finding the large world of Free and Open Source Software. Open Source captured my attention, and still has to this day.",
]

function About() {
    return(
        <div className="w-full md:w-[85%] my-16 p-8 md:rounded-lg m-auto md:grid md:grid-cols-2 md:gap-8 leading-normal">
            <div className="md:p-8">
                <h1 className="text-accent-purple text-6xl font-bold">About me.</h1>
                {Text.map((item, index) => (
                    <p className="text-xl pt-4" key={index}>{item}</p>
                ))}
                <div className="flex justify-left gap-8 my-4">
                    <Link href="/projects/" className="border border-solid border-black border-2 hover:scale-105 transition-all text-xl px-4 py-2">Projects</Link>
                    <Link href="/skills/" className="border border-solid border-black border-2 hover:scale-105 transition-all text-xl px-4 py-2">Skills</Link>
                </div>
            </div>
            <div className="mt-8 md:mt-0">
            <Image
                src="/placeholder.webp"
                width={0}
                height={0}
                sizes="100vw"
                alt="Picture of the author"
                className="rounded-lg w-full shadow-lg"
            />
            </div>
        </div>
    );
}

export default About;