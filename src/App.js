import './App.css';
import Data from './Data';
import { useState } from 'react';
import Tours from './component/Tours';

function App() {

  const [tours, setTours] = useState(Data);

  function removeTour(id){
    const newTour = tours.filter( tour=> tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return (<div className='refresh'>
      <h2>No Tours Left</h2>
      <button className='btn-white' onClick={() => setTours(Data)}>
        Refresh
      </button>
    </div>)
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTours={removeTour}></Tours>
    </div>
  );
}

export default App;
