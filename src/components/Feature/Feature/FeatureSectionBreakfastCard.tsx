import ProductCard from "./ProductCard";

const data = [
    { id: 0, img: "/Tomato.jpg", name: "Tomato", price: "Rs250" },
    { id: 1, img: "/Milk.jpg", name: "Milk", price: "Rs200" },
    { id: 2, img: "/Bread.jpg", name: "Bread", price: "Rs250" },
    { id: 3, img: "/Strawberry.jpg", name: "Strawberry", price: "Rs350" },
]

const FeatureSectionBreakfastCard = () => {
  return (
    <>
      <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
                <p className="text-gray-600 mt-2">Buy best quality online from bg-basket stop near you.</p>
            </div>

            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Eggs & Dairy</button>
                <button className="text-gray-600 hover:text-accent">Pizza</button>
                <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover" src="/Noodle.jpg" alt="" />
            </div>

            {data.map( el => <ProductCard key={el.id} img={el.img} name={el.name} price={el.price}/>)}
        </div>


      </div>
    </>
  );
};

export default FeatureSectionBreakfastCard;
