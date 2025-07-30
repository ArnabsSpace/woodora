import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import BannerImage from "../assets/images/blogBanner.png";
export default function Blog(){
    return (
        <section className="py-12 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">Blogs</h2>
                <p className="text-center mb-10 max-w-[900px] mx-auto">Stay updated with the latest in fashion! We showcase new arrivals and trending styles weekly.  Looking for older items? Just search by product name to explore past collections.</p>
                <img src={BannerImage} alt="banner" className="w-full min-h-8 h-full mb-16 rounded-lg" />
                <h2 className="text-3xl font-semibold text-center mb-10 w-full ">Our Latest Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                {blogData.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
                </div>
            </div>
        </section>
    )
}