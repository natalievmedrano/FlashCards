import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/Sidebar';
//import Card from './Components/Card/Card';
import CardContainer from './Components/CardContainer/CardContainer';
import axios from 'axios';

function App() {
  const[flashcards,setFlashCards] = useState([])
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

  async function addNewCard(newCard){
    let response = await axios.post('http://127.0.0.1:8000/api/collections/2/cards/' , newCard);
    if(response.status === 201){
      await getAllCards();
    }

  }
  useEffect(()=>{
    addNewCard()
  },[])

  async function updateCard(updateCards){
    let response = await axios.put('http://127.0.0.1:8000/api/collections/2/cards/5/',updateCards);
    if(response.status === 200){
      await getAllCards() && addNewCard();
    }
  }
  useEffect(()=>{
    updateCard()
  },[])

  async function deleteCard(deleteFlashCard){
    let response = await axios.delete('http://127.0.0.1:8000/api/collections/2/cards/5/',deleteFlashCard);
    if(response.status === 204){
      await getAllCards() && addNewCard() && updateCard()
    }
  }
  useEffect(()=>{
    deleteCard()
  },[])

  

  console.log(collections);
  return (
    <div id='app'>
     <Header/>
     <SideBar collections={collections}/> <button onClick={getAllCollections}> COLLECTIONS</button> <button onClick={addNewCard}>ADD CARD</button> <button on onClick={deleteCard}>DELETE CARD</button>
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
