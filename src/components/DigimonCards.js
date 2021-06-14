import React, { Component } from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DigimonCards extends Component {
  render() {
    return (
      <div>
        <CardColumns bsPrefix="card-columns">
          {this.props.apiData.map((item, idx) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.level}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => this.props.addFavorite(item)}
                  >
                    Add to Favorite
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );
  }
}

export default DigimonCards;
