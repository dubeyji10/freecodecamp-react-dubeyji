import trollFace from './TrollFace.png';

export default function MemeHeader(){
    return(
        <header className="myHeader">
            <div>
                <img className="trollFace" alt="troll face" src={trollFace}/>
                MemeGenerator
            </div>
            <div>a meme generator with react</div>
        </header>
    )
}