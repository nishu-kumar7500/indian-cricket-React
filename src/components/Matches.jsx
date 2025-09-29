import { useState } from "react";

const sampleMatches = [
  {
    id: 1,
    vs: "Australia",
    date: "2025-02-14",
    result: "India won by 7 wickets",
    ground: "MCG",
  },
  {
    id: 2,
    vs: "England",
    date: "2025-03-02",
    result: "India won by 3 runs",
    ground: "Eden Gardens",
  },
  {
    id: 3,
    vs: "Pakistan",
    date: "2024-10-10",
    result: "India won by 10 wickets",
    ground: "Dubai Intl Stadium",
  },
];

export default function Matches() {
  const [matches] = useState(sampleMatches);

  return (
    <section className="matches" id="matches">
      <div className="container">
        <h3>Recent Matches</h3>
        <div className="matches-list">
          {matches.map((m) => (
            <div key={m.id} className="match-card">
              <div className="match-left">
                <strong>India vs {m.vs}</strong>
                <div className="ground">
                  {m.ground} • {new Date(m.date).toLocaleDateString()}
                </div>
              </div>
              <div className="match-right">
                <div className="result">{m.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
