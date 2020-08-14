import React, { Component } from "react";

//IMPORT IMAGES
import image0 from "../images/image1.png";
import image1 from "../images/image2.png";
import image2 from "../images/image3.png";
import image3 from "../images/image4.png";

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reel1: [],
      reel2: [],
      reel3: [],

      //FIRST ROW
      slot1: "",
      slot2: "",
      slot3: "",
      slot4: "",
      slot5: "",
      slot6: "",
      slot7: "",
      slot8: "",

      //SECOND ROW
      slot9: "",
      slot10: "",
      slot11: "",
      slot12: "",
      slot13: "",
      slot14: "",
      slot15: "",
      slot16: "",

      //THIRD ROW
      slot17: "",
      slot18: "",
      slot19: "",
      slot20: "",
      slot21: "",
      slot22: "",
      slot23: "",
      slot24: "",

      //SETS IMAGES
      images: [image0, image1, image2, image3],
      coins: 20,

      //FIRST ROW 3 COMBINATIONS
      cherryFirstRow: false,
      appleFirstRow: false,
      bananaFirstRow: false,
      lemonFirstRow: false,

      //FIRST ROW 2 COMBINATIONS
      cherryFirstRow2: false,
      appleFirstRow2: false,
      bananaFirstRow2: false,
      lemonFirstRow2: false,
      checkable: true,
    };

    this.spinSlot = this.spinSlot.bind(this);
    this.insertNumbers = this.insertNumbers.bind(this);
    this.checkCombination1 = this.checkCombination1.bind(this);
  }

  //CHECKS FIRST ROW HORIZONTALLY
  checkCombination1() {
    let newScore = this.state.coins;
    let threeCherries = false;
    let threeApples = false;
    let threeBananase = false;
    let i;
    if (this.state.checkable) {
      for (i = 0; i < this.state.reel1.length; i++) {
        if (
          //!3 CHERRYS FIRST ROW
          this.state.reel1[i - 1] === 0 &&
          this.state.reel1[i] === 0 &&
          this.state.reel1[i + 1] === 0
        ) {
          this.setState({
            cherryFirstRow: true,
            checkable: false,
            //coins: this.state.coins + 50,
          });
          threeCherries = true;
          newScore += 50;
        } else if (
          //!2 CHERRYS FIRST ROW
          this.state.reel1[i - 1] === 0 &&
          this.state.reel1[i] === 0 &&
          !threeCherries
        ) {
          this.setState({
            cherryFirstRow2: true,
            checkable: false,
            //coins: this.state.coins + 40,
          });
          newScore += 40;
        } else if (
          //!3 APPLES FIRST ROW
          this.state.reel1[i - 1] === 1 &&
          this.state.reel1[i] === 1 &&
          this.state.reel1[i + 1] === 1
        ) {
          this.setState({
            appleFirstRow: true,
            checkable: false,
            //coins: this.state.coins + 20,
          });
          threeApples = true;
          newScore += 20;
        } else if (
          //!2 APPLES FIRST ROW
          this.state.reel1[i - 1] === 1 &&
          this.state.reel1[i] === 1 &&
          !threeApples
        ) {
          this.setState({
            appleFirstRow2: true,
            checkable: false,
            //coins: this.state.coins + 10,
          });
          newScore += 10;
        } else if (
          //!3 BANANAS FIRST ROW
          this.state.reel1[i - 1] === 2 &&
          this.state.reel1[i] === 2 &&
          this.state.reel1[i + 1] === 2
        ) {
          this.setState({
            bananaFirstRow: true,
            checkable: false,
            //coins: this.state.coins + 15,
          });
          threeBananase = true;
          newScore += 15;
        } else if (
          //!2 BANANAS FIRST ROW
          this.state.reel1[i - 1] === 2 &&
          this.state.reel1[i] === 2 &&
          !threeBananase
        ) {
          this.setState({
            bananaFirstRow2: true,
            checkable: false,
            //coins: this.state.coins + 5,
          });
          newScore += 5;
        } else if (
          //!3 LEMONS FIRST ROW
          this.state.reel1[i - 1] === 3 &&
          this.state.reel1[i] === 3 &&
          this.state.reel1[i + 1] === 3
        ) {
          this.setState({
            lemonFirstRow: true,
            checkable: false,
            //coins: this.state.coins + 3,
          });
          newScore += 3;
        }
      }
    }
    this.setState({
      coins: newScore,
    });
  }

  //GETS RANDOM NUMBER FOR EACH SLOT IN THE REEL
  spinSlot() {
    //CHECK IF THERE ARE STILL COINS
    let reel1 = [];
    if (this.state.coins > 0) {
      this.setState({
        coins: this.state.coins - 1,
        checkable: true,

        //GETS FIRST REEL READY
        slot1: Math.floor(Math.random() * 4),
        slot2: Math.floor(Math.random() * 4),
        slot3: Math.floor(Math.random() * 4),
        slot4: Math.floor(Math.random() * 4),
        slot5: Math.floor(Math.random() * 4),
        slot6: Math.floor(Math.random() * 4),
        slot7: Math.floor(Math.random() * 4),
        slot8: Math.floor(Math.random() * 4),

        //GETS SECOND REEL READY
        slot9: Math.floor(Math.random() * 4),
        slot10: Math.floor(Math.random() * 4),
        slot11: Math.floor(Math.random() * 4),
        slot12: Math.floor(Math.random() * 4),
        slot13: Math.floor(Math.random() * 4),
        slot14: Math.floor(Math.random() * 4),
        slot15: Math.floor(Math.random() * 4),
        slot16: Math.floor(Math.random() * 4),

        //GETS THRID REEL READY
        slot17: Math.floor(Math.random() * 4),
        slot18: Math.floor(Math.random() * 4),
        slot19: Math.floor(Math.random() * 4),
        slot20: Math.floor(Math.random() * 4),
        slot21: Math.floor(Math.random() * 4),
        slot22: Math.floor(Math.random() * 4),
        slot23: Math.floor(Math.random() * 4),
        slot24: Math.floor(Math.random() * 4),

        //HIDING SCORES
        cherryFirstRow: false,
        appleFirstRow: false,
        bananaFirstRow: false,
        lemonFirstRow: false,
        cherryFirstRow2: false,
        appleFirstRow2: false,
        bananaFirstRow2: false,
        lemonFirstRow2: false,
      });
    }

    //END OF SET STATE
  }

  //INSERTS EACH SLOT INTO ITS POSITION ON THE REEL
  insertNumbers() {
    this.setState({
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
      reel3: [
        this.state.slot17,
        this.state.slot18,
        this.state.slot19,
        this.state.slot20,
        this.state.slot21,
        this.state.slot22,
        this.state.slot23,
        this.state.slot24,
      ],
    });
  }

  render() {
    return (
      <div>
        <h1>Slot machine</h1>
        <p>coins: {this.state.coins}</p>
        <button onMouseDown={this.spinSlot} onMouseUp={this.insertNumbers}>
          Spin
        </button>
        <button onClick={this.checkCombination1}>Check</button>

        <div style={{ width: "400px", margin: "auto", paddingTop: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot1]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot2]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot3]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot4]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot5]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot6]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot7]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot8]}
                alt=""
              />
            </div>
          </div>

          {/*!SECOND REEL! */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot9]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot10]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot11]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot12]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot13]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot14]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot15]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot16]}
                alt=""
              />
            </div>
          </div>

          {/*!THRID REEL! */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot17]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot18]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot19]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot20]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot21]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot22]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot23]}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ height: "30px" }}
                src={this.state.images[this.state.slot24]}
                alt=""
              />
            </div>
          </div>
        </div>
        {/*First row */}
        {this.state.cherryFirstRow && (
          <div>You got 3 cherries on first row you get 50 coins</div>
        )}
        {this.state.appleFirstRow && (
          <div>You got 3 apples on first row you get 20 coins</div>
        )}
        {this.state.bananaFirstRow && (
          <div>You got 3 bananas on first row you get 15 coins</div>
        )}
        {this.state.lemonFirstRow && (
          <div>You got 3 lemons on first row you get 3 coins</div>
        )}
        {this.state.cherryFirstRow2 && (
          <div>You got 2 cherries on first row you get 40 coins</div>
        )}
        {this.state.appleFirstRow2 && (
          <div>You got 2 apples on first row you get 10 coins</div>
        )}
        {this.state.bananaFirstRow2 && (
          <div>You got 2 bananas on first row you get 5 coins</div>
        )}
        {this.state.lemonFirstRow2 && (
          <div>You got 2 lemons on first row you get 3 coins</div>
        )}
      </div>
    );
  }
}
