import React from 'react';

<<<<<<< HEAD
const Pet = ({ pet: { id, name, type, gender, age, weight, isAdopted }, onAdoptPet }) => (
  <div className="card">
    <div className="content">
      <a className="header">
        {name} {gender === 'female' ? '♀' : '♂'}
      </a>
      <div className="meta">
        <span className="date">{type}</span>
      </div>
      <div className="description">
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
      </div>
    </div>
    <div className="extra content">
      {isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
      ) : (
        <button onClick={() => onAdoptPet(id)} className="ui primary button">
          Adopt pet
        </button>
      )}
    </div>
  </div>
);
=======
class Pet extends React.Component {
  constructor() {
    super();
  }

  onPet = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender === "male" ? "♂" : "♀"})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> :
          <button onClick = {this.onPet} className="ui primary button">Adopt pet</button> }
        </div>
      </div>
    );
  }
}
>>>>>>> 3c3bbf969ab3281f0ac31d6f205b24551a3eaf10

export default Pet;
