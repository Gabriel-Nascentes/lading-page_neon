/* eslint-disable react/prop-types */
import "./LoadingNeon.css";

const LoadingNeon = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="loader"
          style={{ height: props.size, width: props.size }}
        ></div>
        <div className="content"></div>
      </div>
    </>
  );
};

export default LoadingNeon;
