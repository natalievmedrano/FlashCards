import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
//import Card from './Components/Card/Card';
import CardContainer from './Components/CardContainer/CardContainer';
import axios from 'axios';

function App() {
  const[flashcards,setFlashCards] = useState(SampleApp)
  const[collections, setCollections] = useState([])

  async function getAllCollections ()  {
      let response = await axios.get('http://127.0.0.1:8000/api/collections/')
      setCollections(response.data);
  }
  useEffect(()=>{
    getAllCollections()
  },[])

  async function getAllCards () {
    let response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/')
    setFlashCards(response.data)
    
  }
  useEffect(()=>{
    getAllCards()
  },[])

  console.log(collections);
  return (
    <div id='app'>
     <Header/>
     <SideBar collections={collections}/> <button onClick={getAllCollections}> COLLECTIONS</button>
     <CardContainer flashcards={flashcards}/>
     </div>
  );
}

const SampleApp = [
  {
  word: 'WORD ',
  definition:'DEFINITION',
  }
]

export default App;
