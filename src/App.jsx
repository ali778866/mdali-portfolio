import React, {useEffect, useState} from 'react'
import LoadingScreen from './components/LoadingScreen'
import "./index.css";

function App() {

  const [isLoaded, setLoaded] = useState(false)

  return (
    <>
      <div>
        {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </div>
    </>
  )
}

export default App
