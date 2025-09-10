import { useState } from "react";
import ClaudeRecipe from "./ClaudRecipe";
import Ingredients from "./Ingredients";

const Main=()=>{

    const [ingredients,setIngredients] = useState(["all the main spices","Pasta","ground beef","tomato paste"]);
    const [recipeShown, setRecipeShown] = useState(false);


    const ingredientsListItems = ingredients.map((ingredient,index)=>{
        return <li key={index}>{ingredient}</li>
    });
    const addIngredient =(formData)=>{
        const newIngredient = formData.get("ingredient");
        setIngredients((ingredients)=>{
            return [
                ...ingredients,
                newIngredient
            ];
        })
    }
    //handle Recipe Click
    const handleRecipeClick=()=>{
        setRecipeShown(true)
    }
    return(
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
            {ingredientsListItems.length > 0 && <Ingredients  ingredients={ingredients} handleRecipeClick={handleRecipeClick}/>}
            {recipeShown && <ClaudeRecipe />}
        </main>
    );
}

export default Main