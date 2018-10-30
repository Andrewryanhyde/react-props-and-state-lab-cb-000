import React from 'react';

<<<<<<< HEAD
const Filters = ({ onChangeType, onFindPetsClick }) => (
  <div className="ui form">
    <h3>Animal type</h3>
    <div className="field">
      <select name="type" id="type" onChange={onChangeType}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
    </div>

    <div className="field">
      <button onClick={onFindPetsClick} className="ui secondary button">
        Find pets
      </button>
    </div>
  </div>
);
=======
class Filters extends React.Component {
  constructor() {
    super();
  }

  onChangeType = (event) => {
    this.props.onChangeType(event.target.value);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" filters = {this.props.filters} value = {this.props.filters.type} onChange={this.onChangeType} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
        <div className="field">
          <button onClick = {this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}
>>>>>>> 3c3bbf969ab3281f0ac31d6f205b24551a3eaf10

export default Filters;
