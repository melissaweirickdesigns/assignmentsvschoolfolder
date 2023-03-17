import './App.css';
import VacationCard from './components/VacationCard';
import VacationCardData from './VacationCardData';


export default function App() {
  const vacationCardElements = VacationCardData.map(vdata => {
      return (
        <VacationCard
        key={vdata.id}
        {...vdata}
        />
      )
    })
    return (
      <div className="main-container">
      {vacationCardElements}
    </div>
    )    
}
