import './App.scss';
import { Header } from './components/header'
import { Nav } from './components/nav'
import { Landing } from './layouts/landing'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
