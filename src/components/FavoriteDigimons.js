import axios from 'axios';
import React, { Component } from 'react';
import FavoriteCards from './FavoriteCards';
import UpdateForm from './UpdateForm';

export class FavoriteDigimons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_PORT,
      favData: [],
      displayForm: false,
      digimaonName: '',
      digimaonImg: '',
      digimaonLevel: '',
      digimaonIdx: '',
    };
  }

  componentDidMount = async () => {
    let favData = await axios.get(`${this.state.server}/favData`);
    // console.log(favData.data);
    this.setState({
      favData: favData.data,
    });
    // console.log(this.state.favData);
  };

  deleteFavorite = async (name) => {
    // console.log(name);
    let deleteData = await axios.delete(
      `${this.state.server}/deleteFavorite/${name}`
    );
    // console.log(deleteData.data);
    this.setState({
      favData: deleteData.data,
    });
  };

  updateForm = async (item, idx) => {
    // console.log(item, idx);
    await this.setState({
      displayForm: true,
      digimaonName: item.name,
      digimaonImg: item.img,
      digimaonLevel: item.level,
      digimaonIdx: idx,
    });
    // console.log(this.state.digimaonName);
  };

  changeName = async (e) => {
    await this.setState({
      digimaonName: e.target.value,
    });
    // console.log(this.state.digimaonName);
  };

  changeImg = async (e) => {
    await this.setState({
      digimaonImg: e.target.value,
    });
    // console.log(this.state.digimaonImg);
  };

  changeLevel = async (e) => {
    await this.setState({
      digimaonLevel: e.target.value,
    });
    // console.log(this.state.digimaonLevel);
  };

  updateFavorite = async (e) => {
    e.preventDefault();
    let idx = this.state.digimaonIdx;
    let item = {
      name: this.state.digimaonName,
      img: this.state.digimaonImg,
      level: this.state.digimaonLevel,
    };

    let updatedFav = await axios.put(
      `${this.state.server}/updateFavorite/${idx}`,
      item
    );
    // console.log(updatedFav.data);
    this.setState({
      favData: updatedFav.data,
    });
  };

  render() {
    return (
      <div>
        {this.state.displayForm && (
          <UpdateForm
            digimaonName={this.state.digimaonName}
            digimaonImg={this.state.digimaonImg}
            digimaonLevel={this.state.digimaonLevel}
            changeName={this.changeName}
            changeImg={this.changeImg}
            changeLevel={this.changeLevel}
            updateFavorite={this.updateFavorite}
          />
        )}

        <FavoriteCards
          favData={this.state.favData}
          deleteFavorite={this.deleteFavorite}
          updateForm={this.updateForm}
        />
      </div>
    );
  }
}

export default FavoriteDigimons;
