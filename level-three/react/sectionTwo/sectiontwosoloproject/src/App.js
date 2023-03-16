import './App.css';
import Navbar from './components/Navbar.js';
import VacationList from './components/VacationList.js';
import VacationData from './VacationData.js';

export default function App() {
  const vacationElements = VacationData.map(vdata => {
    return (
      <VacationList
        key={vdata.id}
        {...vdata}
      />
    )
  })
  return (
    <div className="container">
      <Navbar />
      {vacationElements}
    </div>    
  )
}
