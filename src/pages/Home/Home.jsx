// import BoxLoader from "../../components/BoxLoader/BoxLoader";
// import Glass from "../../components/Glass/Glass";
// import LoadingNeon from "../../components/LoadingNeon/LoadingNeon";
// import TextNeon from "../../components/TextNeon/TextNeon";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <About></About>
      <Product></Product>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
