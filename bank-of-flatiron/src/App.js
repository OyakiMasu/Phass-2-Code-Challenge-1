
import './App.css';
import NewItemForm from './Components/AdditionalData';
import SearchBar from './Components/SearchBar';
import Transactions from './Components/Transactions';

function App() {
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>Bank of Flatiron</h2>
      </div>
      <SearchBar/>
      <NewItemForm/>
      <Transactions/>
      
    </div>
  );
}

export default App;


