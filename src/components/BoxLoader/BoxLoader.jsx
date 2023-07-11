/* eslint-disable react/prop-types */
import "./BoxLoader.css";
import "./BoxLoader.scss";

const BoxLoader = (props) => {
  return (
    <div
      className="boxLoader"
      style={{ height: props.size, width: props.size }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="icon w-3/4 h-3/4 flex justify-center items-center m-auto ">
        {props.icon}
      </div>
    </div>
  );
};

export default BoxLoader;
