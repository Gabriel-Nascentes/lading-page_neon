import "./Contact.css";
import contactImg from "../../img/contact.svg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="main-container py-32 flex justify-center items-center gap-10"
    >
      <div className="main-container-img w-1/3">
        <img src={contactImg} alt="" />
      </div>
      <div className="main-container-text flex flex-col justify-around items-center gap-14 w-1/2  py-10 ">
        <h1 className="w-full text-5xl text-center title">
          <span className="neon-blue">Para entrar em contato</span>
        </h1>
        <form action="" className="form flex flex-col w-3/5 gap-5 text-xl">
          <label htmlFor="name">Email address</label>
          <input
            type="name"
            className="p-2 text-black"
            id="name"
            placeholder="Nome"
          ></input>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="p-2 text-black"
            id="email"
            placeholder="nome@example.com"
          ></input>
          <label htmlFor="textArea">Example textarea</label>
          <textarea
            className="p-2 text-black"
            id="textArea"
            rows="3"
          ></textarea>
        </form>
        <button className="w-40 rounded-md text-xl px-5 py-2">Enviar</button>
      </div>
    </div>
  );

  // <div className="contact">
  //   <div className="contact-img"></div>
  //   <div className="contact-form"></div>
  // </div>;
};

export default Contact;
