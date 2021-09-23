import './App.css';
import Assignment from './Components/CSSAsignment/Assignment';
import PrintData from './Components/DataPrinting/PrintData';
import FieldMapperConfigMain from './Components/FeildMapperConfiguration/FieldMapperConfig';

function App() {
  return (
    <>
    <div className="App">
        <FieldMapperConfigMain />
        <PrintData />
    </div>
    <div style={{marginTop: "100px"}}>
      <Assignment />
    </div>
    
    </>
  );
}

export default App;
