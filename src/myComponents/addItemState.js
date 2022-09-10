import React from "react";


export default function ItemComponent(){
    const [thingsArray , setThingsArray] = React.useState(['Thing 1' , 'Thing 2']);
    function itemAdder(){
        console.log('adding item...',`Thing ${thingsArray.length+1}`);
        setThingsArray(function(prevThings){
            return [...prevThings , `Thing ${prevThings.length+1}`];

        })

    }

    return (
        <div className="items-div">
            <div onClick={itemAdder} className="add-button"> add item + </div>
            <div>
                {
                thingsArray.map((item,index)=>{
                    return <div id={`item_${index}`} key={index}>{item.toUpperCase()}</div>
                })
                }
            </div>
        </div>
    )
}

