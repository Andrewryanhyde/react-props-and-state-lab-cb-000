import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
<<<<<<< HEAD
=======
  }

  adoptPet = id => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onChangeType = type => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  findPets = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets');
    }
    if (this.state.filters.type === "cat") {
      fetch("/api/pets?type=cat");
    }
    if (this.state.filters.type === "dog") {
      fetch("/api/pets?type=dog");
    }
    if (this.state.filters.type === "micropig") {
      fetch("/api/pets?type=micropig");
    }
>>>>>>> 3c3bbf969ab3281f0ac31d6f205b24551a3eaf10
  }

  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  };

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
<<<<<<< HEAD
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
=======
              <Filters filters = {this.state.filters} onChangeType = {this.onChangeType} onFindPetsClick = {this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
>>>>>>> 3c3bbf969ab3281f0ac31d6f205b24551a3eaf10
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
