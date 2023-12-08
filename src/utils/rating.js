export const sortMostLikedRecipes = (recipes) => {
    return recipes.sort((a, b) => b.likesCount - a.likesCount);
};

export const sortMostUnlikeRecipes = (recipes) => {
    return recipes.sort((a, b) => b.disLikesCount - a.disLikesCount);
};

export const sortMostRatedRecipes = (recipes) => {
    return recipes.sort((a, b) => b.ratings.length - a.ratings.length);
};
