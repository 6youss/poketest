import {useQueries, useQuery} from 'react-query';
import {RessourceList} from '../../types';

export interface PokemonSprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface PokemonDTO {
  id: number;
  name: string;
  sprites: PokemonSprites;
}

export async function fetchOnePokemon(url: string) {
  const res = await fetch(url);
  const pokemon: PokemonDTO = await res.json();
  return pokemon;
}

export async function fetchPokemonRessourceList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const ressourceList: RessourceList = await res.json();
  return ressourceList;
}

export function usePokemons() {
  const {data: ressourceList} = useQuery(['pokemons-ressource-list'], () =>
    fetchPokemonRessourceList(),
  );
  const results = ressourceList?.results || [];

  const pokemonsQueries = useQueries(
    results.map(item => ({
      queryKey: ['pokemon', item.url],
      queryFn: () => fetchOnePokemon(item.url),
      enabled: results.length > 0,
    })),
  );

  return {
    pagination: ressourceList,
    queriesResult: pokemonsQueries,
  };
}
