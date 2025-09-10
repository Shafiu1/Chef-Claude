// ai.js
export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch("http://localhost:5000/api/recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        });

        if (!response.ok) {
            console.error("Error fetching recipe:", await response.text());
            return "⚠️ Sorry, I couldn't generate a recipe right now.";
        }

        const data = await response.json();
        return data.recipe;  // backend sends { recipe: ... }
    } catch (err) {
        console.error("Error fetching recipe:", err);
        return "⚠️ Sorry, I couldn't generate a recipe right now.";
    }
}
