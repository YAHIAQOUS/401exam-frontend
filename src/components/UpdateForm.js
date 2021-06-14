import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.updateFavorite}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Digimon Name</Form.Label>
            <Form.Control
              type="text"
              value={this.props.digimaonName}
              onChange={(e) => this.props.changeName(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Digimon Image</Form.Label>
            <Form.Control
              type="text"
              value={this.props.digimaonImg}
              onChange={(e) => this.props.changeImg(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Digimon Level</Form.Label>
            <Form.Control
              type="text"
              value={this.props.digimaonLevel}
              onChange={(e) => this.props.changeLevel(e)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
