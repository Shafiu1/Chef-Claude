import { useState } from "react";

const Main=()=>{

    const [ingredients,setIngredients] = useState([]);
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
            {ingredientsListItems.length>0 && <section>
                <h2>Ingredients on hands</h2>
                <ul className="ingredient-list">
                    {ingredientsListItems}
                </ul>
                <div className="make-recipe">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    <button>Get a recipe</button>
                </div>
            </section>}
        </main>
    );
}

export default Main