import React from 'react';
import memesData from './memesData';


console.log("memes data json : ", memesData);
const memes = memesData['data']['memes'];

export default function MemeGeneration() {
    // const defaultColor = "#ffffff";
    const [memesImage, setMemesImage] = React.useState(20);
    console.log("current memesImage at begin : ", memesImage);
    console.log(memes[memesImage]['url']);

    function myClickHandler() {
        console.log("----state first-------\n setting a random new memeImageIndex");
        setMemesImage(index => Math.floor(Math.random() * memes.length));
        console.log("memesImageIndex now : ", memesImage);
        console.log("-----------------------");
        console.log(memes[memesImage]);
    }

    return (
        <div className="content">
            <form>
                <div className="myInput">
                    <input placeholder="Top Text" type="text" />
                    <input placeholder="Bottom Text" type="text" />
                </div>
                <button onClick={myClickHandler} type="button" className="newImageButton">
                    generate new image
                </button>
            </form>
            <div className='container'>
                <img src={memes[memesImage]['url']} alt="Avatar" className='image'/>
                <div className='overlay'>
                    <div className="text">{memes[memesImage]['name']}</div>
                </div>
            </div>

        </div>
    )
}