import React, { Component } from "react";

export default class Question2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedCountries: [],
      selectedCountries: [],
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const data = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await data.json();

    this.setState({
      fetchedCountries: countries,
    });
  }

  handleSelection(e) {
    this.setState({
      selectedCountries: this.state.selectedCountries.push(e.target.value),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.selectedCountries);
  }

  render() {
    return (
      <div>
        <h1>Question 2</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Search" />
          <select
            name="counrtynames"
            multiple={true}
            onChange={this.handleSelection}
            value={["B", "C"]}
          >
            {this.state.fetchedCountries.map((country) => (
              <option value={country.name}>{country.name}</option>

              /*
            <div>
              <label htmlFor={country.name}>{country.name}</label>
              <input type="checkbox" value={country.name} name={country.name} />
            </div>*/
            ))}
          </select>
        </form>
      </div>
    );
  }
}
