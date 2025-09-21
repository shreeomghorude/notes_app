import {Routes, Route} from 'react-router-dom';
// import './App.css';
import {Home} from "./Pages/Home";
import { Archive } from './Pages/Archive';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/archive' element={<Archive />} />
    </Routes>
  );
}

export default App;
