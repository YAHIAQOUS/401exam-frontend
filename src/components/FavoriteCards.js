import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class FavoriteCards extends Component {
  render() {
    return (
      <div>
        {this.props.favData.map((item, idx) => {
          return (
            <Card style={{ width: '18rem' }} index={idx}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.level}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.props.deleteFavorite(item.name)}
                >
                  Delete from Favorite
                </Button>
                <Button
                  variant="primary"
                  onClick={() => this.props.updateForm(item, idx)}
                >
                  Update Information
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default FavoriteCards;
