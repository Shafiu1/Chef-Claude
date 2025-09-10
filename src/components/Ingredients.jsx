const Ingredients = (props)=>{
    const ingredientsListItems = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    });
    return(
        <section>
            <h2>Ingredients on hands</h2>
            <ul className="ingredient-list">
                {ingredientsListItems}
            </ul>
            {props.ingredients.length >= 4 && <div className="make-recipe">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
                <button onClick={props.handleRecipeClick}>Get a recipe</button>
            </div>}
        </section>
    );
}
export default Ingredients;