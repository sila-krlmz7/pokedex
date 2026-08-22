import type {State} from "./state.js";

export function cleanInput(input: string): string[] {
    const trimmedLowered = input.trim().toLowerCase();
    return trimmedLowered ? trimmedLowered.split(/\s+/) : [];
}

export function startREPL(state: State) {
    state.rl.prompt();

    state.rl.on("line", async (input: string) => {
        const word = cleanInput(input);
        const command = state.commands[word[0]];
        if(word.length===0) {
            state.rl.prompt()
        } else if (command){
            try {
                await command.callback(state);
            } catch (error){
                console.log("Error executing command: " + error);
            } finally {
            state.rl.prompt()
            }
        } else {
            console.log("Unknown command")
            state.rl.prompt()
        }
    })
}