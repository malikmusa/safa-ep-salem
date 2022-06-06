import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import Formulaire from './views/Form/Formulaire';
import Quiz from './views/Quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formulaire />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
