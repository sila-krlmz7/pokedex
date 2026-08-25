import type {State} from "./state.js";

export async function commandPokedex (state: State): Promise<void> {
    console.log("Your Pokedex:")
    for (const poke of Object.values(state.pokedex)) {
        console.log(` - ${poke.name}`)
    }
}