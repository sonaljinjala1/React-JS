import React, { useEffect, useState } from "react";

function App() {
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setrecipes(data.recipes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>recipes</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.map((recipes) => (
          <div key={recipes.id} style={{
              border: "1px solid #ccc", 
              padding: "10px",
              margin: "10px",
              width: "200px"
            }}>
            <img src={recipes.image} alt={recipes.title} style={{ width: "100%" }} />
            <h3>{recipes.name}</h3>
            <p>Price: ${recipes.ingredients}</p>
            <p>{recipes.tags  }</p>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
