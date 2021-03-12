import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card/Card';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import Team from './Components/Team/Team';


function App() {
  return (
    <div>
      <Header></Header>
     <TeamDetails></TeamDetails>
     <Team></Team>
     
    </div>
  );
}

export default App;
