import squares from './boxesData';
// console.log('squares : ',squares);
import SquareComp from './squareComponent';

export default function BoxComponent(){
    
    return (
        <div className="boxes">
            {
                squares.map((eachItem)=>{
                   return <SquareComp key={eachItem.id} isOn = {eachItem.on} />
                })
            }
        </div>
    );
}