import {HashRouter} from "react-router-dom";
import './App.css'
import RoutesApp from "./routesApp";

function App() {

  return (
    <>
      <HashRouter>
        <RoutesApp>
        </RoutesApp>
      </HashRouter>
    </>
  )
}

export default App
