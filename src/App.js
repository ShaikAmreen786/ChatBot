import LandingPage from './components/LandingPage';
import RolePredictionForm from './components/RolePredictionForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/predict" element={<RolePredictionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
