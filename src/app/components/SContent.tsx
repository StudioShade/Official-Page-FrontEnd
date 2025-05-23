import Image from 'next/image';

export enum contentType {
    onlyImage,
    onlyTitle,
    onlyDescription,
    combineContent
}

type mainContentInfo = {
    type : contentType,
    imgPath : string,
    title : string,
    description : string
}

type SContentProps = {
    info : mainContentInfo[]
}

const SContent = ( { info }: SContentProps) => {
    return (
        <div>
            {
                info.map((item, idx) => {
                    if (item.type === contentType.onlyImage) {
                        return (
                            <div key={idx} className="flex-col mt-0">
                                <Image src={item.imgPath} alt="image"/>
                            </div>
                        );
                    } else if (item.type === contentType.onlyTitle) {
                        return (
                            <div key={idx} className="flex-col mt-10 mb-10">
                                <h2 className='text-center'>{item.title}</h2>
                            </div>
                        );
                    } else if (item.type === contentType.onlyDescription) {
                        return (
                            <div key={idx}>

                            </div>
                        );
                    } else {
                        return (
                            <div key={idx}>
                                
                            </div>
                        );
                    }
                })
            }
        </div>
    );
};

export default SContent;