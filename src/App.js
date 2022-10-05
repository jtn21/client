import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Details from './views/Details';
import EventForm from './components/EventForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/create" element={<EventForm/>}/>
        <Route path="/event" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
