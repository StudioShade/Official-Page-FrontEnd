'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { MainIntroduce, SubContent } from '../const/SConst';

import Logo from '../../../public/images/logo.png';
import SSubContent from "../components/SSubContent";

enum PageRoute {
    Home = "/home",
    Wedaeng = "/wedaeng/introduce",
    J = "/j/introduce",
    WSE = "/wse/introduce",
    Contact = "/contact"
}

type ComponentInfo = {
    id: number;
    title: string;
    description: string;
    link: string;
};

const components: ComponentInfo[] = [
    { id: 1, title: "Button", description: "Reusable button component", link: "/components/button" },
    { id: 2, title: "Card", description: "Card UI block", link: "/components/card" },
    { id: 3, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 4, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 5, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 6, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 7, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 8, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 9, title: "Modal", description: "Popup modal window", link: "/components/modal" },
    { id: 10, title: "Modal", description: "Popup modal window", link: "/components/modal" },
];

const initialize = () => {

}

const MainPage = () => {
    useEffect(() => {
        console.log("first insert")
        initialize()
    }, [])

    const [isContentHover, setContentHover] = useState<boolean>(false)
    const [isNeedsHover, setNeedsHover] = useState<boolean>(false)

    const introduceCompanySubContent = [
        {
            title : "경영 철학",
            description : "",
            img : ""
        },
        {
            title : "",
            description : "",
            img : ""
        },
        {
            title : "인재상",
            description : "",
            img : ""
        }
    ]

    const router = useRouter();

    const handleClick = (page: PageRoute) => () => {
        router.push(page);// page가 곧 URL이니까 바로 push 가능
    };

    useEffect(() => {
        initialize()
    }, []);


    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full py-6 px-8 bg-white shadow-md flex items-center justify-between">
                <div className="flex flex-row items-center">
                    <div className="relative w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12 flex-shrink-0">
                        <Image src={Logo} alt="logo" fill className="object-contain" />
                    </div>
                    <div className="ml-5 text-xl sm:text-lg md:text-2xl font-bold text-gray-900">
                        Studio Shade
                    </div>
                </div>
                <nav id="introduce" className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
                    <div onMouseEnter={() => setContentHover(true)}
                        onMouseLeave={() => setContentHover(false)}>
                        <button onClick={handleClick(PageRoute.Wedaeng)} className="text-gray-600 hover:text-black hover:font-bold" >
                            {MainIntroduce[0]}
                        </button>
                    </div>
                    <div onClick={handleClick(PageRoute.J)} className="text-gray-600 hover:text-black hover:font-bold">
                        {MainIntroduce[1]}
                    </div>
                    <div onClick={handleClick(PageRoute.WSE)} className="text-gray-600 hover:text-black hover:font-bold">
                        {MainIntroduce[2]}
                    </div>
                    <div onClick={handleClick(PageRoute.WSE)} className="text-gray-600 hover:text-black hover:font-bold">
                        {MainIntroduce[3]}
                    </div>
                </nav>

                <nav className="space-x-6 hidden md:flex">
                    <div>
                        <p>{SubContent[0]}</p>
                    </div>
                </nav>
                <div className="displ">

                </div>
            </header>
            {isContentHover && (
                            <div onMouseEnter={() => setContentHover(true)}
                                onMouseLeave={() => setContentHover(false)}>
                                <SSubContent info = {introduceCompanySubContent}></SSubContent>
                            </div>
                        )}
            <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
                {                    
                    components.map((component) => (
                        <a key={component.id} href={component.link}
                            className="p-6 border rounded-xl hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold mb-2">{component.title}</h2>
                            <p className="text-gray-600">{component.description}</p>
                        </a>))
                }

                <footer>
                    <div className="w-full py-4 text-left ml-0.5 text-gray-500 text-sm">

                    </div>
                    <p>
                        © 2025 Studio Shade. All rights reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default MainPage;