const Ingredients = (props)=>{
    const ingredientsListItems = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    });
    return(
        <section>
            <h2 className="ingredient-title">Ingredients on Hand</h2>
            <ul className="ingredient-list-choosen">
                {ingredientsListItems}
            </ul>

            {props.ingredients.length >= 4 && <div className="make-recipe">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    );
}
export default Ingredients;