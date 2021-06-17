import React from "react"

import '../css/card.css';

var Card=(props)=>{
        let classCol = '';
        switch(props.color){
            case 0:
                classCol = "red";
                break;
            case 1:
                classCol = "green";
                break;
            case 2:
                classCol = "blue";
                break;
            case 3:
                classCol = "purple";
                break;
            case 4:
                classCol = "orange";
            break;

            case 5:
                classCol = "aqua";
                break;
            case 6:
                classCol = "lime";
            break;

            default:
                classCol = "yellow";
                break;
        }

        if (props.hidden && props.found === false)
        return (
            <button className={"Card"} onClick={()=>{props.revealCard(props.id)}}>
                    ?
            </button>
          );
        else
            return (
                <button className={"Card "+classCol} onClick={()=>{props.revealCard(props.id)}}>
                    {props.value}
                </button>
              );
}

export default Card;
