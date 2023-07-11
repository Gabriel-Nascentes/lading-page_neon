import "./Navbar.css";
import { AlignJustify, Home } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  function handleClick() {
    setDrop((drop) => !drop);
  }
  let dropClass = drop ? "-active" : null;

  return (
    <header className=" w-full px-16 py-10 flex fixed z-50 justify-between">
      <ul className="flex w-1/4">
        <li>
          <a href="#home">
            <Home className="neon neon-text-blue h-16 w-16"></Home>
          </a>
        </li>
      </ul>
      <button onClick={handleClick}>
        <AlignJustify className="icon-menu h-16 w-16 " />
      </button>
      <ul
        id="menu-dropdown"
        className={`drop${dropClass} menu-dropdown flex items-center gap-10`}
      >
        <button onClick={handleClick} className="close text-4xl">
          &times;
        </button>
        <li>
          <a className="neon neon-text-blue text-2xl font-bold" href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a className="neon neon-text-pink text-2xl font-bold" href="#product">
            Produtos
          </a>
        </li>
        <li>
          <a className="neon neon-text-blue text-2xl font-bold" href="#contact">
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
