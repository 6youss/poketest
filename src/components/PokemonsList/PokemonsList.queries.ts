import {useInfiniteQuery} from 'react-query';
import {Pagination} from '../../types';
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

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  game_indices: GameIndex[];
}

export async function fetchOnePokemon(url: string) {
  const res = await fetch(url);
  const pokemon: Pokemon = await res.json();
  return pokemon;
}

export interface PaginatedPokemons {
  pagination: Pagination;
  pokemons: Pokemon[];
}

async function fetchPokemons(url: string): Promise<PaginatedPokemons> {
  const pagination: Pagination = await (await fetch(url)).json();
  const pokemons = await Promise.all(
    pagination.results.map(result => fetchOnePokemon(result.url)),
  );
  return {pagination, pokemons};
}

export function usePaginatedPokemons() {
  const query = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({pageParam = 'https://pokeapi.co/api/v2/pokemon/'}) => {
      return fetchPokemons(pageParam);
    },
    getNextPageParam: (lastPage: PaginatedPokemons) => {
      return lastPage.pagination.next ?? undefined;
    },
  });

  return {
    ...query,
    pokemons: query.data?.pages?.map(page => page.pokemons).flat() || [],
  };
}
