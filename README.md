# **Cooking Recipes**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## **Summary**

### **This is my first react project, created for ReactJS course exam. Application is focused on practicing react base concepts like state, hooks, context api and routing.**

## **[Live Demo]()**
❗ **In Live Demo sometimes may be a delay with the data which is coming from the server, because the server is deployed in Render using a free plan**.

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

# **Server**

### This server provides just **base functionality** to save your entries in JSON and retrieve them to perform CRUD operations. _**The server has too limited capabilities**_.

1. Doesn't persist any data after restart.
2. Doesn't provide total count of entries in collections.
3. If you aren't creator of the entry, server doesn't allow you to make changes.So you can't store likes, views etc as recipe property.
4. Supports very few types of relations.

# **Getting started** 💻

1. **Clone this repository**

```
git clone https://github.com/nikolai-dimitrov/Cooking-Recipe-App.git
```

2. **Run server**

-   Open new terminal ❗
-   Navigate to project's folder 📂
-   Navigate to folder named server 📂
-   Than type the following command ⤵️

```
npm start ⬅️
```

3. **Run React App locally**

-   Open new terminal❗
-   Navigate to project's folder📂
-   Navigate to folder named client 📂
-   Than type the following commands⤵️

```
npm install ⬅️
npm run dev ⬅️
```

4. **Access the app via following URL** ✅

```
localhost:5173 ⬅️
```

## **Screenshots**

## **_Responsive design is made for 1920x1080 and 1366x860 1024x768 Ipad Air(820x1180). It hasn't completed for all devices and all resolutions yet_**

1. Home Page there you can find most viewed , most liked, most disliked recipes.

-   There you can check recipe likes by 'Show rating' button.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/screenshots/home-page.png)

2. Details Recipe Page there you can find detailed description and image for specific recipe.

-   You can like and dislike this recipe (Only once for each user).
-   You can check recipe reviews.
-   You can check recipe author.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/screenshots/details-page.png)

3. Catalog Page there you can find all recipes posted on the site.

-   You can use pagination button if there are more than 15 recipes on the server.
-   You can find brief information about each recipe on the page.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/screenshots/catalog-page.png)

4. Profile page there you can customize your profile picture.

-   You can see all your posted recipes.
-   You can change your profile avatar (Url).
-   You can check how many reviews you have received on your recipes.
    ![](https://github.com/nikolai-dimitrov/Cooking-Recipe-App/blob/main/screenshots/profile-page.png)
