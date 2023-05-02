import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld';
import ColorChanger from './components/colorChanger';
import ContactForm from './components/contactForm';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <ColorChanger/>
      <ContactForm/>
    </div>
    
  );
}

export default App;


