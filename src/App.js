import './App.css';
import {Header,Footer,Feature} from "./Containers/index";
import { Navbar } from './components/index';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Feature/>
        <Footer/>
    </div>
  );
}

export default App;
