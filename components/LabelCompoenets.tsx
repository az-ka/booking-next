import React from "react";

interface Props {
    text: string;
}
const LabelCompoenets = (props: Props) => {
    return (
        <div>
            <label htmlFor="" className="leading-7 text-sm text-gray-600">
                {props.text}
            </label>
        </div>
    );
};

export default LabelCompoenets;
