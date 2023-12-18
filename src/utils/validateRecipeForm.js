export const validateRecipeForm = (event) => {
    const name = event.target.name;
    let value = event.target.value.trim();
    let err = {};

    if (name === "title" && value.length < 4) {
        err.title = "Title name should be more than 4 characters.";
    }

    if (name === "cookingTime") {
        let valueToNum = Number.parseInt(value);
        if (valueToNum <= 0) {
            err.cookingTime = "Cooking Time should be positive.";
        } else if (isNaN(value)) {
            err.cookingTime = "Cooking Time should be number.";
        }
    }

    if (name === "portions") {
        let valueToNum = Number.parseInt(value);
        if (valueToNum <= 0) {
            err.portions = "Portions should be positive.";
        } else if (isNaN(valueToNum)) {
            err.portions = "Portions should be number.";
        }
    }

    if (
        name === "imageUrl" &&
        !value.includes("http://") &&
        !value.includes("https://")
    ) {
        err.imageUrl = "Image url should contain http:// or https://";
    }

    if (name === "ingredients") {
        let regex = /([A-Za-z0-9]+ - +[A-Za-z0-9]+;)/g;
        let matched = value.match(regex);
        if (!matched) {
            err.ingredients = "Example format: Beef - 200g; Tomatoes - 300g;";
        }

        let valueSplitted = value?.split(";").filter((e) => e != "");
        if (matched?.length < valueSplitted.length) {
            err.ingredients = "Example format: Beef - 200g; Tomatoes - 300g;";
        }
    }

    if (name === "description" && value.length < 10) {
        err.description = "Description should be more than 10 characters.";
    }

    if (Object.entries(err).length == 0) {
        return { [event.target.name]: "" };
    }
    return err;
};
