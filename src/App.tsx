import React from "react";
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
      <footer></footer>
      
    </>
  );
}
export default App;
