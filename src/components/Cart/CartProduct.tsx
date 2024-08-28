import { AiOutlineClose } from "react-icons/ai";
import { useCartContext } from "../../context/cartContext";

interface propsType {
    img: string;
    name: string;
    price: string;
}

const CartProduct: React.FC<propsType> = ({ img, name, price }) => {
  const { removeFromCart } = useCartContext();

  const removeProductFromCart = () => {
    removeFromCart(name);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img className="h-[75px] w-[75px]" src={img} alt={name} />
        <div className="ml-4">
          <h3 className="font-medium">{name}</h3>
          <h3 className="text-red-500">{price}</h3>
        </div>
      </div>
      <button
        className="text-red-500 text-[24px] cursor-pointer"
        onClick={removeProductFromCart}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default CartProduct;
