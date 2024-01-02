export const AnimeCard = ({ url, title }) => {

  return (
    <div className="card shadow bg-white w-full lg:w-3/4  flex flex-col  p-4 rounded-2xl items-center  ">
      <div className="img  aspect-square object-fill w-full   ">
        <img
          src={url}
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
        <button className="bg-blue-400 rounded-lg px-5 p-2 text-white hover:bg-blue-400/90 w-full font-medium text-lg ">
          Ver
        </button>
      </div>
    </div>
  );
};
