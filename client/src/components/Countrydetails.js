import React, { Component } from "react";
import fetch from "node-fetch";

export default class Countrydetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryName: [],
    };
  }

  async componentDidMount() {
    const data = await fetch(`/api/countries/${this.props.match.params.name}`);
    const datajson = await data.json();

    this.setState({
      countryName: datajson,
    });
  }
  render() {
    return (
      <div>
        <h1>Country Details</h1>
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
              <strong>Native name:</strong> {this.state.countryName.nativeName}
            </p>
            <p>
              <strong>Calling code: </strong>
              {this.state.countryName.callingCodes}
            </p>
          </div>
          <img
            src={this.state.countryName.flag}
            style={styles.flag}
            alt="flag"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  flag: {
    height: "200px",
    boxShadow: " 0px 6px 22px -8px rgba(82,82,82,0.9)",
  },
};
