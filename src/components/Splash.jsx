import React from "react";
import Image from "next/image";
import Link from "next/link"

function Splash() {
    return (
        <div className="w-full md:w-[85%] my-16 p-8 md:rounded-lg m-auto md:grid md:grid-cols-2 md:gap-8 leading-normal">
            <div className="md:p-8">
                <h3 className="text-xl text-slate-950">Hello, My name is</h3>
                <h1 className="text-accent-purple text-6xl font-bold">Adam Salt.</h1>
                <p className="text-xl text-slate-950 pt-4">I'm a Software Engineering student at Sheffield Hallam University, Open source contributor & Website developer.</p>
                <p className="text-xl text-slate-950 pt-4">Welcome to my portfolio. It will have all of my projects, skills and experience all in one place!</p>
                <p className="text-xl text-slate-950 pt-4">Please contact me via my email: <br />
                <Link href="mailto:ajstrongdev@proton.me" className="text-accent-purple">ajstrongdev@proton.me</Link>
                </p>
            </div>
            <div className="mt-8 md:mt-0">
            <Image
                src="/logo.jpeg"
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

export default Splash;