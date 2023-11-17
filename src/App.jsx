import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { OurRecipes } from "./components/OurRecipes/OurRecipes";
import { RecipeCreate } from "./components/RecipeCreate/RecipeCreate";
import { RecipeEdit } from "./components/RecipeEdit/RecipeEdit";
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails";
import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFound/NotFound";
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-recipes" element={<OurRecipes />} />
                    {/* <Route path="/api-recipes" element={<Home />} /> */}
                    <Route path="/recipes/create" element={<RecipeCreate />} />
                    <Route
                        path="/recipes/edit/:recipeId"
                        element={<RecipeEdit />}
                    />
                    <Route
                        path="/recipes/details/:recipeId"
                        element={<RecipeDetails />}
                    />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </AuthProvider>
    );
}

export default App;
