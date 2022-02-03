import React from 'react';
import ReactDOM from 'react-dom';

//basic normal function
//nested Component
function ShowAll(){
  return(
    <>
    <Greeting/>
    <ContentText/>
    <SayGoodBey/>
    </>
  )
}
//arrow function with explicit return
const Greeting  = () => {
  return <h1>Hello and wellcome...</h1>
}

//Arrow function with implicit return
const SayGoodBey = () =>  <h4>It was nice to meet yout but good bey..</h4>

//simple anonymous function
const ContentText = function(){
  return (
    <h3>This is my first React Component</h3>
  )
}

/* you can't render more than one element into the DOM with ReactDOM,
as we tried hier, only one Element will be displayed,
To render more than one Component, we must put them all together in one Component, and then render this one "big" Component
*/

ReactDOM.render(<ShowAll/>, document.getElementById('root'));
//ReactDOM.render(<SayGoodBey/>, document.getElementById('root'));
//ReactDOM.render(<ContentText/>, document.getElementById('root'));