import React from 'react';
import { NextPage } from 'next';
import Layouts from '@components/layouts';
import PokemonList from '@components/pokemonList';
import Head from 'next/head';
import Tabs from '@components/tabs';

const HomePage: NextPage = () => {
  return (
    <Layouts>
      <Tabs fixedHeader noPadding variant="badge">
        <Tabs.Item title="Pokédex">
          <PokemonList />
        </Tabs.Item>
        <Tabs.Item title="My Pokémon">
          <PokemonList owned />
        </Tabs.Item>
      </Tabs>
    </Layouts>
  );
};

export default HomePage;
