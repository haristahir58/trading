import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import DataTables from './Components/Table/DataTables'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/Orders' element={<DataTables/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
