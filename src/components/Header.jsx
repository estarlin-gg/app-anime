import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
  };
  return (
    <header className="w-full bg-cyan-400 p-3  flex justify-between items-center gap-4   ">
      <Link to={"/"}>
        <h2 className="text-3xl text-white text-pretty">Animes</h2>
      </Link>
      <form
        className="form w-2/3 lg:w-2/5 flex items-center relative"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full rounded-xl p-3 outline-none "
          placeholder="Bucar..."
          onChange={handleSearch}
        />
        <Button
          classes=" px-3 py-2 absolute end-3.5 rounded bg-gray-400"
          text={<CiSearch />}
        />
      </form>
    </header>
  );
};
