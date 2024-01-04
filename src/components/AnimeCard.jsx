import { Link } from "react-router-dom";
import { Button } from "./Button";
// import { useState } from "react";

export const AnimeCard = ({ img, title, score, episodes, synopsis, mandar }) => {
  // const [card, setCard] = useState({});
  const HandleCard = () => {
    const card = {
      img: img,
      title: title,
      episodes: episodes,
      synopsis: synopsis,
      score: score,
    };
    mandar(card);
    console.log(card);
  };


  return (
    <div className="card shadow bg-white w-full lg:w-3/4  flex flex-col  p-4 rounded-2xl items-center  ">
      <div className="img  aspect-square object-fill w-full   ">
        <img
          src={img}
          alt=""
          className="rounded-xl  w-full h-full"
          style={{ minHeight: "380px", maxHeight: "380px" }}
        />
      </div>
      <div className="text w-full h-16">
        <h2 className="text-black text-xl font-medium text-wrap text-center pt-2">
          {title}
        </h2>
      </div>
      <div className="card-footer mt-4 block w-full">
        <Link to={"/Details"}>
          <Button
            classes="bg-blue-400 rounded-lg px-5 p-2 text-white hover:bg-blue-400/90 w-full font-medium text-lg"
            text="Ver"
            onClick={HandleCard}
          />
        </Link>
      </div>
    </div>
  );
};
