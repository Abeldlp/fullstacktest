import React, { Component } from "react";
import search_button from "../images/icon-search.png";

export default class Question1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryName: "",
      shown: false,
    };

    this.handleCountryName = this.handleCountryName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCountryName(e) {
    this.setState({
      countryName: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    try {
      const dataFetched = await fetch(
        `http://localhost:8000/api/countries/${this.state.countryName}`
      );

      const dataJson = await dataFetched.json();

      //Inserting just one from the fetched list
      this.setState({
        countryName: dataJson,
        shown: true,
      });
    } catch (error) {
      this.setState({
        countryName: "No country with that name",
      });
    }

    console.log(this.state.countryName);
  }

  render() {
    return (
      <div>
        <h1>Question 1</h1>
        <div
          style={{
            width: "50%",
            textAlign: "left",
            margin: "auto",
            minWidth: "400px",
            paddingBottom: "20px",
          }}
        >
          <span>
            Search for a specific countrty. Type the name of a country, or part
            of it, and the basic information of the country will be displayed
          </span>
          <p>NOTE: This data is being fetched from the backend</p>
        </div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "300px",
            margin: "auto",
            border: "1.5px solid dodgerblue",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            placeholder="Search for specific country "
            onChange={this.handleCountryName}
            style={styles.input_bar}
          />
          <img
            src={search_button}
            style={styles.search_button}
            onClick={this.handleSubmit}
            alt="button"
          />
        </form>
        {this.state.shown && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <div style={{ textAlign: "left", paddingRight: "20px" }}>
              <h3>Country: {this.state.countryName.name}</h3>

              <p>
                <strong>Capital:</strong> {this.state.countryName.capital}
              </p>
              <p>
                <strong>Regio:</strong> {this.state.countryName.region}
              </p>
              <p>
                <strong>Population:</strong> {this.state.countryName.population}
              </p>
              <p>
                <strong>Subregion:</strong> {this.state.countryName.subregion}
              </p>
              <p>
                <strong>Native name:</strong>{" "}
                {this.state.countryName.nativeName}
              </p>
              <p>
                <strong>Calling code:</strong>
                {this.state.countryName.callingCodes}
              </p>
            </div>
            <img
              src={this.state.countryName.flag}
              style={styles.flag}
              alt="flag"
            />
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  input_bar: {
    outline: "none",
    padding: 10,
    border: "none",
    width: "90%",
    fontFamily: "Poppins",
  },
  search_button: {
    height: "30px",
    width: "30px",
    cursor: "pointer",
    padding: 5,
    borderLeft: "1.5px solid dodgerblue",
  },
  flag: {
    height: "200px",
    boxShadow: " 0px 6px 22px -8px rgba(82,82,82,0.9)",
  },
};
