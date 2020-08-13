import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import search_button from "../images/icon-search.png";

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
  /*
  async componentDidMount() {
    const data = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await data.json();

    this.setState({
      fetchedCountries: countries,
    });
  }*/

  handleSelection(e) {
    let countrySplit = e.target.value.split(" ");
    this.setState({
      selectedCountries: countrySplit,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const dataToSend = {
      countries: this.state.selectedCountries,
    };
    const sendbody = await axios.post(
      "http://localhost:8000/api/countries/filteredcountries",
      dataToSend
    );

    //const fetchedCountries = await receivedInfo.json();

    this.setState({
      fetchedCountries: sendbody.data,
    });
  }

  render() {
    return (
      <div>
        <h1>Question 2</h1>
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
            placeholder="Name of the country"
            onChange={this.handleSelection}
            style={styles.input_bar}
          />
          <img
            src={search_button}
            style={styles.search_button}
            onClick={this.handleSubmit}
          />
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          {this.state.fetchedCountries.map((country) => (
            <div>
              <Link to={"/country/" + country.name} style={styles.link}>
                <p style={styles.links}>{country.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  main_section: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  links: {
    backgroundColor: "dodgerblue",
    margin: 3,
    padding: "10px",
    width: "200px",
  },
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
};
