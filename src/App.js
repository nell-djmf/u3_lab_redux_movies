import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'


const App = () => {
  
  return (
    <div className="App">
      <h2>Redux Movies</h2>
      <h3>Click on the movie poster to get info, click the popup poster to close</h3>
      <div className="flex-row">
          <Movies />
      </div>
    </div>
  )
}

export default App
