import React from 'react';
import Link from '../../components/Link';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Card, Image, Grid } from 'semantic-ui-react';

class Home extends React.Component {
  static propTypes = {
/*    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,*/
    spaceShips: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Watto’s Spaceship Emporium</h1>
          <Grid columns={1}>
            <Grid.Row centered>
              <Grid.Column width={16}>
                <Card.Group itemsPerRow={2} doubling stackable>
                  {this.props.spaceShips.map((item, index) => (
                    <Card key={index} as={Link} to={`/spaceship/${item.name}`} raised >
                      <Image alt="Dummy image" src={item.media} />
                      <Card.Content>
                        <Card.Header>
                          {item.name}
                        </Card.Header>
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
