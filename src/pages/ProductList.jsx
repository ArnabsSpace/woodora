import { useState } from "react";
import products from "../data/products";
import AllProductsList from "../components/AllProductsList";
import SearchFilter from "../components/SearchFilter";
import CommonBanner from "../components/CommonBanner";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchMin = minPrice === "" || product.newPrice >= parseFloat(minPrice);
    const matchMax = maxPrice === "" || product.newPrice <= parseFloat(maxPrice);
    return matchSearch && matchCategory && matchMin && matchMax;
  });

  return (
    <>
      <CommonBanner />
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <AllProductsList products={filteredProducts} />
    </>
  );
}
