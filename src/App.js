import './App.css';
import PlayerScore from './PlayerScore';
import allCountriesScores from './scores'

function App() {
  return (
    <div className="App">
      <PlayerScore Scores ={allCountriesScores} />
    </div>
  );
}

export default App;
