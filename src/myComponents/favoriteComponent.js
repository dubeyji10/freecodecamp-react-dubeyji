import starFill from './images/starFilled.jpg';
import starEmpty from './images/starEmpty.jpg';

// passing states as props

// using handle click the whole state is passed between components
// props has the isFavourite property from contact object
// use props.handleClick
export default function IsContactFavorite(props) {
    const starToUse = props.isFavorite ? starFill : starEmpty;
    console.log('\n______iscontactfavoritecomponent rendered\n________________');
    console.log('props got : ', props);
    return (
        <div className="isFavourite"> <img alt="star" src={starToUse} onClick={props.handleClick} /> </div>
    );
}