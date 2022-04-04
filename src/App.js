import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import './App.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Routes>
    <Route path ="/" element={<Layout/>}>
      <Route index element={<Home/>}/>

</Route>

    </Routes>
      
    </>
  );
}

export default App;
