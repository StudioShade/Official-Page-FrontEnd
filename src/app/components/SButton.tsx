type ButtonProps = {
    title : string
};

export const SButton = (props : ButtonProps) => {

    return <button>
        <title>
            {props.title}
        </title>

    </button>
}