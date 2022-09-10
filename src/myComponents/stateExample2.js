import React from "react";

export default function CounterCard(){

    const[counter , setCounter] = React.useState(101);
    console.log(">>current : ",counter);
    // function add(){
    //     console.log(" adding 1 to ",counter);
    //     setCounter(counter+1);

    // }
    // function sub(){
    //     console.log(" subtracting 1 from ",counter);
    //     setCounter(counter-1);

    // }
    function add(){
        setCounter(function(oldValue){
            console.log("a callback function for add");
            return oldValue + 1;
        })
    }
    function sub(){
        // setCounter(function(oldValue){
        //     console.log("a callback function for sub");
        //     return oldValue - 1;
        // })
        setCounter(prev => prev-1);
    }

    return(
        <div className="counterCard">
            <div onClick={sub} className="minusButton">-</div>
            <div className="value"> {counter} </div>
            <div onClick={add} className="plusButton">+</div>
        </div>
    )
}