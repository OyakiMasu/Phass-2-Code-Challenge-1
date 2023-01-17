
import './App.css';
import FormData from './Components/FormData';
import SearchBar from './Components/SearchBar';
import Transactions from './Components/Transactions';

function App() {
  return (
    
    <div >
      <div className='header-text'>
        <h2>Bank of Flatiron</h2>
        
      </div>
      <SearchBar/>
      <FormData/>
      <Transactions/>
      
    </div>
  );
}

export default App;


