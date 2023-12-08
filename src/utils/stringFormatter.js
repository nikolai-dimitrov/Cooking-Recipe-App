export const fromStringToObject = (data) => {
    let ingredients = data.ingredients
        .split(";")
        .filter((el) => el.trim() != "");
    let tuplesIngredients = ingredients.map((i) => i.trim().split("-"));
    let formattedIngredients = tuplesIngredients.map(([k, v]) => [
        k.trim(),
        v.trim(),
    ]);
    let ingredientsObj = Object.fromEntries(formattedIngredients);
    return ingredientsObj;
};

export const fromObjectToString = (data) => {
    let tuplesIngredients = Object.entries(data);
    let arrayIngredients = tuplesIngredients
        .map((arr) => arr.join(" - "))
        .join("; ");
    return arrayIngredients;
};
