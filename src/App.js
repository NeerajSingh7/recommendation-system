import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard';
import MovieInfo from './components/MovieInfo';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/movie/:id' element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
