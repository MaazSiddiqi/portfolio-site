import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar mainText="Maaz Siddiqi." menuItems={{'Home': '', 'About': '#', 'Contact': '#', 'Projects': '#'}} special={['Projects']}/>
    
    </>
  );
}

export default App;
