
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './Pages';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
