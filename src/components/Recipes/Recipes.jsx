import React, { useState, useEffect } from 'react';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes data
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    const data = [
      {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "image": "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg"
      },
      {
        "id": 2,
        "name": "Chicken Alfredo",
        "image": "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg"
      },
      {
        "id": 3,
        "name": "Caprese Salad",
        "image": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg"
      }
    ];

    // Set recipes state
    setRecipes(data);

    // Log fetched data
    console.log('Fetched Recipes:', data);
  };

  return (
    <div>
      {/* Display recipes */}
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
