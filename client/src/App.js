import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Err404 from './Components/Templates/Errors/Err404';
import LandinPage from './Components/Pages/LandinPage/LandinPage';
import Home from './Components/Pages/Home/Home';
import Detail from './Components/Pages/Detail/Detail'
import Form from './Components/Pages/Forms/Form'

function App() {
 
  return ( 
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={LandinPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/addVG" component={Form} />
          <Route path="*" component={Err404} />
        </Switch>
      </BrowserRouter>
    </div>
);
}

export default App;
