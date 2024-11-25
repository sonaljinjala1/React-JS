import { useState } from "react";
import products from "./Data"; // Adjust the path as necessary
import Product from "./Product"; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [filterdata, setFilterdata] = useState(products);
  
  const categoryButtonClick = (cat) => {
    if (cat === "All") {
      setFilterdata(products);
    } else {
      let filteredProducts = products.filter((product) => {
        return product.category === cat;
      });
      setFilterdata(filteredProducts);
    }
  };
  
  // Extract unique categories for buttons
  const categories = ["All", ...new Set(products.map(product => product.category))];

  return (
    <div align="center">
      <h1>Filter App</h1>
      <Product
        categories={categories}
        filterdata={filterdata}
        categoryButtonClick={categoryButtonClick}
      />
    </div>
  );
}

export default App;









// import React, { useState } from "react";
// import "./App.css";

// // Sample data for electronic products
// const productsData = [
//   { id: 1, name: "iPhone 13", category: "Mobile", price: "$799", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSW_Ya4_t5sHnCMjrk1BHufFyaoDZCMLbvQ&s" },
//   { id: 2, name: "MacBook Pro", category: "Laptop", price: "$1299", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D" },
//   { id: 3, name: "iPad Pro", category: "Tablet", price: "$999", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ipad.jpg/2560px-Ipad.jpg" },
//   { id: 4, name: "Samsung Galaxy S21", category: "Mobile", price: "$699", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiAKtiWFbFuOGFav4liY881ikLKeHK96rlw&s" },
//   { id: 5, name: "Dell XPS 13", category: "Laptop", price: "$999", image: "https://www.dell.com/wp-uploads/2022/06/XPS-13-2-in-1-on-desk-1280x800-1.jpg" },
// ];

// // Filter buttons component
// const FilterButtons = ({ categories, filterProducts }) => {
//   return (
//     <div className="filter-buttons">
//       {categories.map((category, index) => (
//         <button key={index} onClick={() => filterProducts(category)}>
//           {category}
//         </button>
//       ))}
//       <button onClick={() => filterProducts("All")}>All</button>
//     </div>
//   );
// };

// // Product Card component
// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.price}</p>
//     </div>
//   );
// };

// // Main App component
// const App = () => {
//   const [products, setProducts] = useState(productsData);
//   const categories = ["Mobile", "Laptop", "Tablet"];

//   const filterProducts = (category) => {
//     if (category === "All") {
//       setProducts(productsData);
//     } else {
//       const filtered = productsData.filter((product) => product.category === category);
//       setProducts(filtered);
//     }
//   };

//   return (
//     <div className="App   justify-center   d-flex">
//       <h1>Electronic Products Filter</h1>
//       <FilterButtons categories={categories} filterProducts={filterProducts} />
//       <div className="products  d-flex">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
