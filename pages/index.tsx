import React from 'react';
import { NextPage } from 'next';
import Layouts from '@components/layouts';
import PokemonList from '@components/pokemonList';

const HomePage: NextPage = () => {
  return (
    <Layouts title="Pokedex" noHeader={false}>
      <PokemonList owned={false} />
    </Layouts>
  );
};

export default HomePage;
