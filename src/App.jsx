// import { useState, useEffect } from "react";
import "./App.css";
import { AnimeContent } from "./components/AnimeContent";

function App() {

  return (
    <>
      <main className="bg-blue-950">
        <header className="w-full bg-cyan-400 p-3  flex justify-between items-center gap-4   ">
          <h2 className="text-3xl text-white text-pretty">Animes</h2>
          <form className="form w-2/3 lg:w-2/5">
            <input
              type="text"
              className="w-full rounded-xl p-3 outline-none"
              placeholder="Bucar..."
            />
          </form>
        </header>
        <AnimeContent />
      </main>
    </>
  );
}

export default App;
