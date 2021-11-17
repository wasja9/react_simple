
import './App.css';
import First from "./First";
import  Second from "./Second";
import {BrowserRouter,Route} from "../node_modules/react-router-dom";
//import {BrowserRouter,Route} from "react-router-dom";
//const Route = require("react-router-dom").Route;
//const BrowserRouter = require("react-router-dom").BrowserRouter;
function App() {
  return (

    <BrowserRouter>

        <Route exact path="/first"> <First /> </Route>

        <Route exact path="/second" component={Second}></Route>


    </BrowserRouter>
  );
}

export default App;

/*
 <div>
 <h1>
 HEPPY!
 </h1>
 </div>

 */