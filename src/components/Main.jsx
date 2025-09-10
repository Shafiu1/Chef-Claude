import { useState } from "react";
import ClaudeRecipe from "./ClaudRecipe";
import Ingredients from "./Ingredients";
import { getRecipeFromMistral } from "../../ai.js";

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");

    const ingredientsListItems = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    });

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients((ingredients) => {
            return [...ingredients, newIngredient];
        });
    };

    // ✅ handle Recipe Click (must be async)
    const getRecipe = async () => {
        const RecipeMarkdown = await getRecipeFromMistral(ingredients);
        console.log(RecipeMarkdown);
        setRecipe(RecipeMarkdown);
    };


    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredientsListItems.length > 0 && (
                <Ingredients ingredients={ingredients} getRecipe={getRecipe} />
            )}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    );
};

export default Main;
