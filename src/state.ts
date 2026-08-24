import {createInterface, type Interface} from "readline";
import {getCommands} from "./command.js";
import process from "node:process";
import {PokeAPI} from "./pokeapi.js";

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
}

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export function initState(): State {
    
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    
    const registry = getCommands()

    return {
        rl: rl,
        commands: registry,
        pokeapi: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
    }
}