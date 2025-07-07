import './App.css'; 
import Header from './header'; 
import React, { useState, useEffect } from 'react';
import Middle from './add'; // Importing the AddingTodos component
import List from './list'; // Importing the ListTodos component
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importing BrowserRouter, Route, and Routes for routing
import About from './pages/About'; // Importing the About component
import Contact from './pages/Contact'; // Importing the Contact component

 
function App() {

  // Load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const [inputValue, setInputValue] = useState('');

  return (
    <BrowserRouter>
      <div className="max-w-[400px] mx-auto mt-10 rounded-3xl shadow-xl bg-violet-500">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Middle todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
              <List todos={todos} setTodos={setTodos} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App;

  
