import React, { Component } from 'react';
import axios from 'axios';
import DigimonCards from './DigimonCards';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_PORT,
      apiData: [],
    };
  }

  componentDidMount = async () => {
    let apiData = await axios.get(`${this.state.server}/apiData`);
    // console.log(apiData.data);
    this.setState({
      apiData: apiData.data,
    });
  };

  addFavorite = async (item) => {
    // console.log(item);
    let favorite = await axios.post(`${this.state.server}/addFavorite`, item);
    // console.log(favorite.data);
  };

  render() {
    return (
      <div>
        <CardColumns bsPrefix="card-columns">
          <DigimonCards
            apiData={this.state.apiData}
            addFavorite={this.addFavorite}
          />
        </CardColumns>
      </div>
    );
  }
}

export default Main;
