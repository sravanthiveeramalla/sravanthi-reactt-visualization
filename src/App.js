import logo from './logo.svg';
import './App.css';
import { Graph } from './components/graph.js';
import { LineChart } from './components/LineChart.js';

function App() {
  return (
    <div className="App">
    <Graph/>    
    <div className="chart">
        <LineChart/>
      </div>
    </div>
  );
}

export default App;
