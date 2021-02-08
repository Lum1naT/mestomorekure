import './App.css';
import Timer from './components/Timer';
import LetterGenerator from './components/LetterGenerator';
import CategoryGenerator from './components/CategoryGenerator';

function App() {
  return (
    <div className="App">
      <div className="timer-letter">
      <div className="timer-section">      <Timer /></div>
      <div className="letter-section">      <LetterGenerator /></div>   
        </div>

      <div className="category-section"> <CategoryGenerator started="false" /></div>


      
    </div>
  );
}


export default App;
