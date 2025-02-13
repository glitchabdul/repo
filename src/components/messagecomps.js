import React, {useState} from "react";


export function MessageComp(){
    return(
      <div id="container">
        <h1>Hello how are you </h1>
        </div>
    );
}


export function MessageComps(props){
    return(
        <div id="container">
            <h1>{props.name} {props.age}</h1>
        </div>
    );
   
}

export function StateCounter() {
    const [count, setCount] = useState(0); 
    function clickHandler(){
        alert("Clicked");
        setCount(count + 1);
      }
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick = {clickHandler}>Click me</button>
        </div>
      );
    }

    export function Toggle(){
      const [isOn, setIsOn] =useState(false);
      return(
        <button onClick= { () => setIsOn(!isOn)}>
          {isOn ? 'ON' : 'OFF'}
        </button>
      );
    }

    export function Greeting({isLoggedIn}){
        if(isLoggedIn){
            return <h1> welcome back glitch </h1>;
        }else{
            return <h1>please sign up </h1>;
        }
        }

