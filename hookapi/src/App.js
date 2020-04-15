import React, { useReducer } from 'react';
import './App.css';
import Fetchapi from './api/Fetchapi'
import Fetchinput from './api/Fetchinput'
import Fetchjob from './api/Fetchjob'
import Loadapi from './api/Loadapi'
import Loadreducer from './api/Loadreducer';
import Count from './custom/Count'
import Count1 from './custom/Count1'
import Title from './custom/Title'
import Title1 from './custom/Title1'
import Parent from './callback/Parent'

// import Classa from './ReduceContext/Classa';   //for reducecontext
// import Classb from './ReduceContext/Classb';
// import Classc from './ReduceContext/Classc';
// export const Userreduce = React.createContext();


//import ClassA from './contexts/ClassA';   //For contexts
// export const Usercontext = React.createContext();
// export const Usercreator = React.createContext();


const initstate = 0;
const reducer = (state,action) =>{
  switch(action){
    case 'Increment':return state+1;
    case 'Decrement':return state-1;
    case 'Reset': return initstate;
    default:return "error"
  }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initstate)
  return (
    // <Usercontext.Provider value ={"myname"}>  //contexts
    //   <Usercreator.Provider value ={"yamini"}>
    // <div className="App">
    //   <ClassA />
    // </div>
    // </Usercreator.Provider>
    // </Usercontext.Provider>

    // <Userreduce.Provider value={{countState:count , dispatchred:dispatch}}> //reducecontext
    // <div className="App">
    //   count -{count}
    //   <Classa />
    //   <Classb />
    //   <Classc />
    // </div>
    // </Userreduce.Provider>

    <div className="App">
      <Fetchapi />
      <Fetchinput />
      <Fetchjob />
      <Loadapi />
      <Loadreducer />
      <Count />
      <Count1 />
      <Title />
      <Title1 />
      <Parent />
    </div>

  );
}

export default App;
