import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';


function App() {
  return (
   <Routes basename="/AmanPortfolio">
      <Route path='/' element={<Layout/>}/>
   </Routes>
   
  );
}

export default App;



