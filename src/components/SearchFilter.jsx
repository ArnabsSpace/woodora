import filterIcon from "../assets/icons/filter.svg";
import { useState } from "react";

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categories = ["All", "Chair", "Sofa", "Table", "Lamp", "Bed"];

  const priceRanges = [
  { label: "All", min: "", max: "" },
  { label: "Under ₹150", min: 0, max: 150 },
  { label: "₹151 - ₹250", min: 151, max: 250 },
  { label: "₹251 - ₹450", min: 251, max: 450 },
  { label: "₹451 - ₹700", min: 451, max: 700 },
  { label: "Above ₹700", min: 701, max: Infinity },
];


  return (
    <div className="w-full max-w-[1320px] mx-auto mt-8 mb-8 px-4">
      <div className="flex overflow-hidden w-full gap-4">
        <div className="flex gap-6 border rounded-full shadow-sm overflow-hidden w-full relative items-center">
          <div className="flex items-center px-4 flex-grow">
            <svg className="w-5 h-5 text-gray-400 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 py-3 outline-none bg-transparent text-sm h-10"
            />
          </div>
          <button className="bg-indigo-900 text-white text-sm px-2 py-3 font-medium h-9 w-36 rounded-full flex items-center justify-center mr-2">
            Find Now
          </button>
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-1 p-2 text-sm w-16 md:w-24 text-gray-700 hover:bg-gray-100 rounded-full"
        >
          <img src={filterIcon} alt="filter icon" />
          <span className="hidden md:inline">Filter</span>
        </button>
      </div>

      {isFilterOpen && (
        <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filter</h2>
            <button onClick={() => setIsFilterOpen(false)}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="mr-2"
                    />
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>

     
          {/* Price Filter */}
            <div className="mb-4">
            <h3 className="font-medium mb-2">Price Range</h3>
            <ul className="space-y-2">
                {priceRanges.map((range, idx) => (
                <li key={idx}>
                    <label className="flex items-center">
                    <input
                        type="radio"
                        name="price"
                        value={range.label}
                        checked={minPrice === range.min && maxPrice === range.max}
                        onChange={() => {
                        setMinPrice(range.min);
                        setMaxPrice(range.max);
                        }}
                        className="mr-2"
                    />
                    {range.label}
                    </label>
                </li>
                ))}
            </ul>
            </div>

        </div>
      )}
    </div>
  );
}
