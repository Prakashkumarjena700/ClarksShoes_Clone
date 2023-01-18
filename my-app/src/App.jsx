import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='speacer' >speacer</h1>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
