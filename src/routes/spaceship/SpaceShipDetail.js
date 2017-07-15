import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SpaceShipDetail.css';
import { List, Divider, Card, Button, Image, Grid, Segment } from 'semantic-ui-react';


class SpaceShipDetail extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    spaceShips: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired,
      price: PropTypes.string,
      techspecs: {
        length: PropTypes.string,
        maxaccel: PropTypes.string,
        MGLT: PropTypes.string,
        maxatmosphericspeed: PropTypes.string,
        hull: PropTypes.string,
        sensor: PropTypes.string,
        targeting: PropTypes.string,
        armament: PropTypes.string,
        communications: PropTypes.string,
      },
      media: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Grid columns={2}>
            <Grid.Row stretched>
              <Grid.Column>
                <Image alt="Dummy image" size="large" src={this.props.spaceShips.media} bordered />
                <Divider hidden />
                <div>
                  <p>“I think this is the PERFECT Spaceship… You’re probably thinking, “who cares what you think, I’m paying for the Spaceship.” So can we compromise and agree on one thing? THIS IS THE PERFECT ${ this.props.spaceShips.price ? this.props.spaceShips.price : 'Ask for Price' } Spaceship? Ok, so you’re thinking, “What makes you think I’m going to pay ${ this.props.spaceShips.price ? this.props.spaceShips.price : 'Ask for Price' } for this Spaceship?” Well OK.. how ’bout we agree…THIS IS THE PERFECT ${ this.props.spaceShips.price ? this.props.spaceShips.price : 'Ask for Price' } Spaceship FOR AROUND ${ this.props.spaceShips.price ? this.props.spaceShips.price : 'Ask for Price' }.” When you see this {this.props.spaceShips.name} by {this.props.spaceShips.manufacturer}, you are going to agree. THIS IS THE PERFECT A Class {this.props.spaceShips.class} at ${ this.props.spaceShips.price ? this.props.spaceShips.price : 'Ask for Price' } Spaceship..BUT I’M NOT NECESSARILY PAYING THAT. So if you need the perfect first Spaceship..safe, reliable, affordable, and hella fast. If you want a sensational commuter Spaceship….if you want a terrific alternative Spaceship , or very simply if you want an incredibly clean reliable and affordable Spaceship…..can’t do better than this one! So about the price… we’ve got very very very very wiggle room. Quite frankly when you see this striking “S”…you are going to kick yourself in the “S” if you lose it for a few credits.”</p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h1>Tech Specs</h1>
                  <List>
                    <List.Item>Length: { this.props.spaceShips.techspecs.length ? this.props.spaceShips.techspecs.length : 'Call for info' }</List.Item>
                    <List.Item>Maxaccel: { this.props.spaceShips.techspecs.maxaccel ? this.props.spaceShips.techspecs.maxaccel : 'Call for info' }</List.Item>
                    <List.Item>MGLT: { this.props.spaceShips.techspecs.MGLT ? this.props.spaceShips.techspecs.MGLT : 'Call for info' }</List.Item>
                    <List.Item>Maxatmosphericspeed: { this.props.spaceShips.techspecs.maxatmosphericspeed ? this.props.spaceShips.techspecs.maxatmosphericspeed : 'Call for info' }</List.Item>
                    <List.Item>Hull: { this.props.spaceShips.techspecs.hull ? this.props.spaceShips.techspecs.hull : 'Call for info'}</List.Item>
                    <List.Item>Sensor: { this.props.spaceShips.techspecs.sensor ? this.props.spaceShips.techspecs.sensor : 'Call for info' }</List.Item>
                    <List.Item>Targeting: { this.props.spaceShips.techspecs.targeting ? this.props.spaceShips.techspecs.targeting : 'Call for info' }</List.Item>
                    <List.Item>Armament: { this.props.spaceShips.techspecs.armament ? this.props.spaceShips.techspecs.armament : 'Call for info' }</List.Item>
                    <List.Item>Communications: { this.props.spaceShips.techspecs.communications ? this.props.spaceShips.techspecs.communications : 'Call for info' }</List.Item>
                  </List>
                </Segment>
                <div>
                  <Button color="green" size="massive" floated="right">
                      Buy: { this.props.spaceShips.price ? this.props.spaceShips.price : 'Ask for Price' }
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SpaceShipDetail);
