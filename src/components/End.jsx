import React from "react";

const End = () => {
  return (
    <div className="App">
      <div className="endBox">
        <img src="./Images/trophy.png" className="trophy" alt="" srcset="" />
        <h3>Your results</h3>
        <p>5 of 5</p>
        <p>
          <strong>99%</strong>
        </p>
        <p>
          <strong>Your time:</strong> 58sec
        </p>
        <section>
          <button className="button">Check your answers</button>
          <button className="button" style={{ marginLeft: "20px" }}>
            Try again
          </button>
        </section>
      </div>
    </div>
  );
};

export default End;
