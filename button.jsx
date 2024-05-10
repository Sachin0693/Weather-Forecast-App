import React from "react";

const Button = (props) => {

    return(
        <>
            <div class="border-2 rounded-lg w-20 p-2 ml-px flex justify-center cursor-pointer bg-gray-100 hover:bg-red-200" onClick={props.onClick} >
                {props.value}
            </div>
        </>
    )
}

export default Button;