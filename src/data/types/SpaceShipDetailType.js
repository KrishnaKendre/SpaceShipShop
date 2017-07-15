import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLString,
  GraphQLList,
  GraphQLOutputType,
} from 'graphql';

const TechSpecType = new ObjectType({
  name: 'TechSpecs',
  fields: {
    length: { type: GraphQLString },
    maxaccel: { type: GraphQLString },
    MGLT: { type: GraphQLString },
    maxatmosphericspeed: { type: GraphQLString },
    hull: { type: GraphQLString },
    sensor: { type: GraphQLString },
    targeting: { type: GraphQLString },
    armament: { type: GraphQLString },
    communications: { type: GraphQLString },
  },
});

const SpaceShipDetailType = new ObjectType({
  name: 'SpaceShip',
  fields: {
    name: { type: new NonNull(StringType) },
    manufacturer: { type: new NonNull(StringType) },
    class: { type: new NonNull(StringType) },
    price: { type: GraphQLString },
    media: { type: GraphQLString },
    techspecs: { type: TechSpecType },
  },
});

export default SpaceShipDetailType;

