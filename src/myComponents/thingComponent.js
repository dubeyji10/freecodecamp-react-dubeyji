import React from "react";

// hooks take and manipulate props -- properties
// hooks is something how react remembers saved values within a component
// porps are immutable -- but states are mutable
export default function AsimpleHook(){
    const answerArray = ['YES' ,'NO'];

    const [isImportantCounter , setIsImportantCounter] = React.useState(0);
    console.log(">>renders isImportantCounter : ",isImportantCounter);
    function stateChanger(){
        console.log("clicked to change answer a callback function");
        // %2 -- to cycle between yes and no
        // setIsImportant("NO");
        setIsImportantCounter(counter=>(counter+1)%2);
    }
    // ternary equivalent



    return(
        <div className="stateDiv">
            <div className="question">Is state important to know ?</div>
            <div onClick={stateChanger} className="answer"> {answerArray[isImportantCounter]}  </div>
        </div>
    )

}