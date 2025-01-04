import React from "react";
import Image from "next/image";
import Link from "next/link"

function Splash() {
    return (
        <div className="w-full md:w-[85%] m-auto leading-normal">
            <div className="md:w-[25%] w-[50%] m-auto p-4">
                <Image
                    src="/logo.jpeg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Picture of the author"
                    className="rounded-full w-full shadow-lg border-4 border-accent-purple hover:scale-110 hover:border-8 transition-all"
                />
            </div>
            <div className="md:w-[65%] m-auto p-4">
                <div className="text-center">
                    <h3 className="text-2xl text-white">Hello, My name is</h3>
                    <h1 className="text-accent-purple text-6xl font-bold">Adam Salt.</h1>
                </div>
                <p className="text-2xl text-white pt-4">I'm a Software Engineering student at Sheffield Hallam University, Open source contributor & Website developer.</p>
                <p className="text-2xl text-white pt-4">Welcome to my portfolio. It will have all of my projects, skills and experience all in one place!</p>
                <p className="text-2xl text-white pt-4">Please contact me via my email: <br />
                    <Link href="mailto:ajstrongdev@proton.me" className="text-accent-purple">ajstrongdev@proton.me</Link>
                </p>
            </div>
        </div>
    );
}

export default Splash;