import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'

function App() {

  return (
    <div id="portifolio">
     <h1>Hi, <br /> I'm Hericles Rocha <br/> Fullstack Developer </h1>
     <Sidebar/>
     <MainContent/>
    </div>
  )
}

export default App
