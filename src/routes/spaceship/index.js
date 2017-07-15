import React from 'react';
import _ from 'lodash';
import SpaceShipDetail from './SpaceShipDetail';
import Layout from '../../components/Layout';

async function action({ params, fetch }) {
  // Set parameter of name off of url to title
  const title = params.name;

  // Query spaceship data
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{spaceShips{name, manufacturer, class, price, techspecs{length maxaccel MGLT maxatmosphericspeed hull sensor targeting armament communications}, media}}',
    }),
  });

  // Set data as json
  const { data } = await resp.json();

  // Make sure data is not null
  if (!data || !data.spaceShips) throw new Error('Failed to load the spaceShips data.');

  // Find spaceship's data only for matching name field
  data.spaceShips = _.find(data.spaceShips, { name: title });

  return {
    chunks: ['SpaceShipDetail'],
    title,
    component: <Layout><SpaceShipDetail title={title} spaceShips={data.spaceShips} /></Layout>,
  };
}


export default action;
