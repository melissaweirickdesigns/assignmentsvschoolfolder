import { useState } from 'react';
import './App.css';
import FormData from './components/FormData';
import NameBadge from './components/NameBadge';

export default function App() {
  const [nameBadges, setNameBadges] = useState([]);

  const handleFormSubmit = (data) => {
    setNameBadges([...nameBadges, data]);
  }

  return (
    <div className="App">
      <FormData onSubmit={handleFormSubmit} />
      {nameBadges.map((formData, index) => 
        <NameBadge formData={formData} key={formData.email} index={index}/>)
      }
    </div>
  );
}
