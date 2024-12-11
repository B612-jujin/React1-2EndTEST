import logo from './logo.svg';
import Home from "./jujingood/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
