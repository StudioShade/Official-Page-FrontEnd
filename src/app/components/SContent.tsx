import {Service} from "../const/SConst"

type contentInfo = {
    title : string,
    description : string,
    img : string,
    
}

const SContent = () => {
    return <div>
        <ol>{Service[0]}</ol>
        
    </div>
}

export default SContent;
