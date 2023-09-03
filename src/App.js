import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History'
import { useSelector } from 'react-redux';
import WordInfo from './components/WordInfo';

function App() {


  const {word} = useSelector(state=>state);


  return (
    <div>
        
        <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='' element={<Home/>} />
              <Route path='/history' element={<History/>} />
              <Route path={`/word/:word`} element={<WordInfo />}/>
            </Route>
        </Routes>

        {/* <Routes>
          <Route path='/word' element={<Navbar />}>
            <Route path={`/word/${word}`} element={<WordInfo />}/>
          </Route>
        </Routes> */}

    </div>
  );
}

export default App;
