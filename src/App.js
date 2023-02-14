import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs App</h1>
        <Link to='/gif/messi'>Gifs de Messi</Link>
        <Link to='/gif/cat'>Gifs de gatitos</Link>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
