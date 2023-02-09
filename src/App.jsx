import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
//import Card from './Components/Card/Card';
import CardContainer from './Components/CardContainer/CardContainer';
import axios from 'axios';

function App() {
  const[flashcards,setFlashCards] = useState(SampleApp)

  useEffect(()=>{
    
  },[])

  return (
    <div>
     <Header/>
     <SideBar/>
     <CardContainer flashcards={flashcards}/>
     </div>
  );
}

const SampleApp = [
  {
  word: 'WORD GOES HERE',
  definition:'DEFINITION GOES HERE',
  button:'BUTTONS GO AROUND CARD'
  }
]

export default App;
