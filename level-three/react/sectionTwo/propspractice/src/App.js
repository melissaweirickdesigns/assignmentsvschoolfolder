import './App.css';
import Jokes from './components/Jokes'
import jokeData from "./jokeData"

export default function App() {
  const jokeElements = jokeData.map(joke => {
    return 
      <Jokes
        key={joke.id} 
        setup={joke.setup} 
        punchline={joke.punchline}
      />
  })

  return (
    <div>
        {jokeElements}
    </div>
  );
}


