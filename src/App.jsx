import './App.css'
import Tecnologia from "./assets/tec.jpg"

function App() {
  return (
    <><body>


      <section id="center">
        <div className="hero">

        </div>
        <div id="DS">
          <h1>Desenvolvimento de Sistemas</h1>
          <h3>Você precisa dos nossos serviços</h3>



        </div>

      </section>

      <div className="ticks" id="TS">Tecnologias que usamos</div>

      <h4>CSS/javaScript/HTML</h4>


      <section id="next-steps">
        <div id="docs">
          <img src={Tecnologia} alt="" />

        </div>
        <div id="social">

          <h2>Comece aqui o seu começo</h2>
          <h4>O seu começo no nosso futuro </h4>
          <button id='btn'>Aperte aqui pra ver o seu futuro com a gente </button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </body>
    </>
  )
}

export default App
