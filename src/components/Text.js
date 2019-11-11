// functional component because we are not creating or
// maintaining state, we will pass state as props from app.js

import React from "react";

// using es6 to define functional stateless component

/*
Text component should change the initial state of text 
to given name passed through

Overview: 

value of empty str 
button onClick change str initial state to name passed through
*/

// expected behavior : 

// onClick of corbonizer, we will render the name setState
// in our changeName method - lives on App.js

const Text = props => {
  const { text, changeText } = props;
  return (
    <div>
      <h3>Name: {text}</h3>
      {/* onClick is a native React method */}
      {/* passed through the prop method of changeName from app.js */}
      <button onClick={changeText}>Corbonize</button>
    </div>
  );
};

export default Text;
