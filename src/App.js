import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
    <div id="wrapper">
    <Sidebar/>

    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <Navbar/>


    </div>
    </div>




    </div>

    </div>
  );
}

export default App;
