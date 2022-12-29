import React from 'react'
import Cardio from '../components/Cardio';
import Resistance from '../components/Resistance';

export default class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'default' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add Exercise</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='type'>
            <label>Type:</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option disabled value="default">Select Exercise Type</option>
              <option value="cardio" >Cardio</option>
              <option value="resistance" >Resistance</option>
            </select>
          </div>
          {/* Render the component based on the selected option */}
          {this.state.value === 'cardio' && <Cardio />}
          {this.state.value === 'resistance' && <Resistance />}
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
