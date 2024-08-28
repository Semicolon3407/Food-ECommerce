import CategoryCard from "./CategoryCard"

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/C1.jpg",
    },
    {
        id: 1,
        name: "Fresh Vegs",
        count: "8 Products",
        img: "/C2.jpg",
    },
    {
        id: 2,
        name: "Canned goods",
        count: "10 Products",
        img: "/C3.jpg",
    },
    {
        id: 3,
        name: "Bread & Bakery",
        count: "12 Products",
        img: "/C4.jpg",
    },
    {
        id: 4,
        name: "Fishes",
        count: "10 Products",
        img: "/C5.jpg",
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 Products",
        img: "/C6.jpg",
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 Products",
        img: "/C7.jpg",
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/C1.jpg",
    },
]

const Category = () => {
  return (
    <>
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
                <CategoryCard key={el.id} img={el.img} name={el.name} count={el.count}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Category