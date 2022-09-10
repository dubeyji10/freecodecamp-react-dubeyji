import './App.css';
import './myStyle.css';

// import MemeHeader from './myComponents/header';
// import MemeGeneration from './myComponents/memeBody';
// import AsimpleHook from './myComponents/thingComponent';
// import CounterCard from './myComponents/stateExample2';

// import ItemComponent from './myComponents/addItemState';

// import ContactsComponent from './myComponents/contactsState';
import BoxComponent from './myComponents/boxComponent';
// last : 7:12

// https://www.youtube.com/watch?v=bMknfKXIFA8&t=22416s

function App() {
  console.log('app rendered');
  // return (
  //     <div className="main">
  //       <MemeHeader></MemeHeader>
  //       <MemeGeneration></MemeGeneration>
  //     </div>
  // );

  // return (
  //   <div className='main'>
  //     <AsimpleHook></AsimpleHook>
  //   </div>
  // )
  // return (
  //   <div className='main'>
  //     <CounterCard></CounterCard>
  //   </div>
  // )

//   return (
//     <div className="main">
//       <ItemComponent></ItemComponent>
//     </div>
// );
// return (
//   <div className="main">
//     <ContactsComponent></ContactsComponent>
//   </div>
// );

return (
  <div className="main">
    <BoxComponent></BoxComponent>
  </div>
);

}

export default App;
