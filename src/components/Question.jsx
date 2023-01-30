import React from "react";

const Question = () => {
  return (
    <div className="App">
      <div className="questionBox">
        <section className="questionHead">
          <h3>Questions</h3>
          <h5>timer</h5>
        </section>
        <section className="middleBox">
          <div className="questionTitle">
            <p>What is the Capital of India</p>
          </div>
          <div className="option">
            <label className="text">
              <input type="radio" name="answer" />
              Mumbai
            </label>
            <label className="text">
              <input type="radio" name="answer" />
              Delhi
            </label>
            <label className="selected">
              <input type="radio" name="answer" />
              Kolkata
            </label>
            <label className="text">
              <input type="radio" name="answer" />
              Chennai
            </label>
          </div>
        </section>
        <section className="questionBottom">
          <button className="button">Prev</button>
          <button className="button nextBtn">Next</button>
        </section>
      </div>
    </div>
  );
};

export default Question;
