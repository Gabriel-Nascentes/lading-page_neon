import { PartyPopper, Target, Zap } from "lucide-react";
import BoxLoader from "../BoxLoader/BoxLoader";
import "./Product.css";

const Product = () => {
  return (
    <div id="product" className="container-products py-32 flex gap-16 mx-24">
      <div className="card py-10 px-8 m-auto rounded-2xl flex flex-col gap-3 ">
        <BoxLoader
          size="120px"
          icon={<PartyPopper className=" w-20 h-20" />}
        ></BoxLoader>
        <h1 className="text-center text-2xl title">Service</h1>
        <p className="text-center text-slate-400 px-5">
          Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aliquid veritatis nemo ducimus dignissimos adipisci consectetur
          molestias omnis enim id culpa?
        </p>
      </div>
      <div className="card py-10 px-8 m-auto rounded-2xl flex flex-col gap-3 ">
        <BoxLoader
          size="120px"
          icon={<Target className="w-20 h-20" />}
        ></BoxLoader>
        <h1 className="text-center text-2xl title">Service</h1>
        <p className="text-center text-slate-400 px-5">
          Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aliquid veritatis nemo ducimus dignissimos adipisci consectetur
          molestias omnis enim id culpa?
        </p>
      </div>
      <div className="card py-10 px-8 m-auto rounded-2xl  flex flex-col gap-3">
        <BoxLoader
          size="120px"
          icon={<Zap className="w-20 h-20" />}
        ></BoxLoader>
        <h1 className="text-center text-2xl title">Service</h1>
        <p className="text-center text-slate-400 px-5">
          Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aliquid veritatis nemo ducimus dignissimos adipisci consectetur
          molestias omnis enim id culpa?
        </p>
      </div>
    </div>
  );
};

export default Product;
