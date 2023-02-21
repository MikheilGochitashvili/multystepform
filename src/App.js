import {useState} from "react";
import { useEffect } from "react";
import grupa1 from "../src/IMG/grupa1.png";

function App() {
  const [next, setNext] = useState(1);
  const [goback, setGoBack] = useState(false);

  const rounds = [
    {
      className: "round",
      step: "STEP 1",
      title: "YOUR INFO",
      id: 1,
    },
    {
      className: "round",
      step: "STEP 2",
      title: "SELECT PLAN",
      id: 2,
    },
    {
      className: "round",
      step: "STEP 3",
      title: "ADD-ONS",
      id: 3,
    },
    {
      className: "round",
      step: "STEP 4",
      title: "SUMMARY",
      id: 4,
    },
  ];
  
  useEffect(() => {
    if(next === 2 || next === 3 || next === 4){
      setGoBack(true)
    }
    else if (next === 1) {
      setGoBack(false)
    }
  }, [next])

  function onNextClick() {
    if(next === 2 || next === 3 || next === 4){
      setGoBack(true)
    }
    else if (next === 1) {
      setGoBack(false)
    }
    if (next > 0 && next < 5) {
      setNext(next + 1);
    }
    if (next === 4) {
      setNext(1);
    }
  }

  function onPrevClick () {
    if(next > 0 && next < 5){
      setNext(next - 1)
    }
    if(next === 1){
      setNext(4)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="pagination">
          <img className="grupa1" src={grupa1} alt="non-pref"></img>
          {rounds.map((item) => {
            return (
              <div className="pagination_pages" onClick={() => setNext(item.id)}>
                <div
                  className={`${item.className} ${
                    next === item.id ? "selected" : ""
                  }`}
                  id={item.id}
                >
                  {item.id}
                </div>
                <div className="page_description">
                  <span className="page_step">{item.step}</span>
                  <span className="page_title">{item.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="inner_container_right_side">
          <div className="steps">
            <div
              className="step step1"
              style={{display: next === 1 ? "flex" : "none"}}
            >
              <div className="step1_title_container">
                <span className="step1_title_header">Personal info</span>
                <span className="step1_title_main">
                  Please provide your name, email address, and phone number
                </span>
              </div>
              <div className="step1_inputs_container">
                <div className="input_inner_container">
                  <span className="input_header">Name</span>
                  <input placeholder="e.g. John Doe" type="text"></input>
                </div>
                <div className="input_inner_container">
                  <span className="input_header">Email address</span>
                  <input
                    placeholder="e.g. johndoe@gmail.com"
                    type="email"
                  ></input>
                </div>
                <div className="input_inner_container">
                  <span className="input_header">Number</span>
                  <input
                    placeholder="e.g. +1 234 567 890"
                    type="number"
                  ></input>
                </div>
              </div>
            </div>
            <div
              className="step step 2"
              style={{display: next === 2 ? "flex" : "none"}}
            >
              <h3>Plans</h3>
            </div>
            <div
              className="step step 3"
              style={{display: next === 3 ? "flex" : "none"}}
            >
              <h1>Add ons</h1>
            </div>
            <div
              className="step step 4"
              style={{display: next === 4 ? "flex" : "none"}}
            >
              <h1>Summary</h1>
            </div>
          </div>
          <div className="button_container">
            <button style={{display: goback ? "block" : "none"}} onClick={onPrevClick} className="goback_button">
              Go Back
            </button>
            <button onClick={onNextClick} className="next_button">
              {next === 4 ? "Finish" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
