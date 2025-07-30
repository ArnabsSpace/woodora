import { useParams } from "react-router-dom";

import RelatedBlogSection from '../components/RelatedBlogSection';
import blogData from "../data/blogData";

export default function BlogSingle(){
    const { id } = useParams();
  const blog = blogData.find((b) => b.id.toString() === id);
    if (!blog) return <div className="p-10 text-center">Blog not found</div>;
    return (
        <>
            <section className="py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
                    <p className="text-xl font-medium text-primary text-center mb-4">{blog.excerpt}</p>
                    <p className="text-sm w-full font-semibold text-amberGold mb-2 mt-8">
                    by {blog.author} on {new Date(blog.date).toLocaleDateString()}
                    <span className="ml-4 text-primary">Readtime : {blog.readTime}</span></p>
                    <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-xl mb-6"
                    />
                    <p className="text-lg text-gray-700 whitespace-pre-line max-w-4xl mx-auto">{blog.content}</p>
                </div>
            </section>
            <RelatedBlogSection />
        </>
        
    )
}