import React from "react";
import "./styles.css";
import { createUseStyles } from "react-jss";

const notes = {
  "c#": [
    ["-", "-", "-", "-"],
    [4, 4, 4, 4],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ],
  b: [
    [7, 7, 7, 7],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ],
  e: [
    ["-", "-", "-", "-"],
    [7, 7, 7, 7],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ],
  "f#": [
    ["-", "-", "-", "-"],
    [9, 9, 9, 9],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ],
  a: [
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    [7, 7, 7, 7],
    ["-", "-", "-", "-"]
  ],
  b1: [
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    [9, 9, 9, 9],
    ["-", "-", "-", "-"]
  ],
  "c#1": [
    [9, 9, 9, 9],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ],
  a1: [
    [2, 2, 2, 2],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ],
  e1: [
    [0, 0, 0, 0],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"],
    ["-", "-", "-", "-"]
  ]
};

const Part1 = () => (
  <React.Fragment>
    <Measure {...notes["c#"]} />
    <Measure {...notes["c#"]} />
    <Measure {...notes["c#"]} />
    <Measure {...notes["b"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["f#"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["f#"]} />
    <Measure {...notes["a"]} />
    <Measure {...notes["b1"]} />
    <Measure {...notes["b"]} />
    <Measure {...notes["b"]} />
    <Measure {...notes["c#1"]} />
  </React.Fragment>
);

const Part2 = () => (
  <React.Fragment>
    <Measure {...notes["a1"]} />
    <Measure {...notes["a1"]} />
    <Measure {...notes["a1"]} />
    <Measure {...notes["e1"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["f#"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["e"]} />
    <Measure {...notes["f#"]} />
    <Measure {...notes["a"]} />
    <Measure {...notes["b1"]} />
    <Measure {...notes["b"]} />
    <Measure {...notes["b"]} />
    <Measure {...notes["c#1"]} />
  </React.Fragment>
);

const Station = () => (
  <React.Fragment>
    <Part1 />
    <Part2 />
  </React.Fragment>
);

const measureClasses = createUseStyles({
  root: {
    border: "1px solid black",
    display: "inline-grid"
  },
  cell: {
    minWidth: 24,
    minHeight: 24,
    fontSize: 48,
    border: "1px solid black"
  }
});

const Measure = note => {
  const classes = measureClasses();
  return (
    <div className={classes.root + " measure"}>
      <div className={classes.cell}>{Boolean(note["-"]) ? note["-"] : "-"}</div>
      <div className={classes.cell}>{Boolean(note["-"]) ? note[1] : "-"}</div>
      <div className={classes.cell}>{Boolean(note["-"]) ? note[2] : "-"}</div>
      <div className={classes.cell}>{Boolean(note["-"]) ? note[3] : "-"}</div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Station />
    </div>
  );
}
