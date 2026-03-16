'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubContentInfo } from "../const/SConst";
import { ChevronRight } from 'lucide-react';

type SSubContentProps = {
    info: SubContentInfo[],
    panelWidth?: number,
}

const SSubContent = ({ info, panelWidth }: SSubContentProps) => {
    const router = useRouter();

    const toAbsolutePath = (path: string) => {
        if (!path) {
            return '/';
        }
        return path.startsWith('/') ? path : `/${path}`;
    };

    return (
        <div
            className="pointer-events-auto w-full max-w-[calc(100vw-3rem)] rounded-[28px] border border-white/10 bg-[#161a22]/95 px-6 py-5 shadow-2xl shadow-black/30 backdrop-blur-xl"
            style={panelWidth ? { width: `${panelWidth}px` } : undefined}
        >
            <ul className="flex w-full flex-col items-stretch gap-3 text-sm text-white/80">
                {info.map((content) => (
                    <li
                        key={content.title}
                        className="flex items-center justify-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-left font-medium whitespace-nowrap transition hover:cursor-pointer hover:border-white/25 hover:bg-white hover:text-black"
                        onClick={() => {  
                            router.push(toAbsolutePath(content.pagePath));
                        }}
                    >
                        {content.img && (
                            <Image src={content.img} alt={content.title} width={20} height={20} className="mr-3 h-5 w-5" />
                        )}
                        {content.title}
                        <ChevronRight className="ml-auto h-5 w-5" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SSubContent;
