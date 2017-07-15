import { GraphQLList as List } from 'graphql';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import SpaceShipDetailType from '../types/SpaceShipDetailType';

// Watto's backend spaceships endpoint
const url = 'http://demo7475333.mockable.io/spaceships';

let spaceShipsDetails = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);
const spaceShipMedia = [
  { media: '../../../spaceship_pics/1_Twin Ion Engine Starfighter.png' },
  { media: '../../../spaceship_pics/2_x_wing_starfighter.jpg' },
  { media: '../../../spaceship_pics/3_Y-wing Starfighter.png' },
  { media: '../../../spaceship_pics/4_YT-1300 Light Freighter.jpg' },
  { media: '../../../spaceship_pics/5_Alpha-class Xg-1 Star Wing.jpg' },
  { media: '../../../spaceship_pics/6_Lambda-class T-4a shuttle.jpg' },
  { media: '../../../spaceship_pics/7_RZ-1 A-wing interceptor.png' },
  { media: '../../../spaceship_pics/8_B-wing heavy assault starfighter.png' },
];

const spaceShips = {
  type: new List(SpaceShipDetailType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url).then(response => response.json()).then((data) => {
        if (data.products != null) {
          spaceShipsDetails = data.products;
          spaceShipsDetails = _.merge(data.products, spaceShipMedia);
          console.log(spaceShipsDetails);
        }

        lastFetchTask = null;
        return spaceShipsDetails;
      }).catch((err) => {
        lastFetchTask = null;
        throw err;
      });

      if (spaceShipsDetails.length) {
        return spaceShipsDetails;
      }

      return lastFetchTask;
    }
    return spaceShipsDetails;
  },
};

export default spaceShips;

