import React, {useState} from "react";
import './App.css';
import { Content } from './Components/Content/Content';
import {Github} from './Components/Github/Github';

function App() {
  const [selUser, setSelUser] = useState(null); 
  const selChanged = (value) => setSelUser(value);
  
  return (
    <div className="App">
      <Github onChange={selChanged} />
      <Content login={selUser} />
    </div>
  );
}

export default App;
