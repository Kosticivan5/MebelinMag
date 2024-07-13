import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CartButton = () => {
  const numItemsInCart = 5;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex justify-center items-center"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 rounded-full bg-primary text-white text-xs h-6 w-6 flex items-center justify-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
