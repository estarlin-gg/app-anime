import { useState, useEffect } from "react";
import { AnimeCard } from "./AnimeCard";

export const AnimeContent = ({ details }) => {
  const [anime, setAnime] = useState(null);
  const setMandar = (data) => {
    details(data)

  }

  useEffect(() => {
    const CallApi = async () => {
      try {
        const anime = await fetch("https://api.jikan.moe/v4/anime");
        const data = await anime.json();
        setAnime(data.data);
        // details(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    CallApi();
  }, []);

  return (
    <div className=" grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3 p-4 min-h-screen ">
      {anime && anime.length > 0 ? (
        anime.map((animeData) => (
          <AnimeCard
            key={animeData.mal_id}
            title={animeData.title}
            img={animeData.images.jpg.image_url}
            score={animeData.score}
            episodes={animeData.episodes}
            synopsis={animeData.synopsis}
            mandar={setMandar}
          />
        ))
      ) : (
        <p className="text-4xl font-bold text-white mt-48 text-center ">
          Loading...
        </p>
      )}
    </div>
  );
};
