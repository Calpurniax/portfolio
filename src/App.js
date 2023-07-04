import './App.scss';
import { Header } from './components/header'
import { Nav } from './components/nav'
import { Landing } from './layouts/landing'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <Nav />
        <main>
          <Landing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
