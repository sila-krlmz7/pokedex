export function cleanInput(input: string): string[] {
    const trimedLowered = input.trim().toLowerCase()
    return trimedLowered ? trimedLowered.split(/\s+/) : [];
}