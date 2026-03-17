'use client';

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { MainIntroduce, SubContent, CompanyInformation} from '../const/SConst';

import SSubContent from "../components/SSubContent";
import { SubContentInfo, PageRoute }  from "../const/SConst";
import { ASSET_PATH } from "../feature/components/assetsPath";
import { MoveUpRight } from 'lucide-react';


enum SubContentType {
    introduce = 0,
    Services = 1,
    Case= 2,
    MainPage = 3
}

const introduceCompanySubContent: SubContentInfo[] = [
        {
            title : "인사말",
            description : "",
            img : null,
            pagePath: PageRoute.Greeting
        },
        {
            title : "연혁",
            description : "",
            img : null,
            pagePath: PageRoute.Histrory
        },
        {
            title : "인재상",
            description : "",
            img : null,
            pagePath: PageRoute.Talent
        }
    ]
const ServiceSubContent: SubContentInfo[] = [
        {
            title : "위댕 - 우리 댕댕이 친구만들기 프로젝트",
            description : "",
            img : ASSET_PATH.serviceWedaeng,
            pagePath: PageRoute.Wedaeng
        },
        {
            title : "뭐해먹지 - 일상의 식사 고민 해결",
            description : "",
            img : ASSET_PATH.serviceWSE,
            pagePath: PageRoute.WhatToEat
        },
        {
            title : "제이 (J) - 계획적으로 맛있게",
            description : "",
            img : ASSET_PATH.serviceJ,
            pagePath: PageRoute.J
        }
    ]
const ProjectSubContent: SubContentInfo[] = [
        {
            title : "구축 사례",
            description : "",
            img : "",
            pagePath: PageRoute.Wedaeng
        },
    ]

const ProjectOfferSubContent: SubContentInfo[] = [
        {
            title : "비즈니스 제안",
            description : "",
            img : "",
            pagePath: PageRoute.Wedaeng
        },
        {
            title : "개발 프로젝트 제안",
            description : "",
            img : "",
            pagePath: PageRoute.Wedaeng
        },
    ]



const initialize = () => {
    
}

const MainPage = () => {
    useEffect(() => {
        console.log("first insert")
        initialize()
    }, [])

    const [selectedNav, setSelectedNav] = useState<number | null>(null);
    const [navWidth, setNavWidth] = useState<number>(0);
    const navRef = useRef<HTMLElement>(null);
    const subContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateNavWidth = () => {
            if (navRef.current) {
                setNavWidth(navRef.current.offsetWidth);
            }
        };

        updateNavWidth();

        const observer = new ResizeObserver(() => {
            updateNavWidth();
        });

        if (navRef.current) {
            observer.observe(navRef.current);
        }

        window.addEventListener('resize', updateNavWidth);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateNavWidth);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            const insideNav = navRef.current?.contains(target);
            const insideSub = subContentRef.current?.contains(target);
            if (!insideNav && !insideSub) {
                setSelectedNav(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getContent = (subcontentType: number) => {
        if (subcontentType == 1) {
            return introduceCompanySubContent;
        }
        else if (subcontentType == 2) {
            return ServiceSubContent;
        } else if (subcontentType == 3) {
            return ProjectSubContent;
        } else if (subcontentType == 4) {
            return ProjectOfferSubContent;
        } else {
            return [];
        }
    }

    const handleNavClick = (index: number) => {
        setSelectedNav(prev => (prev === index ? null : index));
    };


    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <header className="w-full py-4 px-15 flex flex-row bg-[#1b1e26] shadow-md items-center justify-between">
                <div className="flex flex-row items-center">
                        <div className="relative w-16 h-16 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0">
                            <Image src={ASSET_PATH.logo} alt="Studio Shade logo" fill className="object-contain" priority />
                    </div>
                    <div className="ml-4 text-lg sm:text-base md:text-xl font-bold text-white">
                        Studio Shade
                    </div>
                </div>
                <nav ref={navRef} id="introduce" className="absolute text-white text-xl left-1/2 transform -translate-x-1/2 hidden md:flex space-x-20">
                    {[SubContentType.introduce, SubContentType.Services, SubContentType.Case, SubContentType.MainPage].map((route, i) => (
                        <div
                            key={i}
                            onClick={() => handleNavClick(i)}
                            className={`hover:cursor-pointer  px-5 py-1 rounded-full transition-all select-none ${
                                selectedNav === i
                                    ? 'bg-white text-black font-bold'
                                    : 'hover:font-bold'
                            }`}
                        >
                            {MainIntroduce[i]}
                        </div>
                    ))}
                </nav>

                <nav className="space-x-6 hidden md:flex hover:cursor-pointer">
                    <div>
                        <p>{SubContent[0]}
                            <MoveUpRight className="ml-2 inline-block h-5 w-5" />
                        </p>
                    </div>
                    <div>
                        <p>{SubContent[1]}
                            <MoveUpRight className="ml-2 inline-block h-5 w-5" />
                        </p>

                    </div>
                </nav>
            </header>
                        {selectedNav !== null && (
                            <div ref={subContentRef} className="pointer-events-none absolute left-0 top-[80px] z-40 flex w-full justify-center px-6">
                                <SSubContent info={getContent(selectedNav + 1)} panelWidth={navWidth} />
                            </div>
                        )}
            <main className="flex flex-1 flex-col text-center px-6">
                <div className="flex flex-col h-screen items-center justify-center gap-4">
                    <h1 className="text-6xl font-bold">
                        홈페이지가 리뉴얼 중이에요!
                    </h1>
                    <p className="text-lg text-[#FFDE24]">
                        더 멋진 모습으로 곧 찾아뵐게요!
                    </p>
                </div>
                <div className="flex flex-col h-screen items-center justify-center gap-4">
                    <h1 className="text-6xl font-bold">
                        Welcome to Studio Shade
                    </h1>
                    <p className="text-lg text-[#FFDE24]">
                        The future is built on small details.
                    </p>
                </div>
            </main>
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
                            상호명 : Studio Shade
                        </p>
                        <p>
                            사업자 등록번호 : {CompanyInformation[0]} | 대표자: {CompanyInformation[1]} | 주소 :  {CompanyInformation[2]}
                        </p>
                        <p>
                            © 2025 Studio Shade. All rights reserved.
                        </p>
                    </div>
                </footer>
        </div>
    );
};

export default MainPage;