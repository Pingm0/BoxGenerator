import React, { useState } from "react";

function BoxForm (props) {

    const {colorArray,setColorArray} = props;

    const [color,setColor] = useState("")

    const submitHandler = (e) => {
        e.preventDefault ()
        setColorArray([...colorArray,color])
        document.querySelector('input').value = ""
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type={"text"} onChange={(e) => {setColor(e.target.value)}} />
                <input type={"submit"} value={"Add a Box"} />
            </form>
            {console.log(color)}
        </div>
    )
}

export default BoxForm;