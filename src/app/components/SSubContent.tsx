// import {Service} from "../const/SConst"

type subContentInfo = {
    title : string,
    description : string,
    
    img : string,   
}

type SSubContentProps = {
    info: subContentInfo[]
}

const SSubContent = ({ info }: SSubContentProps) => {
    return (
        <div className="w-full flex flex-row bg-white">
            <ul className="space-x-1 text-sm text-gray-600">
                {info.map((content) => (
                    <li key={content.title}>{content.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SSubContent;
