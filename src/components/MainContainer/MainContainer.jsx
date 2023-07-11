import "./MainContainer.css";
import MainImage from "../../img/men-world.svg";

const MainContainer = () => {
  return (
    <div
      id="home"
      className="main-container py-32 flex justify-center items-center gap-10"
    >
      <div className="main-container-img w-1/3">
        <img src={MainImage} alt="" />
      </div>
      <div className="main-container-text flex flex-col justify-around items-center gap-14 w-1/2  py-10 ">
        <h1 className="w-full text-5xl text-center title">
          Bem vindo a <span className="neon-blue text-6xl">Neon</span>
          <span className="neon-pink">Products</span>
        </h1>
        <p className="px-10 text-xl text-slate-400 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora
          obcaecati iste iusto minus perspiciatis autem nisi sequi quisquam
          tempore quae, neque corrupti optio praesentium perferendis adipisci
          assumenda modi eveniet!
        </p>
        <button className="w-40 rounded-md text-xl px-5 py-2">
          Saber mais
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
