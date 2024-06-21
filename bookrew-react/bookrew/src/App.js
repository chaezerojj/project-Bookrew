import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [app, setApp] = useState([]);
  useEffect(() => {
    fetch("/api/bookrew")
      .then((res) => {return res.json()})
      .then((data) => {setApp(data)})
  }, [])
  return (
    <div className="App">
      <h2>Bookrew - react</h2>
      <ul>
        {app.map((content, index) => <li key={`${index} - ${content}`}>{content}</li>)}
      </ul>
    </div>
  );
}

export default App;
