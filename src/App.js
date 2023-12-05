import React from 'react';
import './App.css';
import Nav from './Nav';
import Main from "./Main";
import Menu from './Menu';
import Footer from  "./Footer";
import Header from "./Header";


function App() {
  return (
    <>
      <Nav/>
      <Main />
      <Header />
      <Menu/>
      <Footer />
    </>
  );
}

export default App;