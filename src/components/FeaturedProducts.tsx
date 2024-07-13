import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="Популярное" />
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProducts;
