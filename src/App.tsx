import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./app/components/Header";
import Homepage from "./app/screens/homepages/Homepage";
function App() {
  return (
    <>
      <Header />
      <main>
        <Homepage />
      </main>
    </>
  );
}
export default App;
