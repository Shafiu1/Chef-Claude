import { useState } from "react";

const Main=()=>{

    const [ingredients,setIngredients] = useState([]);
    const list = ingredients.map((ingredient,index)=>{
        return <li key={index}>{ingredient}</li>
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
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
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <h1>Ingredients on hands</h1>
            <ul className="ingredient-list">
                {list}
            </ul>
        </main>
    );
}

export default Main