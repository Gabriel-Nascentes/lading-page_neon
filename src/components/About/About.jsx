import "./About.css";
import AboutImg from "../../img/women-rodmap.svg";

const About = () => {
  return (
    <div
      id="about"
      className="main-container-about py-32 flex justify-center items-center gap-10"
    >
      <div className="main-container-text flex flex-col justify-around items-center gap-14 w-1/2  py-10 ">
        <h1 className="w-full text-5xl text-center title">
          <span className="neon-blue text-6xl">Nossa </span>
          <span className="neon-pink">História</span>
        </h1>
        <p className="px-20 text-xl text-justify text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora
          obcaecati iste iusto minus perspiciatis autem nisi sequi quisquam
          tempore quae, neque corrupti optio praesentium perferendis adipisci
          assumenda modi eveniet!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In tempora obcaecati iste iusto minus perspiciatis
          autem nisi sequi quisquam tempore quae, neque corrupti optio
          praesentium perferendis adipisci assumenda modi eveniet!Lorem ipsum
          dolor sit amet consectetur adipisicing elit. In tempora obcaecati iste
          iusto minus perspiciatis autem nisi sequi quisquam tempore quae, neque
          corrupti optio praesentium perferendis adipisci assumenda modi
          eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          tempora obcaecati iste iusto minus perspiciatis autem nisi sequi
          quisquam tempore quae, neque corrupti optio praesentium perferendis
          adipisci assumenda modi eveniet!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In tempora obcaecati iste iusto minus perspiciatis
          autem nisi sequi quisquam tempore quae, neque corrupti optio
          praesentium perferendis adipisci assumenda modi eveniet!
        </p>
      </div>
      <div className="main-container-img-on w-1/3">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
