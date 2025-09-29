import players from "../data/players";
import { useState } from "react";

export default function Players() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="players" id="players">
      <div className="container">
        <h3>Top Players</h3>
        <div className="players-grid">
          {players.map((p) => (
            <div
              key={p.id}
              className="player-card"
              onClick={() => setSelected(p)}
            >
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p className="role">{p.role}</p>
              <div className="stats">
                <span>Runs: {p.runs.toLocaleString()}</span>
                <span>Matches: {p.matches}</span>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="modal" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close" onClick={() => setSelected(null)}>
                ✕
              </button>
              <img src={selected.img} alt={selected.name} />
              <h4>{selected.name}</h4>
              <p>{selected.role}</p>
              <div className="stats">
                <div>Runs: {selected.runs.toLocaleString()}</div>
                <div>Matches: {selected.matches}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
