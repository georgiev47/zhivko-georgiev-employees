import { useState } from 'react';
import './App.css';
import DataGrid from './components/DataGrid';
import LoadFile from './components/LoadFile';

function App() {
  const [bestPair, setBestPair] = useState(null); // when the app grows bigger this can be changed to Redux state

  return (
    <div className="App">
        <LoadFile setBestPair={setBestPair} />
        <DataGrid bestPair={bestPair} />
    </div>
  );
}

export default App;
