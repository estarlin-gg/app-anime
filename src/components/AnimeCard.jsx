export const AnimeCard = ({ url, title }) => {
  //   const {  title } = info;
  return (
    <div className="card shadow bg-white w-full lg:w-3/4  flex flex-col  p-4 rounded-2xl items-center gap-4 ">
      <div className="img  aspect-square object-fill w-full   ">
        <img
          src={url}
          alt=""
          className="rounded  w-full h-full"
          style={{ minHeight: "380px", maxHeight: "380px" }}
        />
      </div>
      <div className="text w-full p-">
        <h2 className="text-black text-xl font-medium text-wrap text-center">
          {title}
        </h2>
      </div>
      <div className="card-footer">
        <button className="bg-blue-400 rounded-lg px-5 p-2 text-white hover:bg-blue-400/90">
          Ver
        </button>
      </div>
    </div>
  );
};
