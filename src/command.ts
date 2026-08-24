import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import type {CLICommand} from "./state.js";
import {commandMap} from "./command_map.js";
import {commandMapb} from "./command_mapb.js";
import {commandExplore} from "./command_explore.js";
import { commandCatch } from "./command_catch.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "There is the help of Pokedex",
            callback: commandHelp,            
        },
        map: {
            name: "map",
            description: "Explore the next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Go back to the previous 20 locations",
            callback: commandMapb
        },
        explore: {
            name: "explore",
            description: "Explore a location area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Catch Pokemons",
            callback: commandCatch
        }
    };
}