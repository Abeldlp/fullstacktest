import React, { Component } from "react";

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reel1: [],
      reel2: [],
      reel3: [],
      slot1: "",
      slot2: "",
      slot3: "",
      slot4: "",
      slot5: "",
      slot6: "",
      slot7: "",
      slot8: "",
      slot9: "",
      slot10: "",
      slot11: "",
      slot12: "",
      slot13: "",
      slot14: "",
      slot15: "",
      slot16: "",
      coins: 20,
    };

    this.spinSlot = this.spinSlot.bind(this);
  }
  componentDidMount() {
    this.setState({
      slot1: Math.floor(Math.random() * 4),
      slot2: Math.floor(Math.random() * 4),
      slot3: Math.floor(Math.random() * 4),
      slot4: Math.floor(Math.random() * 4),
      slot5: Math.floor(Math.random() * 4),
      slot6: Math.floor(Math.random() * 4),
      slot7: Math.floor(Math.random() * 4),
      slot8: Math.floor(Math.random() * 4),
      slot9: Math.floor(Math.random() * 4),
      slot10: Math.floor(Math.random() * 4),
      slot11: Math.floor(Math.random() * 4),
      slot12: Math.floor(Math.random() * 4),
      slot13: Math.floor(Math.random() * 4),
      slot14: Math.floor(Math.random() * 4),
      slot15: Math.floor(Math.random() * 4),
      slot16: Math.floor(Math.random() * 4),
      coins: this.state.coins--,
      reel1: [
        this.state.slot1,
        this.state.slot2,
        this.state.slot3,
        this.state.slot4,
        this.state.slot5,
        this.state.slot6,
        this.state.slot7,
        this.state.slot8,
      ],
      reel2: [
        this.state.slot9,
        this.state.slot10,
        this.state.slot11,
        this.state.slot12,
        this.state.slot13,
        this.state.slot14,
        this.state.slot15,
        this.state.slot16,
      ],
    });
  }

  spinSlot() {
    this.setState({
      slot1: Math.floor(Math.random() * 4),
      slot2: Math.floor(Math.random() * 4),
      slot3: Math.floor(Math.random() * 4),
      slot4: Math.floor(Math.random() * 4),
      slot5: Math.floor(Math.random() * 4),
      slot6: Math.floor(Math.random() * 4),
      slot7: Math.floor(Math.random() * 4),
      slot8: Math.floor(Math.random() * 4),
      coins: this.state.coins--,
      reel1: [
        this.state.slot1,
        this.state.slot2,
        this.state.slot3,
        this.state.slot4,
        this.state.slot5,
        this.state.slot6,
        this.state.slot7,
        this.state.slot8,
      ],
    });

    console.log(this.state.reel1);
    console.log(this.state.reel2);
  }

  render() {
    return (
      <div>
        <h1>Slot machine</h1>
        <button onClick={this.spinSlot}>Spin</button>
      </div>
    );
  }
}
