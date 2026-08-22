import type {State} from "./state.js";

export function cleanInput(input: string): string[] {
    const trimmedLowered = input.trim().toLowerCase();
    return trimmedLowered ? trimmedLowered.split(/\s+/) : [];
}

export function startREPL(state: State) {
    state.rl.prompt();

    state.rl.on("line", (input: string) => {
        const word = cleanInput(input);
        const command = state.commands[word[0]];
        if(word.length===0) {
            state.rl.prompt()
        } else if (command){
            command.callback(state)
            state.rl.prompt()
        } else {
            console.log("Unknown command")
            state.rl.prompt()
        }
    })
}