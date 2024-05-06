import { useState, useEffect } from "react";
import "./RecipeGrid.css"; // Import external CSS file for styling

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // Fetch recipes data
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    // Mock data for demonstration (replace with actual fetch)
    const data = [
      {
        name: "Spaghetti Carbonara",
        image:
          "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
        ingredients: [
          { name: "Spaghetti", quantity: "200g" },
          { name: "Bacon", quantity: "150g" },
          { name: "Eggs", quantity: "2" },
          { name: "Parmesan Cheese", quantity: "50g" },
          { name: "Black Pepper", quantity: "to taste" },
          {
            name: "Process",
            quantity:
              "Cook spaghetti until al dente. Sauce diced pancetta or bacon until crispy.Toss cooked pasta with pancetta, then add egg and cheese mixture off heat. Stir until creamy.Serve immediately, garnished with black pepper and extra cheese if desired. Enjoy your creamy Spaghetti Carbonara.",
          },
        ],
      },
      {
        name: "Chicken Alfredo",
        image:
          "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg",
        ingredients: [
          { name: "Fettuccine", quantity: "250g" },
          { name: "Chicken Breast", quantity: "300g" },
          { name: "Heavy Cream", quantity: "200ml" },
          { name: "Garlic", quantity: "2 cloves" },
          { name: "Parmesan Cheese", quantity: "50g" },
          {
            name: "Process",
            quantity:
              "Cook fettuccine according to package instructions. Season and cook chicken until golden brown.Garlic, pour in heavy cream and simmer. Add Parmesan cheese, then combine with cooked chicken and fettuccine.Toss pasta with sauce until coated evenly. Serve hot, garnished with parsley and extra Parmesan if desired.",
          },
        ],
      },
      {
        name: "Caprese Salad",
        image:
          "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
        ingredients: [
          { name: "Tomatoes", quantity: "3" },
          { name: "Fresh Mozzarella", quantity: "200g" },
          { name: "Basil Leaves", quantity: "1 bunch" },
          { name: "Balsamic Vinegar", quantity: "50ml" },
          { name: "Extra Virgin Olive Oil", quantity: "50ml" },
          {
            name: "Process",
            quantity:
              "On a serving platter or individual plates, arrange the tomato and mozzarella slices alternately in a circular or linear pattern, overlapping them slightly.Tuck fresh basil leaves between the tomato and mozzarella slices. You can add them whole or tear them into smaller pieces for added flavor.",
          },
        ],
      },

      {
        name: "Morog Polao",
        image:
          "https://i.pinimg.com/736x/60/b9/5c/60b95c4d1916ca6df15c926b6ffa2b40.jpg",
        ingredients: [
          { name: "Chicken", quantity: "2kg" },
          { name: "Biryani Rice", quantity: "500g" },
          { name: "Ginger Paste", quantity: "1 tbsp" },
          { name: "Garam Masala", quantity: "1 tbsp" },
          { name: "Green Chilies", quantity: "8pieces" },
          { name: "Mishti Dahi", quantity: "100ml" },
          {
            name: "Process",
            quantity:
              "Marinate chicken with spices, soak rice and preheat oven to 180°C.Layer marinated chicken and soaked rice in a baking dish, cover with foil and bake for 40-45 minutes.Garnish with fried onions, let rest, then serve hot with accompaniments.",
          },
        ],
      },

      {
        name: "Ilish Paturi",
        image:
          "https://i.pinimg.com/736x/9f/67/66/9f67662f6cda96657ec84fc6e804357a.jpg",
        ingredients: [
          { name: "Hilsa Fish", quantity: "2kg" },
          { name: "Mustard Seeds", quantity: "5 tbsp" },
          { name: "Green Chilies", quantity: "10pieces" },
          { name: "Ginger Paste", quantity: "1 tbsp" },
          { name: "Garam Masala", quantity: "1 tbsp" },
          { name: "Mustard Oil", quantity: "200ml" },
          { name: "Salt", quantity: "To taste" },
          { name: "Banana leaves", quantity: "for wrapping" },
          {
            name: "Process",
            quantity:
              "Marinate hilsa fish in a paste of mustard seeds, poppy seeds, green chilies, turmeric, salt and mustard oil for about 30 minutes.Wrap marinated fish in banana leaves, securing with toothpicks and steam for 15-20 minutes or bake at 180°C (350°F) for approximately 15-20 minutes, until cooked.Serve hot, garnished with green chilies, alongside steamed rice for a flavorful Bengali delicacy.",
          },
        ],
      },

      {
        name: "Falooda",
        image:
          "https://food-fanatic-res.cloudinary.com/iu/s--mYiVUxrI--/f_auto,q_auto/v1463134847/falooda-photo",
        ingredients: [
          { name: "Falooda Sev", quantity: "100g" },
          { name: "Tapioca Pearls", quantity: "2 tbsp" },
          { name: "Rose Syrup", quantity: "3 tbsp" },
          { name: "Milk", quantity: "2 cups" },
          { name: "Ice Cream", quantity: "2 scoops" },
          { name: "Sweetened Condensed Milk", quantity: "2 tbsp" },
          {
            name: "Process",
            quantity:
              "Cook falooda sev and soak tapioca pearls. Prepare rose milk by mixing rose syrup with cold milk.Layer soaked tapioca pearls and cooked falooda sev in glasses, pour rose milk, add ice cream and drizzle sweetened condensed milk.Sprinkle assorted toppings like chopped nuts, tutti frutti and jelly cubes. Serve immediately with a spoon and straw.",
          },
        ],
      },
      {
        name: "Kacchi Biryani",
        image:
          "https://api.ebangladesh.com/upload/shop/items/f8d435c0-d378-11ec-ac3c-451e8527e644/f8d435c0-d378-11ec-ac3c-451e8527e644.png",
        ingredients: [
          { name: "Basmati Rice", quantity: "2 cups" },
          { name: "Mutton", quantity: "1 kg" },
          { name: "Yogurt", quantity: "1 cup" },
          { name: "Ginger Paste", quantity: "2 tbsp" },
          { name: "Garlic Paste", quantity: "2 tbsp" },
          { name: "Green Chilies", quantity: "5-6 pieces" },
          { name: "Lemon Juice", quantity: "3 tbsp" },
          { name: "Whole Spices", quantity: "as needed" },
          { name: "Saffron", quantity: "a pinch" },
          { name: "Mint Leaves", quantity: "1/2 cup" },
          { name: "Coriander Leaves", quantity: "1/2 cup" },
          { name: "Fried Onions", quantity: "1 cup" },
          { name: "Ghee", quantity: "1/2 cup" },
          { name: "Salt", quantity: "to taste" },
          {
            name: "Process",
            quantity:
              "Marinate mutton with yogurt, spices and herbs.Layer marinated mutton and soaked rice in a pot.Cook on low heat until mutton is tender and rice is cooked.",
          },
        ],
      },
      {
        name: "Sharbat-E-Mohabbat",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8xAuCu4gjQyJtkBSrjDvzbH9MIH_618eSuFZaH9tTDEOS2DtoL_h0NcwhZFdgSVy9CRynGahHoEEbxQtlGJ6xFH7FW4u99r1D1qALD3BazIWO8j6lxCIU5EAU8Hg9dBYiI1T4k-bU5ig/s2048/mohabbat+ka+sharbat1a.jpg",
        ingredients: [
          { name: "Rooh Afza", quantity: "1/2 cup" },
          { name: "Water", quantity: "2 cups" },
          { name: "Basil Seeds", quantity: "2 tbsp" },
          { name: "Lemon Juice", quantity: "2 tbsp" },
          { name: "Sugar", quantity: "3 tbsp" },
          { name: "Ice Cubes", quantity: "as needed" },
          { name: "Fresh Mint Leaves", quantity: "for garnish" },
          {
            name: "Process",
            quantity:
              "Soak basil seeds in water until they swell up.In a pitcher, combine Rooh Afza, water, soaked basil seeds, lemon juice and sugar. Stir well until sugar is dissolved.Pour the prepared Sharbat-E-Mohabbat into glasses filled with ice cubes. Garnish with fresh mint leaves and serve chilled.",
          },
        ],
      },
      {
        name: "Beef Tehari",
        image: "https://i.ytimg.com/vi/pBbZfs46vPc/maxresdefault.jpg",
        ingredients: [
          { name: "Beef", quantity: "500g" },
          { name: "Basmati Rice", quantity: "2 cups" },
          { name: "Onions", quantity: "2 large (sliced)" },
          { name: "Potatoes", quantity: "2 medium" },
          { name: "Ginger Paste", quantity: "2 tbsp" },
          { name: "Garlic Paste", quantity: "2 tbsp" },
          { name: "Yogurt", quantity: "1/2 cup" },
          { name: "Tomatoes", quantity: "2 large" },
          { name: "Green Chilies", quantity: "5 (slit)" },
          { name: "Whole Spices", quantity: "as needed" },
          { name: "Turmeric Powder", quantity: "1 tsp" },
          { name: "Red Chili Powder", quantity: "1 tsp" },
          { name: "Coriander Powder", quantity: "1 tsp" },
          { name: "Cumin Powder", quantity: "1 tsp" },
          { name: "Salt", quantity: "to taste" },
          { name: "Cooking Oil", quantity: "1/4 cup" },
          {
            name: "Process",
            quantity:
              "Marinate beef with yogurt, ginger paste, garlic paste and spices. Soak rice for 30 minutes.Onions, add marinated beef, potatoes, tomatoes and whole spices. Cook until beef is tender.Layer cooked beef mixture and soaked rice in a pot. Add water, cover and simmer until rice is cooked. Garnish with fresh coriander leaves before serving.",
          },
        ],
      },

      {
        name: "Chingri Macher Malai Curry",
        image:
          "https://atanurrannagharrecipe.com/wp-content/uploads/2023/01/Chingri-Macher-Malai-Curry-Photo-02.jpg",
        ingredients: [
          { name: "Prawns", quantity: "500g" },
          { name: "Coconut Milk", quantity: "2 cups" },
          { name: "Onions", quantity: "2 large (sliced)" },
          { name: "Ginger Paste", quantity: "2 tbsp" },
          { name: "Garlic Paste", quantity: "2 tbsp" },
          { name: "Green Chilies", quantity: "4-5 (slit)" },
          { name: "Tomatoes", quantity: "2 large " },
          { name: "Turmeric Powder", quantity: "1 tsp" },
          { name: "Red Chili Powder", quantity: "1 tsp" },
          { name: "Coriander Powder", quantity: "1 tsp" },
          { name: "Cumin Powder", quantity: "1 tsp" },
          { name: "Salt", quantity: "to taste" },
          { name: "Cooking Oil", quantity: "1/4 cup" },
          {
            name: "Process",
            quantity:
              "Marinate prawns with turmeric, salt and lemon juice. Slice onions, chop tomatoes and slit green chilies.Sauté onions until golden, then add ginger-garlic paste and spices. Add tomatoes, coconut milk and prawns. Simmer until prawns are cooked through.Garnish with fresh coriander leaves. Serve hot with steamed rice for a delicious Bengali meal.",
          },
        ],
      },

      {
        name: "Luchi with Cholar Dal",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPJwdR5M6Hki5CYE2TQvR8CQ0J4kmb44mHiI43Q7eBkI-5yN5W6xZZTr21UTsrnRL7xj7_ICj06xqn9FxJ0Pxj4pRU4hGaZlD_hTUdJtVE3kAFNBhA_H9rMmYpyjFnNUareiBZi8AxqGc/s1600/IMG_3658.JPG",
        ingredients: [
          { name: "Refined Flour (Maida)", quantity: "2 cups" },
          { name: "Oil", quantity: "2 tbsp" },
          { name: "Salt", quantity: "1/2 tsp" },
          { name: "Water", quantity: "as needed" },
          { name: "Bengal Gram (Chana Dal)", quantity: "1 cup" },
          { name: "Fresh Coconut", quantity: "1/2 cup (grated)" },
          { name: "Ginger", quantity: "1 inch piece (grated)" },
          { name: "Green Chilies", quantity: "2-3 (slit)" },
          { name: "Turmeric Powder", quantity: "1/2 tsp" },
          { name: "Bay Leaf", quantity: "1" },
          { name: "Cinnamon Stick", quantity: "1 inch" },
          { name: "Cloves", quantity: "2-3" },
          { name: "Sugar", quantity: "1 tbsp" },
          { name: "Ghee", quantity: "1 tbsp" },
          { name: "Salt", quantity: "to taste" },
          {
            name: "Process",
            quantity:
              "Boil Bengal gram with turmeric until tender. In a pan, temper grated coconut, ginger, green chilies and whole spices. Add boiled dal, sugar and salt. Simmer until flavours meld. Knead dough with flour, oil and salt. Roll into small circles. Deep-fry in hot oil until puffed and golden brown. Serve hot luchi with aromatic cholar dal. Garnish with fresh coriander leaves. Enjoy the flavourful Bengali meal!",
          },
        ],
      },

      {
        name: "Burger",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMM4lIAwmTBTRzvxwbg02DR_BRZs6_l3eEwKh9tombQ&s",
        ingredients: [
          { name: "Ground Beef", quantity: "500g" },
          { name: "Burger Buns", quantity: "4" },
          { name: "Cheese Slices", quantity: "4" },
          { name: "Lettuce", quantity: "4 leaves" },
          { name: "Tomato", quantity: "1 large (sliced)" },
          { name: "Onion", quantity: "1 large (sliced)" },
          { name: "Pickles", quantity: "4 slices" },
          { name: "Ketchup", quantity: "4 tbsp" },
          { name: "Mustard", quantity: "2 tbsp" },
          { name: "Mayonnaise", quantity: "4 tbsp" },
          { name: "Salt", quantity: "to taste" },
          { name: "Black Pepper", quantity: "to taste" },
          { name: "Oil", quantity: "for grilling" },
          {
            name: "Process",
            quantity:
              "Season ground beef with salt and pepper, shape into patties and grill or fry until cooked through.Toast burger buns, then layer with lettuce, tomato slices, onion slices, pickles and cooked beef patties.Add cheese slices on top of the hot patties to melt, then spread ketchup, mustard and mayonnaise on the buns. Serve hot with your favorite side dishes.",
          },
        ],
      },

      {
        name: "Pizza",
        image:
          "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
        ingredients: [
          { name: "Pizza Dough", quantity: "1 ball" },
          { name: "Tomato Sauce", quantity: "1/2 cup" },
          { name: "Mozzarella Cheese", quantity: "1 cup " },
          {
            name: "Toppings(Pepperoni, Mushrooms, Bell Peppers, Olives)",
            quantity: "as desired",
          },
          { name: "Olive Oil", quantity: "1 tbsp" },
          { name: "Fresh Basil Leaves", quantity: "a handful" },
          { name: "Salt", quantity: "to taste" },
          { name: "Black Pepper", quantity: "to taste" },
          {
            name: "Process",
            quantity:
              "Preheat your oven to the highest temperature. Roll out the pizza dough, spread tomato sauce, sprinkle mozzarella cheese and add desired toppings.Drizzle olive oil over the pizza, season with salt and black pepper, and bake in the preheated oven for 10-15 minutes or until the crust is golden and the cheese is bubbly.Remove the pizza from the oven, garnish with fresh basil leaves, slice and serve hot. Enjoy your homemade pizza!",
          },
        ],
      },

      {
        name: "Pastry Cake",
        image: "https://i.ytimg.com/vi/OHXLCqvP7AM/maxresdefault.jpg",
        ingredients: [
          { name: "Puff Pastry Sheets", quantity: "2 sheets" },
          { name: "Cream Cheese", quantity: "1 cup" },
          { name: "Sugar", quantity: "1/2 cup" },
          { name: "Vanilla Extract", quantity: "1 tsp" },
          { name: "Egg", quantity: "3" },
          { name: "Fresh Fruits", quantity: "as desired" },
          { name: "Apricot Jam", quantity: "1/4 cup" },
          {
            name: "Process",
            quantity:
              "Roll out puff pastry, spread cream cheese mixture and arrange fruit slices.Seal with another puff pastry sheet, brush with egg wash and bake at 200°C for 20-25 minutes.Glaze with melted apricot jam, cool, slice and serve warm or at room temperature.",
          },
        ],
      },

      {
        name: "Fish Curry",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg0fGyjuZHgVOlZubZk5B0L8sJmGDS_b9lfJRUVYixQ&s",
        ingredients: [
          { name: "Fish", quantity: "500g" },
          { name: "Mustard Oil", quantity: "3 tbsp" },
          { name: "Onions", quantity: "2 large (sliced)" },
          { name: "Ginger Paste", quantity: "2 tbsp" },
          { name: "Garlic Paste", quantity: "1 tbsp" },
          { name: "Tomatoes", quantity: "2 large (chopped)" },
          { name: "Green Chilies", quantity: "4-5 (slit)" },
          { name: "Turmeric Powder", quantity: "1 tsp" },
          { name: "Red Chili Powder", quantity: "1 tsp" },
          { name: "Coriander Powder", quantity: "1 tsp" },
          { name: "Cumin Powder", quantity: "1 tsp" },
          { name: "Salt", quantity: "to taste" },
          { name: "Water", quantity: "2 cups" },
          {
            name: "Process",
            quantity:
              "Heat mustard oil in a pan, add sliced onions, ginger paste and garlic paste. Add chopped tomatoes, slit green chilies, turmeric powder, red chili powder, coriander powder and cumin powder. Cook until tomatoes are softened.Add water, bring to a boil, then gently add fish pieces. Simmer until fish is cooked through. Garnish with fresh coriander leaves before serving.",
          },
        ],
      },
    ];

    // Set recipes state
    setRecipes(data);

    // Log fetched data
    console.log("Recipes data fetched successfully:", data);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // search

  const filteredRecipes = recipes.filter((recipe) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const recipeNameLowerCase = recipe.name.toLowerCase();

    // Check if the search term matches the recipe name
    if (recipeNameLowerCase.includes(searchTermLowerCase)) {
      return true;
    } else {
      // Check if the search term matches any ingredient name
      for (const ingredient of recipe.ingredients) {
        const ingredientNameLowerCase = ingredient.name.toLowerCase();
        if (ingredientNameLowerCase.includes(searchTermLowerCase)) {
          return true;
        }
      }
      // If neither recipe name nor any ingredient name matches, return false
      return false;
    }
  });

  // If no recipes match the search term, show "Not Found"
  const noResults = filteredRecipes.length === 0;

  return (
    <>
      <h1 className="hello-text">Welcome to Cuisine Canvas</h1>
      <div className="recipe-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {noResults ? (
          <div className="not-found">No recipes found.</div>
        ) : (
          <div className="recipe-grid">
            {filteredRecipes.map((recipe, index) => (
              <div className="recipe-card" key={index}>
                <img src={recipe.image} alt={recipe.name} />
                <h2>{recipe.name}</h2>
                <ul className="text-left">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>
                      {ingredient.name} - {ingredient.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeGrid;
