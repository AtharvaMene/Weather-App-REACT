
import './App.css';
import  { Routes,Route } from "react-router-dom"
import Search from './components/Search';
import Report from './components/Report';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/search-page' element={<Search/>}/>
        <Route path='/report-page' element={<Report/>}/>
      </Routes>
    </div>
  );
}

export default App;
