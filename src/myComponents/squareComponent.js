
// states on squares will be defined and handled here

import React from "react";


export default function SquareComp(props){
    // console.log("props : ",props);

    const [currState , setCurrentState] = React.useState(props.isOn);

    const currStyle = {
        backgroundColor: currState ? null : "rgb(237 119 119)",
        fontSize: currState ? "1.22em" : "2.33em",
    };

    function toggleState(){
        setCurrentState(prevSate=>!prevSate)
    }

    return (
        <div style={currStyle} onClick={toggleState}>
            {currState ? "X":"O"}
        </div>
    )
}