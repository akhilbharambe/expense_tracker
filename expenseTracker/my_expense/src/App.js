import style from "styled-components";
import HomeComponent from "./modules/home";

const Container = style.div`
background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Rubik;`;

  const Header = style.span`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;`;
function App() {
  return (
    <Container className="App">
      <Header>Expense Tracker</Header>
      <HomeComponent/>
    </Container>
  );
}

export default App;
