import React from "react";
// import starFill from './images/starFilled.jpg';
// import starEmpty from './images/starEmpty.jpg';
import IsContactFavorite from "./favoriteComponent";
// using state hook on object

const coreyObject = {
    contactName: "Corey Schafer",
    contactAbout: "Corey Schafer is a full-time content creator publishing regular Python tutorials on YouTube."
    , youtubeLink: null,
    isFavorite: false
}
const fireshipObject = {
    contactName: "fireship",
    contactAbout: "Jeff Delaney (known online as Fireship), is an American variety web development YouTuber who does tutorials for front end web development"
    , youtubeLink: null,
    isFavorite: false


}
const tomScottObject = {
    contactName: "Tom Scott",
    contactAbout: "Thomas Scott is a British YouTuber and web developer. He is best known for producing online videos for his self-titled YouTube channel, which mainly offers educational videos across a range of topics including history, geography, science, technology, and linguistics "
    , youtubeLink: 'https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A',
    isFavorite: false

}
const sentdexObject = {
    contactName: "Harrison Kinsley",
    contactAbout: "Harrison Kinsley, Creator of  Ensmo.com, PythonProgramming.net, Sentdex.com, and many others."
    , youtubeLink: 'https://www.youtube.com/user/sentdex',
    isFavorite: true
}
const contactList = [fireshipObject, tomScottObject, coreyObject, sentdexObject];


export default function ContactsComponent() {
    console.log('contactcomponent rendered');

    const [currentContact, setCurrentContact] = React.useState(contactList[0])

    function generateNewContact() {
        const index = Math.floor(Math.random() * contactList.length)
        console.log("setting new contact in page of index : ", index);
        //must pass new object not --- index of array ---
        // no need to take previous args ----
        // just pass new object
        setCurrentContact(function () {
            return contactList[index];
        })

    }
    // now changing object properties using states
    // const starToUse = currentContact.isFavorite ? starFill : starEmpty;

    function favoriteTheContact() {
        setCurrentContact(currCon => {
            console.log('contact is now favourite ? ', !currCon.isFavorite);
            return { ...currCon, isFavorite: !currCon.isFavorite }
        })
    }

    return (
        <div className="contact-card">
            <div className="contact-item">
                <div className="contact-name">{currentContact.contactName}</div>
                <div className="contact-about">{currentContact.contactAbout}</div>
                {
                    currentContact.youtubeLink !== null ? <div className="youtubeLink"><a rel="noreferrer" href={currentContact.youtubeLink} target="_blank">YouTube Link</a></div> : <div>NO YouTube Link Available</div>
                }
            </div>
            <IsContactFavorite isFavorite={currentContact.isFavorite} handleClick={favoriteTheContact} />
            <div onClick={generateNewContact} className="newContact"> - GET A NEW CONTACT - </div>
        </div>
    )
}