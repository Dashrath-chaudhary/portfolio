import './App.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import About from './components/About';
import TimeLine from './components/TimeLine';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {

  const navItems = [
    {
      id: 1,
      title: "home"
    },
    {
      id: 2,
      title: "about"
    },
    {
      id: 3,
      title: "timeline"
    },
    {
      id: 4,
      title: "skills"
    },
    {
      id: 5,
      title: "contact"
    }
  ];

  const selectedItem = navItems.find(item => item.id === 5);


  return (
    <div className='h-screen w-screen bg-hero-pattern bg-no-repeat bg-cover overflow-x-hidden scroll-smooth'>
      <div className='flex flex-col scroll-smooth'>
        <Navbarr navItems={navItems}/>
        <Home selectedItem={selectedItem}/>
        <About/>
        <TimeLine/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
