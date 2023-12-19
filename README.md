# Cooking Recipes App EXAMPLE project with ReactJS

> **This is my first ReactJS EXAMPLE TRAINING project using ReactJS (FrontEnd) and SoftUni Practice Server (BackEnd).Focus of the project is not design html & css but ReactJS basics**

# Project description

### Base project functionality is to share your cooking recipes with other people.There are two types of functionalities that you can check below

1. Guest users functionality:

-   They can access home page, about, register and login pages.
-   They can access catalog with all recipes and more information about specific recipe.
-   They can't make any CRUD operations.

2. Logged In users functionality:

-   Users can perform CRUD operations.
-   Edit and Delete only if this user is author of the recipe.
-   They can like or dislike each recipe (only once).
-   If user visit details page of specific recipe, this recipe views will be increased by 1 (only first visit)
-   User can change his profile picture in profile page.
-   User can track information about his recipe's views in profile page.

# Backend 'server' information

### This server provides just _*base functionality*_ to save your entries in JSON and retrieve them to perform CRUD operations. _*The server has very limited capabilities*_.

> **You can check some of them below**

1. Doesn't persist any data after restart.
2. Doesn't provide total count of entries in collections.
3. If you aren't creator of the entry, server doesn't allow you to make changes.So you can't store likes, views etc as recipe property.
4. Supports very few types of relations.

# How to install this ReactJS project locally

1. Clone this repository

```
git clone https://github.com/nikolai-dimitrov/Cooking-Recipe-App.git
```

## How to config the server

1. Go to project's folder in terminal

-   Go to folder named 'server2' in terminal
-   Than type the following command

```
node server.js
```

2. Server running at port 3030

## How to start the app

1. Go to project's folder in terminal

-   Go to root folder named - 'cooking-recipe-app' in terminal
-   Than type the following command

```
npm run dev
```

2. ReactJS app running at port 5173
3. App should be accessible at this url - **localhost:5173**

# App Screenshots

## **_Responsive design is made for 1920x1080 and 1366x860 1024x768 Ipad Air(820x1180). It hasn't completed for all devices and all resolutions yet_**

## When app is running app should look like images below

1. Home Page there you can find most viewed , most liked, most disliked recipes.

-   There you can check recipe likes by 'Show rating' button.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/src/assets/screenshots/home-page.png)

2. Details Recipe Page there you can find detailed description and image for specific recipe.

-   You can like and dislike this recipe (Only once for each user).
-   You can check recipe reviews.
-   You can check recipe author.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/src/assets/screenshots/details-page.png)

3. Catalog Page there you can find all recipes posted on the site.

-   You can use pagination button if there are more than 15 recipes on the server.
-   You can find brief information about each recipe on the page.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/src/assets/screenshots/catalog-page.png)

4. Profile page there you can customize your profile picture.

-   You can see all your posted recipes.
-   You can change your profile avatar (Url).
-   You can check how many reviews you have received on your recipes.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/src/assets/screenshots/profile-page.png)
