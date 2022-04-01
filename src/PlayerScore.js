import React from "react";

const PlayerScore = (props) => {
    return (
      <div className="card-container">
        <h1>High Scores Per Country</h1>
        <div className="score-cards">
          {props.Scores.sort((a, b) => a.name.localeCompare(b.name)).map(
            (country) => {
              return (
                <div className="card">
                  <h2>High Scores: {country.name}</h2>
                  {country.scores.map((value) => {
                    return (
                      <p>
                        {value.n}: {value.s}{" "}
                      </p>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      </div>
    );
}
export default PlayerScore;