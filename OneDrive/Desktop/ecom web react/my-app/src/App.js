import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Product from "./components/Product";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Product />
      <Footer />
      <ImageSlider/>
    </div>
  );
};

export default App;
