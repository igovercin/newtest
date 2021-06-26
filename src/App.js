import "./App.css";
import Dashborad from "./layouts/Dashborad.jsx";
import Navi from "./layouts/Navi"
import "semantic-ui-css/semantic.min.css";
import {Container} from "semantic-ui-react"
function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container>
        <Dashborad></Dashborad>
      </Container>
    </div>
  );
}

export default App;
