import React from 'react';
import {useInfiniteQuery} from 'react-query';
import {Pagination} from '../../types';

export enum GameIndexSortOptions {
  BIGGER_INDEX = 'BIGGER_INDEX',
  SMALLER_INDEX = 'SMALLER_INDEX',
}
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

export function usePaginatedPokemons(indexSortValue?: GameIndexSortOptions) {
  const query = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({pageParam = 'https://pokeapi.co/api/v2/pokemon/'}) => {
      return fetchPokemons(pageParam);
    },
    getNextPageParam: (lastPage: PaginatedPokemons) => {
      return lastPage.pagination.next ?? undefined;
    },
  });

  const pokemons = React.useMemo(() => {
    const mergedPokemons =
      query.data?.pages?.map(page => page.pokemons).flat() || [];
    return sortPokemons(mergedPokemons, indexSortValue);
  }, [query.data?.pages, indexSortValue]);

  return {
    ...query,
    pokemons,
  };
}

function sortPokemons(
  pokemons: Pokemon[],
  gameIndexSortValue?: GameIndexSortOptions,
) {
  if (!gameIndexSortValue) {
    return pokemons;
  }
  return [...pokemons].sort((poke1, poke2) => {
    const pokeIndex1 = poke1.game_indices[0].game_index;
    const pokeIndex2 = poke2.game_indices[0].game_index;

    if (pokeIndex1 > pokeIndex2) {
      return gameIndexSortValue === GameIndexSortOptions.BIGGER_INDEX ? -1 : 1;
    }
    if (pokeIndex1 < pokeIndex2) {
      return gameIndexSortValue === GameIndexSortOptions.BIGGER_INDEX ? 1 : -1;
    }
    return 0;
  });
}
