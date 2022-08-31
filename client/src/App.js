import './App.css';
import Home from './components/Home';
import {useState, useEffect} from 'react'

function App() {
  const [production, setProduction] = useState([])
  const [error, setError] = useState([])

  useEffect(() => {
    fetch("/productions")
    .then(res => res.json())
    .then(data => setProduction(data))
  }, [])

  function addProduction(prod){
    fetch("/productions",{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(prod)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => setProduction([...production, data]))
      }
      else{
        res.json().then(e => setError(Object.entries(e.error).flat()))
      }
    })
    
  }

  function deleteProduction(prod){
    fetch(`/productions/${prod.id}`,{
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => window.location.reload())
  }

  return (
    <div className="App">
      <Home deleteProduction={deleteProduction} error={error} addProduction={addProduction} production={production} />
    </div>
  );
}

export default App;
