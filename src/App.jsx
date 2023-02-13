import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Sidebar";
//import Card from './Components/Card/Card';
import CardContainer from "./Components/CardContainer/CardContainer";
import axios from "axios";

function App() {
  const [collections, setCollections] = useState([]);
  const [flashcards, setFlashCards] = useState([]);

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
  useEffect(() => {
    addNewCard();
  }, []);

  return (
    <div id="app">
      <Header />
      <SideBar collections={collections} getAllCards={getAllCards} />
      <CardContainer flashcards={flashcards} />
    </div>
  );
}

export default App;
