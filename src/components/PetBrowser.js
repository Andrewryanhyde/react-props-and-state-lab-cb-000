import React from 'react';

import Pet from './Pet';

<<<<<<< HEAD
const PetBrowser = ({ pets, onAdoptPet }) => {
  const petCards = pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />);

  return <div className="ui cards">{petCards}</div>;
};

=======
class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return <Pet isAdopted = {this.props.adoptedPets.includes(pet.id)} onAdoptPet = {this.props.onAdoptPet} />
        })}
      </div>
    );
  }
}

>>>>>>> 3c3bbf969ab3281f0ac31d6f205b24551a3eaf10
export default PetBrowser;
