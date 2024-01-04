import { useState } from "react";

import "./App.css";
import { AnimeContent } from "./components/AnimeContent";
import { AnimeDetails } from "./components/AnimeDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const [details, setDetails] = useState({});
  const Collet = (data) => {
    console.log(data);
    setDetails({...data});
  };
  console.log(details);
  return (
    <>
      <main className="bg-blue-950 min-h-screen">
        <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<AnimeContent details={Collet}  />} />
            <Route path="/Details" element={<AnimeDetails data={details} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
