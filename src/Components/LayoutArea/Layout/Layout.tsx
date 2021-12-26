import { Navigate, Routes, Route } from "react-router-dom";
import PokemonList from "../../PokemonArea/PokemonList/PokemonList";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <div>
                <Header />
            </div>

            <div className="Container">
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default Layout;
