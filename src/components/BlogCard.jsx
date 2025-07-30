// src/components/BlogCard.jsx
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="bg-white shadow-md rounded-xl overflow-hidden border-gray-100 hover:shadow-lg transition duration-300 p-4 border border-primary25 cursor-pointer"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 rounded-xl object-cover"
      />
      <div className="py-5">
        <h3 className="font-semibold text-xl mb-1">{blog.title}</h3>
        <p className="text-sm font-semibold text-amberGold mb-2">
          by {blog.author} on{" "}
          <span className="text-sm font-semibold text-amberGold">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </p>
        <p className="text-base font-medium text-primary">{blog.excerpt}</p>
      </div>
    </div>
  );
}
