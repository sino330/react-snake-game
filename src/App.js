import React from "react";
import Navigation from "./components/Navigation";
import Field from "./components/Field";
import Button from "./components/Button";
import ManipulationPanel from "./components/ManipulationPanal";
import useSnakeGame from "./hooks/useSnakeGame";
import "./App.css";



function App() {
  const {
    body,
    difficulty,
    fields,
    start,
    stop,
    reload,
    status,
    updateDirection,
    updateDifficulty,
  } = useSnakeGame();

  return (
    <div className="App">
      {/* header */}
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Geme</h1>
        </div>
        <Navigation
          length={body.length}
          difficulty={difficulty}
          onChangeDifficulty={updateDifficulty}
        />
      </header>

      {/* Main */}
      <main className="footer">
        <Field fields={fields} />
      </main>

      {/* footer */}
      <footer className="footer">
        <Button
          status={status}
          onStop={stop}
          onStart={start}
          onRestart={reload}
        />
        <ManipulationPanel onChange={updateDirection} />
      </footer>
    </div>
  );
}

export default App;
