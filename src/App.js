
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './Pages';
import { Routes, Route} from 'react-router-dom'
import Projects from './Pages/projects';
import Navigation from './Controllers/Navigation';
import Home from './Pages/Home';
import Artcles from './Pages/articles';

function App() {
  return (
    <div>
      <Routes>
        
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<Index/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/article' element={<Artcles/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
