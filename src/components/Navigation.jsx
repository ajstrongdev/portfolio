import Link from "next/link";
import React from "react";

let state = 0;

const Items = [
    {
        link: "../",
        goto: "Home",
        key: 1,
    },
    {
        link: "/projects/",
        goto: "Projects",
        key: 2,
    },
    {
        link: "/skills/",
        goto: "Skills",
        key: 3,
    },
    {
        link: "https://www.linkedin.com/in/adamsalt/",
        goto: "LinkedIn",
        key: 4,
    },
    {
        link: "https://github.com/ajstrongdev",
        goto: "GitHub",
        key: 5,
    }
]

function MobileMenu(menuid) {
    const menu = document.getElementById(menuid);
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        state = 1;
    } else {
        menu.classList.remove('block');
        menu.classList.add('hidden');
        state = 0;
    }
}

function Navigation() {
    return (
        <div>
            <nav className="md:w-[85%] m-auto md:my-4 md:rounded-lg flex items-center justify-between">
                <div className="p-4 text-xl">
                    <Link href="../">By <span className="font-bold text-accent-purple">AJStrong</span>.</Link>
                </div>
                <div className="px-4 text-center rounded-lg md:flex lg:gap-8 md:gap-4 hidden md:block">
                        {Items.map((item) => (
                            <p key={item.key}><Link href={item.link} className="text-xl hover:text-accent-purple transition-all">{item.goto}</Link></p>
                        ))}
                </div>
                <div
                    className="p-2 px-4 cursor-pointer md:hidden"
                    onClick={() => MobileMenu('mega-menu')}
                >
                    <h1 className="text-3xl">≡</h1>
                </div>
            </nav>
            <div className="hidden transition-all" id="mega-menu">
                <div className="w-full m-auto">
                    <div className="text-2xl bg-violet-200 p-8">
                        {Items.map((item) => (
                            <li className="list-none p-4" key={item.key}>
                                <Link href={item.link}>
                                    <span className="" onClick={(e) => e.stopPropagation()}>{item.goto}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;