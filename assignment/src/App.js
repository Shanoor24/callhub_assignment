import './App.css';
import PrintData from './Components/DataPrinting/PrintData';
import FieldMapperConfigMain from './Components/FeildMapperConfiguration/FieldMapperConfig';

function App() {
  return (
    <div className="App">
        <FieldMapperConfigMain />
        <PrintData />
    </div>
  );
}

export default App;
