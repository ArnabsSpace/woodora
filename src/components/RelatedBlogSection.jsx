
import { useNavigate } from 'react-router-dom';

import BlogCard from './BlogCard'

import blogData from "../data/blogData";
export default function RelatedBlogSection () {
    const navigate = useNavigate();
  return (
    <section className="py-12 px-4 md:pt-8 lg:pt-8 bg-white mt-24 -mb-0">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Latest Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          

          {blogData.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* <div className="flex justify-center mt-24 -mb-0 lg:-mb-32">
          <button className="bg-[#2C265C] text-white px-6 py-2 rounded-full hover:bg-[#1c1b3f] transition" onClick={() => navigate('/blog')}>
            View More
          </button>
        </div> */}
      </div>
    </section>
  );
}