import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { type ProductsResponse } from "@/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="font-medium text-md">
            {totalProducts < 2
              ? `${totalProducts} product`
              : `${totalProducts} products`}
          </h4>
          <div className="flex gap-x-4 ">
            <Button
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
              size={"icon"}
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={() => setLayout("list")}
              variant={layout === "list" ? "default" : "ghost"}
              size={"icon"}
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            К сожалению не смогли найти продуктов с таким запросом
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
