import React from "react";

export default function SlotInstructions() {
  return (
    <div style={styles.main}>
      <h3>SCORE COMBINATION</h3>
      <p>1 spin = 1 coin </p>
      . 3 cherries in a row: won 50 coins <br />
      . 2 cherries in a row: won 40 coins <br />
      . 3 Apples in a row: won 20 coins <br />
      . 2 Apples in a row: won 10 coins <br />
      . 3 Bananas in a row: won 15 coins <br />
      . 2 Bananas in a row: won 5 coins <br />
      . 3 lemons in a row: won 3 coins <br />
    </div>
  );
}

const styles = {
  main: {
    position: "absolute",
    left: "0",
    backgroundColor: "white",
    width: "400px",
    padding: "15px",
    top: "20%",
  },
};
