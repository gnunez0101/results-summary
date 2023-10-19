import './style.css'

function App() {

  return (
    <>
      <main className="card">
        <section className="result">
          <div className="title">Your Result</div>
          <div className="circle">
            <div className="circle-main">76</div>
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
              <article className="row">
                <div className="category">
                  <img src="./assets/images/icon-reaction.svg" alt="Reaction"/>Reaction</div>
                <div className="score">80<span> / 100</span>
                </div>
              </article>
              <article className="row">
                <div className="category">
                  <img src="./assets/images/icon-memory.svg" alt="Memory"/>Memory</div>
                <div className="score">
                  92<span> / 100</span>
                </div>
              </article>
              <article className="row">
                <div className="category">
                  <img src="./assets/images/icon-verbal.svg" alt="Verbal"/>Verbal</div>
                <div className="score">
                  61<span> / 100</span>
                </div>
              </article>
              <article className="row">
                <div className="category">
                  <img src="./assets/images/icon-visual.svg" alt="Visual"/>Visual</div>
                <div className="score">72<span> / 100</span>
                </div>
              </article>
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
