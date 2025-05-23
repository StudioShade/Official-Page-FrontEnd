'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import PageRoute from "../feature/pageRoute";
import { MainIntroduce, SubContent } from '../const/SConst';

import Logo from '../../../public/images/logo.png';
import Test from '../../../public/images/test_img.png';
import SSubContent from "../components/SSubContent";
import SContent, {contentType} from "../components/SContent"
import SFooterContent from "../components/SFooterContent"


const initialize = () => {
    
}

const MainPage = () => {
    useEffect(() => {
        console.log("first insert")
        initialize()
    }, [])

    const [isContentHover, setContentHover] = useState<boolean[]>([false, false, false])
    const router = useRouter();

    const introduceCompanySubContent = [
        {
            title : "경영 철학",
            description : "",
            img : ""
        },
        {
            title : "연혁",
            description : "",
            img : ""
        },
        {
            title : "인재상",
            description : "",
            img : ""
        }
    ]

    const introduceServicesSubContent = [
        {
            title : "위댕",
            description : "",
            img : ""
        },
        {
            title : "뭐해먹지",
            description : "",
            img : ""
        },
        {
            title : "J(제이) - 계획으로 살다.",
            description : "",
            img : ""
        },
    ]

    const mainPageContent = [
        {
            type : contentType.onlyImage,
            imgPath : Test,
            title : "",
            description : ""
        },
        {
            type : contentType.onlyImage,
            imgPath : Test,
            title : "",
            description : ""
        },
        {
            type : contentType.onlyTitle,
            imgPath : "",
            title : "Studio Shade Official",
            description : ""
        }
    ];

    const handleClick = (page: PageRoute) => () => {
        router.push(page);// page가 곧 URL이니까 바로 push 가능
    };

    useEffect(() => {
        initialize()
    }, []);


    return (
        <div className="relative flex flex-col min-h-screen">
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
                    <div onMouseEnter={() => {
                            setContentHover([true, false, false])
                            
                        }}
                        onMouseLeave={() => setContentHover([false, false, false])}>
                        <button onClick={handleClick(PageRoute.Wedaeng)} className="text-gray-600 hover:text-black hover:font-bold" >
                            {MainIntroduce[0]}
                        </button>
                    </div>
                    <div onMouseEnter={() => setContentHover([false, true, false])}
                        onMouseLeave={() => setContentHover([false, false, false])}
                    
                        onClick={handleClick(PageRoute.J)} className="text-gray-600 hover:text-black hover:font-bold">
                        {MainIntroduce[1]}
                    </div>
                    <div onMouseEnter={() => setContentHover([false, false, true])}
                        onMouseLeave={() => setContentHover([false, false, false])}
                    
                        onClick={handleClick(PageRoute.WSE)} className="text-gray-600 hover:text-black hover:font-bold">
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
                            <div className="absolute top-[80px] left-0 w-full z-10 bg-white shadow-md"
                                onMouseEnter={() => {
                                    if(isContentHover[0] == true)
                                    setContentHover()
                                }}
                                onMouseLeave={() => setContentHover([false, false, false])}>
                                <SSubContent info = {introduceCompanySubContent}></SSubContent>
                            </div>
                        )}
            <main className="flex flex-col items-center justify-center px-6">
                <SContent info={mainPageContent}/>
                <SFooterContent/>
            </main>
        </div>
    );
};

export default MainPage;