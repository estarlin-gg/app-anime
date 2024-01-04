import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export const AnimeDetails = ({ data }) => {
  const { title, img, episodes, score, synopsis } = data;
  console.log(data);
  return (
    <div className="lg:p-8">
      {/* <Link to={"/"}>
          <a className="bg-blue-600 rounded-full aspect-square p-3 object-cover absolute right-5 top-5">
            <IoMdArrowRoundBack />
          </a>
        </Link> */}
      <div className="container details lg:mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-2 h-fit border bg-white lg:rounded-2xl overflow-hidden relative ">
        
        <div className="front border w-full lg:h-full object-cover">
          <img
            src={img}
            alt=""
            className="md:w-full m-auto w-2/3 max-h-[550px]"
          />
        </div>
        <div className="details-container bg-white p-4 col-span-2  ">
          <h2 className="text-5xl font-medium block mb-3 text-pretty text-sky-400">
            {title}
          </h2>
          <span className="text-gray-600  ">Puntuacion: {score}⭐</span>
          <span className="text-gray-600 mx-6">Episodios: {episodes}</span>
          <div className="details my-8 ">
            <h3 className="text-2xl border-black  border-spacing-2 border-b-2">
              Detalles:
            </h3>
            <div className="details-synopsis py-4">
              <p className="leading-6 text-pretty">{synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
