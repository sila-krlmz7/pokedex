import {Cache} from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  #cache: Cache;

  constructor() {
    this.#cache = new Cache(300000)
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ? pageURL : PokeAPI.baseURL + "/location-area?offset=0&limit=20";
    const cached = this.#cache.get<ShallowLocations>(url);
    if (cached !== undefined){
      console.log("came from cache")
      return cached;
    }
    console.log("came from api")
    const response = await fetch(url);
    const data = await response.json();
    this.#cache.add(url ,data);
    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = PokeAPI.baseURL + "/location-area/" + locationName;
    const cached = this.#cache.get<Location>(url);
    if (cached !== undefined){
      console.log("came from cache")
      return cached;
    }
    console.log("came from api")
    const response = await fetch(url);
    const data = await response.json();
    this.#cache.add(url ,data);
    return data;
  }

  async fetchPokemon(pokeName: string): Promise<Pokemon> {
    const url = PokeAPI.baseURL + "/pokemon/" + pokeName;
    const cached = this.#cache.get<Pokemon>(url);
    if (cached !== undefined){
      console.log("came from cache")
      return cached;
    }
    const response = await fetch(url);
    const data = await response.json();
    this.#cache.add(url ,data);
    return data;
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

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: {
      base_stat: number,
      stat: {
        name: string
      }
    }[];
    types: {
        type: {
          name:string
        }
    }[];
}