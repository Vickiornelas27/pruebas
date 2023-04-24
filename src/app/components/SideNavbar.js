import React from 'react';
import { useState } from 'react';

const menu = [
    { name: "Inicio", href: "/", icon: "" },
    { name: "Infantil", href: "/infantil" },
    { name: "Servicios", href: "/servicios" },
    { name: "About", href: "/about" },
    { name: "Libros", href: "/libros" },
];

function Menu() {
    return (
        <section className=''>
            <div className="p-4 hover:bg-green-300">
                <img className='rounded-full h-20 w-33 mr-2 ' src="/img/logoTecnilibros.gif" alt="imagen logo" width={250} height={100} style={{ margin: "auto" }} />
            </div>
            <div className="text-base text-center cursor-pointer font-bold text-green-400 border-b border-yellow-400 pb-4 w-full">
                <h2>MENU PRINCIPAL</h2>
            </div>
            <div className='-mt-1 w-72 grid'>
                {menu.map((item) => (
                    <a className={item.current ?
                        "my-2 px-3 py-2 text-lg text-blue-700 font-medium border border-green-400 border-dashed"
                        : "my-2 px-3 py-2  text-lg text-green-400 font-medium focus:outline-dashed hover:bg-green-300 hover:text-blue-800"}
                        key={item.name} href={item.href}>{item.name}</a>))}
            </div>
        </section>
    )
}

export default function MenuAcordion() {
    const [open, setopen] = useState(false);
    return (
        <div className="top-2 left-2 absolute mx-auto grid gap-6 peer justify-center bg-orange-400 flex-col border ">
            <div className='flex items-center justify-between px-2 py-2 border-b bg-white'>
                <div>
                    <img className="h-10 w-10 px-2 py-2 hover:border hover:border-gray-800 hover:border-dashed hover:cursor-pointer"
                        onClick={() => setopen(!open)}
                        src={
                            open
                                ? "https://www.svgrepo.com/show/312300/hamburger-menu.svg"
                                : "https://www.svgrepo.com/show/305186/close.svg"}
                        alt="Menu Bar" />
                </div>
            </div>
            {/*Menu solo sera visible cuando click*/}
            {!open &&
                <div className='h-screen px-3 py-[px] grid gap-y-6 border-b border-black'><Menu /></div>}
        </div>
    )
}