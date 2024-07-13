import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Мебель вашей мечты
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Откройте для себя коллекцию мебели, которая сочетает в себе утонченную
          эстетику и непревзойденный комфорт. Наша мебель создается с вниманием
          к деталям, чтобы каждая деталь приносила радость в ваш дом. Мы
          используем только лучшие материалы, чтобы гарантировать долговечность
          и надежность каждой вещи.
        </p>
        <Button asChild size="lg" className="mt-10 capitalize">
          <Link to={"/products"}>Каталог</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
