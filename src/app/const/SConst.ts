import type { StaticImageData } from 'next/image';

export const MainIntroduce : string[] = ["소개", "서비스", "사례", "프로젝트 제안" ];
export const SubContent : string[] = ["기술 블로그", "인재영입"];
export const CompanySubContent : string[] = [""];
export const Service : string[] = ["위댕", "J(제이)", "뭐해먹지", "쉐어 테이스트"];
export const CompanyInformation : string[] = ["375-13-02713", "임종완", "서울특별시 강남구 테헤란로 20길 18 2층"];

export type SubContentInfo = {
    title: string;
    description: string;
    img: StaticImageData | string | null;
    pagePath: string;
}

export enum PageRoute {
    Greeting = "/intro/greeting",
    Histrory = "/intro/history",
    Talent = "/intro/talent",
    Wedaeng = "/wedaeng",
    WhatToEat = "/whatshouldeat",
    J = "/j",
}