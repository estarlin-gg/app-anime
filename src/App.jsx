import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import "./App.css";
import { AnimeContent } from "./components/AnimeContent";
import { Button } from "./components/Button";

function App() {
const [search, setSearch] = useState('')
console.log(search);
const  handleSearch = (e) => {
     setSearch(e.target.value)
}
const  handleSubmit = (e) => {
  e.preventDefault()
  if (search.trim() === '') {
    // console.log("vaciooooo");
    return
  }
}

  return (
    <>
      <main className="bg-blue-950">
        <header className="w-full bg-cyan-400 p-3  flex justify-between items-center gap-4   ">
          <h2 className="text-3xl text-white text-pretty">Animes</h2>
          <form className="form w-2/3 lg:w-2/5 flex items-center relative" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full rounded-xl p-3 outline-none "
              placeholder="Bucar..."
              onChange={handleSearch}
            />
            <Button classes=" px-3 py-2 absolute end-3.5 rounded bg-gray-400" text={<CiSearch />} />
          </form>
        </header>
        <AnimeContent />
      </main>
    </>
  );
}

export default App;
