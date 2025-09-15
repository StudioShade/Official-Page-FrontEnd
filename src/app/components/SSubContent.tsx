'use client';

// import {Service} from "../const/SConst"
import { useRouter } from "next/navigation";

type subContentInfo = {
    title : string,
    description : string,
    img : string,
    pagePath : string
}

type SSubContentProps = {
    info: subContentInfo[],
}

const SSubContent = ({ info }: SSubContentProps) => {
    const router = useRouter();

    return (
        <div className="w-full flex flex-row items-center justify-center bg-white">
            <ul className="space-x-1 text-sm text-gray-600">
                {info.map((content) => (
                    <li
                        key={content.title}
                        className="text-black font-medium cursor-pointer hover:font-bold"
                        onClick={() => {  
                            router.push(content.pagePath);
                        }}
                    >
                        {content.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SSubContent;
