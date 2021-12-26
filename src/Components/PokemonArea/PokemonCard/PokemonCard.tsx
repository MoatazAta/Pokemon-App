import { Component } from "react";
import "./PokemonCard.css";

interface PokemonCardProps {
    name: string,
    url: string
}

interface PokemonCardState {
    name: string,
    imageUrl: string,
    pokemonIndex: string
}

class PokemonCard extends Component<PokemonCardProps, PokemonCardState> {

    public constructor(props: PokemonCardProps) {
        super(props);
        this.state = {
            name: "",
            imageUrl: "",
            pokemonIndex: ""
        };
    }

    public async componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({ name, imageUrl, pokemonIndex });
    }

    public render(): JSX.Element {
        return (
            <div className="PokemonCard">
                <div className="card-header">{this.state.pokemonIndex}</div>
                <div className="card-body">
                    <img src={this.state.imageUrl} alt="" />
                    {this.state.name}
                </div>
            </div>
        );
    }
}

export default PokemonCard;
