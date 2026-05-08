import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Commitments from "../components/Commitments";
import Projects from "../components/Projects";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Commitments />
      <Projects />
      <Blog />
    </>
  );
}
