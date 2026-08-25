import type {State} from "./state.js";

export async function commandCatch (state: State, ... args: string[]): Promise<void> {
    const [pokeName] = args;
    if(!pokeName) {
        console.log("Please provide a pokemon name to catch.");
        return;
    }
    console.log(`Throwing a Pokeball at ${pokeName}...`);
    const pokemon = await state.pokeapi.fetchPokemon(pokeName);

    const catchThreshold = pokemon.base_experience / 300;
    const caught = Math.random() > catchThreshold;

    if (caught) {
        console.log(`${pokeName} was caught!`);
        console.log("You may now inspect it with the inspect command.");
        state.pokedex[pokeName] = pokemon;
    } else {
        console.log(`${pokeName} escaped!`);
    }
}  