const Main=()=>{

    const ingredients = ["Chicken","Oregano","Tomatoes"];
    const list = ingredients.map((ingredient,index)=>{
        return <li key={index}>{ingredient}</li>
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log('Form submitted');
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
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
            <ul>
                {list}
            </ul>
        </main>
    );
}

export default Main