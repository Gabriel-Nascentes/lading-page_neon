/* eslint-disable react/prop-types */
import "./TextNeon.css";

// Alterações nas linhas
//  2 - cor do fundo,
//  4 e 5 - tamanho da div,
//  14 e 26 - cor do neon,
//  49 e 53 - tamanho do quadrado que cobre o texto.

const TextNeon = (props) => {
  return (
    <div className="box ">
      <div className="lightbar"></div>
      <div className="topLayer"></div>
      <p>{props.text} </p>
    </div>
  );
};

export default TextNeon;
