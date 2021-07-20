import "./App.css";
import Navbar from "./components/Navbar";
import BackgroundImage from './assets/background.jpg';
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import Timelinepage from "./pages/Timelinepage";

function App() {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, boxFit: 'cover', height: '100vh' }}>
      <Navbar />
      <Switch>
         <Route path='/' component={Homepage} exact />
         <Route path='/timeline' component={Timelinepage} />
      </Switch>
    </div>
  );
}

export default App;
