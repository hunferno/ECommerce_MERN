import { Annoncement } from "../components/Annoncement";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { NewsLetter } from "../components/NewsLetter";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Annoncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};
