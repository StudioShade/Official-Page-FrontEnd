'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { MainIntroduce, SubContent, CompanyInformation} from '../const/SConst';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../feature/providers/store';

import Logo from '../../../public/images/logo.png';
import Test from '../../../public/images/test_img.png';
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

const initialize = () => {
    
}

const getContent = (subcontentType: number) => {
    if (subcontentType == 1) {
        return introduceCompanySubContent
    }
    else if (subcontentType == 2) {
        return introduceServicesSubContent
    }
    else if (subcontentType == 3) {
        return mainPageContent
    } else {
        return []
    }
}

const MainPage = () => {
    useEffect(() => {
        console.log("first insert")
        initialize()
    }, [])

    const dispatch = useDispatch<AppDispatch>();
    const hoverState = useSelector((state: RootState) => state.hover.hoverState);

    const [isAreaHover, setAreaHover] = useState<boolean>(false)
    const [isContentHover, setContentHover] = useState<boolean>(false)



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

    const router = useRouter();

    const handleClick = (page: PageRoute) => () => {
        router.push(page);// page가 곧 URL이니까 바로 push 가능
    };


    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full py-6 px-15 flex flex-row bg-[#1b1e26] shadow-md items-center justify-between" 
                onMouseEnter={() => setAreaHover(true)}
                onMouseLeave={() => {setAreaHover(false); setContentHover(false);}}>
                <div className="flex flex-row items-center">
                    <div className="relative w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12 flex-shrink-0">
                        <Image src={Logo} alt="logo" fill className="object-contain" />
                    </div>
                    <div className="ml-5 text-xl sm:text-lg md:text-2xl font-bold text-gray-900">
                        Studio Shade
                    </div>
                </div>
                <nav id="introduce" className="absolute text-white text-xl left-1/2 transform -translate-x-1/2 hidden md:flex space-x-20">
                    <div onMouseEnter={() => setContentHover(true)}
                        onMouseLeave={() => setContentHover(false)}
                        onClick={handleClick(PageRoute.Wedaeng)} className="hover:font-bold" >
                        {MainIntroduce[0]}
                    </div>
                    <div 
                        onMouseEnter={() => setContentHover(true)}
                        onMouseLeave={() => setContentHover(false)}
                        onClick={handleClick(PageRoute.J)} className="hover:font-bold">
                        {MainIntroduce[1]}
                    </div>
                    <div 
                        onMouseEnter={() => setContentHover(true)}
                        onMouseLeave={() => setContentHover(false)}
                        onClick={handleClick(PageRoute.WSE)} className="hover:font-bold">
                        {MainIntroduce[2]}
                    </div>
                    <div 
                        onMouseEnter={() => setContentHover(true)}
                        onMouseLeave={() => setContentHover(false)}
                        onClick={handleClick(PageRoute.WSE)} className="hover:font-bold">
                        {MainIntroduce[3]}
                    </div>
                </nav>

                <nav className="space-x-6 hidden md:flex">
                    <div>
                        <p>{SubContent[0]}</p>
                    </div>
                </nav>
            </header>
                        {isAreaHover && isContentHover && (
                            <div onMouseEnter={() => setContentHover(true)}
                                onMouseLeave={() => setContentHover(false)}>
                                <SSubContent info = {
                                        getContent(contentTypeHover)
                                }></SSubContent>
                            </div>
                        )}
            <main className="flex flex-1 flex-col text-center px-6">
                
                <footer className="w-full py-10 px-20 text-left items-start justify-start">
                    <div className="flex flex-row space-x-5">
                        <p className="hover:font-bold hover:cursor-pointer">
                            오시는 길
                        </p>
                        <p className="hover:font-bold hover:cursor-pointer">
                            공지사항
                        </p>
                        <p className="hover:font-bold hover:cursor-pointer">
                            개인정보처리방침
                        </p>
                    </div>
                    <div className="flex flex-col py-5 space-y-1">
                        <p className="font-bold">
                            (주)스튜디오 셰이드
                        </p>
                        <p>
                            사업자 등록번호 : {CompanyInformation[0]} | CEO : {CompanyInformation[1]} | 주소 :  {CompanyInformation[2]}
                        </p>
                        <p>
                            © 2025 Studio Shade. All rights reserved.
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default MainPage;