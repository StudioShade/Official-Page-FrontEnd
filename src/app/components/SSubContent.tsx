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
        <div className="w-full flex justify-center bg-white p-4">
            <ul className="flex flex-row space-x-4">
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
