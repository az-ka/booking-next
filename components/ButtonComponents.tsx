import React from "react";

interface Props {
    text: string;
}

const ButtonComponents = (props: Props) => {
    return (
        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            {props.text}
        </button>
    );
};

export default ButtonComponents;
