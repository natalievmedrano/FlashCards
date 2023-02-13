import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Sidebar";
//import Card from './Components/Card/Card';
import CardContainer from "./Components/CardContainer/CardContainer";
import axios from "axios";
import Button from "./Components/Button/Button";
import DisplayCount from "./Components/DisplayCount/DisplayCount";

function App() {
  const [collections, setCollections] = useState([]);
  const [flashcards, setFlashCards] = useState([]);
  const[count,setCount] = useState(1);

  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  useEffect(() => {
    getAllCollections();
  }, []);

  console.log("COLLECTIONS:", collections);

  async function getAllCards(collectionId) {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionId}/cards/`
    );
    setFlashCards(response.data);
  }

  async function addNewCard(newCard) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/collections/2/cards/",
      newCard
    );
    if (response.status === 201) {
      await getAllCards();
    }
  }
  function updateClickCount(){
    let newCount = count + 1
    setCount(newCount)
  }
  

  return (
    <div id="app">
      <Header />
      <Button updateClickCount ={updateClickCount}/>
      <DisplayCount currentCount={count}/>
      <SideBar collections={collections} getAllCards={getAllCards} addNewCard={flashcards} />
      <CardContainer flashcards={flashcards} />
    </div>
  );
}

export default App;
