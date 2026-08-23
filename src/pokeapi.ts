export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ? pageURL : PokeAPI.baseURL + "/location-area?limit=20";
    const response = await fetch(url);
    return await response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = PokeAPI.baseURL + "/location-area/" + locationName;
    const response = await fetch(url);
    return await response.json();
  }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous:string | null;
    results: {name: string, url: string}[] 
};

export type Location = {
    id: number;
    name: string;
    pokemon_encounters: {
        pokemon: {
        name: string;
        url: string;
        };
    }[];
};