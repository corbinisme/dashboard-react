import React, { Component, useState  } from 'react';
import { HashRouter, BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import Layout from "./Components/Layout";
import NoPage from "./Components/NoPage";
import Happy from "./Pages/Happy";
import Educational from "./Pages/Educational";
import Entertainment from "./Pages/Entertainment";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListItem from './Components/ListItem';
import DragAndDropList from './Components/DragAndDropList';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function App() {


  const [theme, setTheme] = useState("dark");
  const elements = [
    { id: "one", content: "one" },
    { id: "two", content: "two" },
    { id: "three", content: "three" },
    { id: "four", content: "four" }
  ];

  const [items, setItems] = useState(elements);
  const updateTheme = (val) => {
    let newTheme =(val=="dark" ? "light" : "dark");
    console.log("update", newTheme)
    setTheme(newTheme)
  }
  return (
    <div className="App" data-theme={theme}>
      <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout themeChange={updateTheme} theme={theme} />}>
            <Route index element={<Happy />} />
            <Route path="*" element={<NoPage />} />
            <Route path="educational" element={<Educational />} />
            <Route path="entertainment" element={<Entertainment />} />
          </Route>
        </Routes>
  
      </BrowserRouter>
     
      </DndProvider>


      <footer>
        <button className="btn btn-outline-secondary" onClick={() => updateTheme(theme)}>
          Change Theme
        </button>
      </footer>
    </div>
  );
}

export default App;
