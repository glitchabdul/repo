import React, {useState} from "react";

//message components
export function MessageComp(){
    return(
      <div id="container">
        <h1>Hello how are you </h1>
        </div>
    );
}

//properties
export function MessageComps(props){
    return(
        <div id="container">
            <h1>{props.name} {props.age}</h1>
        </div>
    );   
}
//setcounter by usestate
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
    //Toggle(yes or no) by useState
    export function Toggle(){
      const [isOn, setIsOn] =useState(false);
      return(
        <button onClick= { () => setIsOn(!isOn)}>
          {isOn ? 'ON' : 'OFF'}
        </button>
      );
    }
    // using if else statements
    export function Greeting({isLoggedIn}){
        if(isLoggedIn){
            return <h1> welcome back glitch </h1>;
        }else{
            return <h1>please sign up </h1>;
        }
        }

// using ternary operations condition ? statements1(if true):statement2(if false)
export function ConRen(isSignin){
    if(isSignin){
        return <div >{!isSignin? <h1> welcome back </h1>:<h1>please sign up glitch </h1>}</div>
    }
}