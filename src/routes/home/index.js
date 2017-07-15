import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{spaceShips{name,media}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.spaceShips) throw new Error('Failed to load the spaceShips data.');
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: <Layout><Home spaceShips={data.spaceShips} /></Layout>,
  };
}

export default action;
