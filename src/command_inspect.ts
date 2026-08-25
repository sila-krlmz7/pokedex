import type {State} from "./state.js";

export async function commandInspect (state: State, ... args: string[]): Promise<void> {
    
    const [pokeName] = args;
    if(!pokeName) {
        console.log("Please provide a pokemon name to inspect.");
        return;
    }
    
    const pokemon = state.pokedex[pokeName]
    if (!pokemon) {
        console.log("You have not caught that pokemon")
    } else {
        console.log(`Name: ${pokemon.name}`)
        console.log(`Height: ${pokemon.height}`)
        console.log(`Weight: ${pokemon.weight}`)
        console.log("Stats:")
        for (const stat of pokemon.stats) {
            console.log(`  -${stat.stat.name}: ${stat.base_stat}`)
        }
        console.log("Types:")
        for (const t of pokemon.types) {
            console.log(`  -${t.type.name}`)
        }
    }
}