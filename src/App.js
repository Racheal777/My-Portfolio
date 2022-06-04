
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './Pages';
import { Routes, Route} from 'react-router-dom'
import Navigation from './Controllers/Navigation';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<Index/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
