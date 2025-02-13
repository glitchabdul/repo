import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { MessageComp, MessageComps, StateCounter, Toggle } from './components/messagecomps';
import { Greeting } from './components/messagecomps';

function App() {
  return (
    <div className="App">
      <MessageComp>Hi hello</MessageComp>
      <MessageComps name="Ram" age="20" ></MessageComps>
      <StateCounter></StateCounter>
      <Toggle></Toggle>
      <br></br><Button variant="text">Text</Button>
      <Greeting isLoggedIn={true}> </Greeting>
    </div>
  );
}

export default App;