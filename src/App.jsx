import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Sidebar";
//import Card from './Components/Card/Card';
import CardContainer from "./Components/CardContainer/CardContainer";
import axios from "axios";

function App() {
  const [flashcards, setFlashCards] = useState([]);
  const [collections, setCollections] = useState([]);
  const[getFlutter, setFlutterCards] = useState([]);
  const[getAllCSS, setCss] = useState([]);
  const[getPanda, setPanda] = useState([]);


  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }
  useEffect(() => {
    getAllCollections();
  }, []);
  console.log('COLLECTIONS:', collections)

  async function getAllCards() {
    let response = await axios.get(
      "http://127.0.0.1:8000/api/collections/2/cards/"
    );
    setFlashCards(response.data);
  }
  useEffect(() => {
    getAllCards();
  }, []);
  console.log('CARDS:', flashcards )

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

  async function updateCard(updateCards) {
    let response = await axios.put(
      "http://127.0.0.1:8000/api/collections/2/cards/5/",
      updateCards
    );
    if (response.status === 200) {
      (await getAllCards()) && addNewCard();
    }
  }
  useEffect(() => {
    updateCard();
  }, []);

  async function deleteCard(deleteFlashCard) {
    let response = await axios.delete(
      "http://127.0.0.1:8000/api/collections/2/cards/5/",
      deleteFlashCard
    );
    if (response.status === 204) {
      (await getAllCards()) && addNewCard() && updateCard();
    }
  }
  useEffect(() => {
    deleteCard();
  }, []);

  console.log(collections);

  async function getAllFlutter(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/')
    setFlutterCards(response.data)
  }
  useEffect(()=> {
    getAllFlutter();
  },[]);
  console.log('FLUTTER CARDS:', getFlutter);

  async function getAllCss(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/')
    setCss(response.data)
  }
  useEffect(()=> {
    getAllCss();
  },[]);
  console.log('CSS CARDS:', getAllCSS);

  async function getAllPanda(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/3/cards/')
    setPanda(response.data)
  }
  useEffect(()=> {
    getAllPanda();
  },[]);
  console.log('PANDA CARDS:', getPanda);
  




  return (
    <div id="app">
      <Header />
      <SideBar collections={collections} />{" "}
      <button onClick={getAllCollections}> COLLECTIONS</button>{" "}
      <button onClick={addNewCard}>ADD CARD</button>{" "}
      <button on onClick={deleteCard}>
        DELETE CARD
      </button>
      <CardContainer flashcards={flashcards} />
    </div>
  );
}


export default App;
