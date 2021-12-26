import axios from "axios";
import { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

interface PokemonData {
    name: string,
    url: string
}


interface PokemonListState {
    url: string,
    pokemon: PokemonData[]
}

class PokemonList extends Component<{}, PokemonListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            url: "https://pokeapi.co/api/v2/pokemon/",
            pokemon: []
        };
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data.results })
    }



    public render(): JSX.Element {
        return (
            <div className="PokemonList">
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </div>) : (
                    <h5>Loading</h5>
                )}
                )
            </div>
        );
    }
}

export default PokemonList;
