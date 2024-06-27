import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Define a functional component called "App"
function App() {
  // Initialize a state variable called "count" with an initial value of 0
  // The "useState" hook returns an array with two elements: the current state value and a function to update the state
  const [count, setCount] = useState(0)

  // Return a JSX fragment that represents the structure of the component
  return (
    // The fragment starts with a <div> element that contains two <a> elements
    <>
      <div>
        {/* The first <a> element is a link to the Vite website */}
        <a href="https://vitejs.dev" target="_blank">
          {/* The <img> element displays the Vite logo */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* The second <a> element is a link to the React website */}
        <a href="https://react.dev" target="_blank">
          {/* The <img> element displays the React logo */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* The <h1> element displays the title "Vite + React" */}
      <h1>Vite + React</h1>
      {/* The <div> element with the "card" class represents a card component */}
      <div className="card">
        {/* The <button> element displays the current count and calls the "setCount" function when clicked */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* The <p> element provides instructions on how to test the HMR feature */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* The <p> element provides information on how to learn more about Vite and React */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
