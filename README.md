# Cooking Recipes App EXAMPLE project with ReactJS

> **This is example test project using ReactJS (FrontEnd) and SoftUni Practice Server (BackEnd)**
# Project description

### Base project functionality is to share your cooking recipes with other people.There are two types of functionalities that you can check below
1. Guest users functionality:
 - They can access home page, about, register and login pages.
 - They can access catalog with all recipes and more information about specific recipe.
 - They can't make any CRUD operations.
2. Logged In users functionality:
 - Users can perform CRUD operations.
 - Edit and Delete only if this user is author of the recipe.
 - They can like or dislike each recipe (only once).
 - If user visit details page of specific recipe, this recipe views will be increased by 1 (only first visit)
 - User can change his profile picture in profile page.
 - User can track information about his recipe's views in profile page.
# Backend 'server' information
### This server provides just *_base functionality_* to save your entries in JSON and retrieve them to perform CRUD operations. *_The server has very limited capabilities_*.
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
- Go to folder named 'server2' in terminal
- Than type the following command
```
node server.js
```
2. Server running at port 3030
## How to start the app
1. Go to project's folder in terminal
- Go to root folder named - 'cooking-recipe-app' in terminal
- Than type the following command
```
npm run dev
```
2. ReactJS app running at port 5173
3. App should be accessible at this url - **localhost:5173**

https://myoctocat.com/assets/images/base-octocat.svg
