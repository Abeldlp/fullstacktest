import React, { Component } from "react";
import { Link } from "react-router-dom";
import search_button from "../images/icon-search.png";
import { connect } from "react-redux";

class Question3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedCountries: [],
      filteredCountries: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //FETCHES ALL THE COUNTRIES FROM THE API AND SAVES THE DATA IN THE STATE
  async componentDidMount() {
    const data = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await data.json();

    this.setState({
      fetchedCountries: countries,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const data = await fetch(
      `https://restcountries.eu/rest/v2/name/${this.props.countryfiltered}`
    );
    const countries = await data.json();
    this.setState({
      filteredCountries: countries,
    });
  }

  render() {
    return (
      <div>
        <h1>Question 3</h1>
        <div
          style={{
            width: "50%",
            textAlign: "left",
            margin: "auto",
            minWidth: "400px",
            paddingBottom: "20px",
          }}
        >
          <p>
            On the left you can find all the data fetched from the url provided
            and displayed as buttons so the user can click and go to a more
            detailed page. On the right you will find all the countries where
            the name is equal or matches partially with the input filed.
          </p>

          <p>NOTE: This data is being fetched from the frontend</p>
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
            placeholder="Name of the country"
            onChange={this.props.filterCountry}
            style={styles.input_bar}
          />
          <img
            src={search_button}
            style={styles.search_button}
            onClick={this.handleSubmit}
            alt="button"
          />
        </form>

        <div className="countries-section" style={styles.main_section}>
          <div>
            <h2>All the countries</h2>
            {this.state.fetchedCountries.map((country) => (
              <div>
                <Link to={"/country/" + country.name} style={styles.link}>
                  <p style={styles.links}>{country.name}</p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h2>Filtered countries</h2>
            {this.state.filteredCountries.map((country) => (
              <div>
                <Link to={"/country/" + country.name} style={styles.link}>
                  <p style={styles.links}>{country.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryfiltered: state.question3.inputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCountry: (e) =>
      dispatch({ type: "COUNTRY_CHANGE", text: e.target.value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question3);

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
