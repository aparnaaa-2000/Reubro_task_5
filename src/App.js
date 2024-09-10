import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from '../src/pages/Main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='main' element={<Main/>}/>
    
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
