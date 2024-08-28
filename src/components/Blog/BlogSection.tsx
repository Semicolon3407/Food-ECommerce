import BlogCard from "./BlogCard";

const data = [
  {
    img: "/Blog1.jpg",
    title: "Healthy Food Healthy Life",
    date: "Sep 18 2022",
    comment: 7,
  },
  {
    img: "/Blog2.jpg",
    title: "Healthy Food Healthy Life",
    date: "Sep 18 2022",
    comment: 3,
  },
  {
    img: "/Blog3.jpg",
    title: "Healthy Food Healthy Life",
    date: "Sep 18 2022",
    comment: 11,
  },
];

const BlogSection = () => {
  return (
    <>
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Latest News</h2>
            <p>Present posts in a best way to highlight interesting moments of your blog.</p>
         
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => (
                    <BlogCard 
                        key={el.date}
                        img={el.img}
                        title={el.title}
                        comment={el.comment}
                        date={el.date}
                    />
                ))}
            </div>
        </div>
    </>
  )
};

export default BlogSection;
