import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Marvel'])

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ul>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ul>

        <footer id="footer">
            <p>&copy; Desarrollado por Juan Diego Aguirre</p>
            <p>Página creada haciendo uso de <a href="https://reactjs.org/docs/create-a-new-react-app.html">React App</a></p>
        </footer>

        </>   
    );

}

export default GifExpertApp;