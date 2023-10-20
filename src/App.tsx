import { useEffect, useState } from 'react'
import './style.css'

// Types for Typescript:
type typeCategory = {
  category: string,
  score: number,
  icon: string
}

function App() {

  // States
  const [dataCateg, setDataCateg] = useState<typeCategory[]>()
  const [result, setResult] = useState(0)

  useEffect(() => {
    // Loading Data from JSON file
    fetch ('./data.json')
      .then(response => response.json())
      .then(data => setDataCateg(data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if(dataCateg) {
      // Calculations for Results:
      let res = 0
      dataCateg.map( item => res += item.score )    // Calculating total score
      setResult(Math.round(res / dataCateg.length)) // Calculating average
    }
  }, [dataCateg])

  return (
    <>
      <main className="card">
        <section className="result">
          <div className="title">Your Result</div>
          <div className="circle">
            <div className="circle-main">{result}</div>
            <div className="circle-of">of 100</div>
          </div>
          <div className="sub-title">Great</div>
          <div className="comment">
            You scored higher than 65% of the people who have taken these tests.  
          </div>
        </section>
        <section className="summary">
          <div className="summary-wrapper">
            <div className="title">Summary</div>
            <div className="items">
              {/* Display Categories: */}
              { dataCateg && dataCateg.map( (row: typeCategory, index: number) => 
                  <Category key={index}
                    category = {row.category}
                    score    = {row.score}
                    icon     = {row.icon}/>
              )}
            </div>
            <button type="submit">Continue</button>
          </div>
        </section>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Gonzalo M. Núñez B.</a>.
      </footer>
    </>
  )
}
export default App

// Component to render each Category with its data:
function Category ( props: typeCategory ) {
  return (
    <article className="row">
      <div className="category">
        <img src={props.icon} alt={props.category} />{props.category}</div>
      <div className="score">{props.score}<span> / 100</span>
      </div>
    </article>
  )
}
