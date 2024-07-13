import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Link to="/" className="text-4xl text-red-900 underline capitalize">
        home
      </Link>
      <div>
        <Button asChild size="lg">
          <Link to="/">home button</Link>
        </Button>
      </div>
    </div>
  );
};
export default Cart;
