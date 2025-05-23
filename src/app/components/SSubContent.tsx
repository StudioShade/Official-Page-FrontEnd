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
        <ul className="w-full flex flex-row items-center bg-white">
                {info.map((content) => (
                    <li key={content.title} className="">{content.title}</li>
                ))}
        </ul>
    );
};

export default SSubContent;
