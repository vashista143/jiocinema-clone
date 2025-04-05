import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
